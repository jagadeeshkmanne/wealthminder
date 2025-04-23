import { onSchedule } from 'firebase-functions/v2/scheduler';
import { onRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import fetch from 'node-fetch';
import { parseAMFIData } from './services/amfiService';

// Initialize Firebase Admin SDK
admin.initializeApp();

// Create a reference to Firestore
const db = admin.firestore();

// Shared implementation for both scheduled and HTTP triggers
async function fetchAndProcessAMFIData() {
  try {
    // Fetch AMFI data
    const response = await fetch('https://www.amfiindia.com/spages/NAVAll.txt');
    const data = await response.text();

    // Parse the data
    const parsedData = parseAMFIData(data);

    // Get existing data for comparison
    const existingFundsSnapshot = await db.collection('funds').get();
    const existingFunds = new Map();
    existingFundsSnapshot.forEach(doc => {
      existingFunds.set(doc.id, doc.data());
    });

    // Get list of invested funds (we only keep history for these)
    const investedFundsSnapshot = await db.collection('investments')
      .where('units', '>', 0)
      .get();

    const investedFundCodes = new Set();
    investedFundsSnapshot.forEach(doc => {
      const data = doc.data();
      if (data.schemeCode) {
        investedFundCodes.add(data.schemeCode);
      }
    });

    // Process updates in batches
    let batch = db.batch();
    let historyBatch = db.batch();
    let updatesCount = 0;
    let historyCount = 0;

    for (const fund of parsedData) {
      const { schemeCode, schemeName, navValue, navDate } = fund;

      // Skip if no schemeCode
      if (!schemeCode) continue;

      const fundRef = db.collection('funds').doc(schemeCode);

      // Update fund data
      batch.set(fundRef, {
        schemeCode,
        schemeName,
        navValue,
        navDate,
        lastUpdated: new Date()
      }, { merge: true });

      updatesCount++;

      // Add to history only if this is an invested fund
      if (investedFundCodes.has(schemeCode)) {
        const existingFund = existingFunds.get(schemeCode);

        // Only add to history if NAV changed
        if (existingFund &&
            (existingFund.navValue !== navValue ||
             existingFund.navDate !== navDate)) {

          const historyRef = db.collection('navHistory').doc(`${schemeCode}_${navDate.replace(/-/g, '')}`);

          historyBatch.set(historyRef, {
            schemeCode,
            navValue: existingFund.navValue,
            navDate: existingFund.navDate,
            recordedAt: existingFund.lastUpdated || new Date()
          });

          historyCount++;
        }
      }

      // Commit in batches of 500 (Firestore limit)
      if (updatesCount >= 500) {
        await batch.commit();
        batch = db.batch();
        updatesCount = 0;
      }

      if (historyCount >= 500) {
        await historyBatch.commit();
        historyBatch = db.batch();
        historyCount = 0;
      }
    }

    // Commit any remaining updates
    if (updatesCount > 0) {
      await batch.commit();
    }

    if (historyCount > 0) {
      await historyBatch.commit();
    }

    // Update sync status
    await db.collection('systemConfig').doc('amfiSync').set({
      lastSync: new Date(),
      status: 'success'
    });

    console.log('AMFI data sync completed successfully');
    return { success: true, message: 'AMFI data processed successfully' };
  } catch (error: unknown) {
    console.error('Error in AMFI data sync:', error);

    // Update sync status with error
    await db.collection('systemConfig').doc('amfiSync').set({
      lastSync: new Date(),
      status: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Scheduled version for production
// Scheduled version for production
export const fetchAMFIData = onSchedule({
  schedule: '0 1 * * *',
  timeZone: 'Asia/Kolkata',
}, async (event) => {
  await fetchAndProcessAMFIData();
  // Don't return null, just return nothing (void)
});

// HTTP version for local testing via browser
export const fetchAMFIDataHttp = onRequest(async (req, res) => {
  try {
    // Set CORS headers
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    const result = await fetchAndProcessAMFIData();
    res.status(200).json(result);
  } catch (error: unknown) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Function to get all funds (with pagination)
export const getFunds = onRequest(async (req, res) => {
  try {
    // Set CORS headers
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    // Get pagination parameters
    const limit = parseInt(req.query.limit as string) || 50;
    const startAfter = req.query.startAfter as string;

    // Create query
    let query = db.collection('funds').orderBy('schemeName').limit(limit);

    // Apply pagination if startAfter is provided
    if (startAfter) {
      const startDoc = await db.collection('funds').doc(startAfter).get();
      if (startDoc.exists) {
        query = query.startAfter(startDoc);
      }
    }

    // Execute query
    const snapshot = await query.get();

    // Format results
    const funds: Array<{id: string; [key: string]: any}> = [];
    snapshot.forEach(doc => {
      funds.push({
        id: doc.id,
        ...doc.data()
      });
    });

    // Return results
    res.status(200).json({
      funds,
      lastId: funds.length > 0 ? funds[funds.length - 1].id : null
    });
  } catch (error: unknown) {
    console.error('Error getting funds:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Function to get NAV history for a fund
export const getNavHistory = onRequest(async (req, res) => {
  try {
    // Set CORS headers
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    // Get fund code from query parameters
    const schemeCode = req.query.schemeCode as string;

    if (!schemeCode) {
      res.status(400).json({
        success: false,
        error: 'schemeCode parameter is required'
      });
      return;
    }

    // Query the NAV history for the specified fund
    const snapshot = await db.collection('navHistory')
      .where('schemeCode', '==', schemeCode)
      .orderBy('navDate', 'desc')
      .limit(100)
      .get();

    // Format results
    const history: Array<{id: string; [key: string]: any}> = [];
    snapshot.forEach(doc => {
      history.push({
        id: doc.id,
        ...doc.data()
      });
    });

    // Return results
    res.status(200).json({
      success: true,
      history
    });
  } catch (error: unknown) {
    console.error('Error getting NAV history:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Function to search funds by name
export const searchFunds = onRequest(async (req, res) => {
  try {
    // Set CORS headers
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    // Get search query from request
    const query = req.query.q as string;
    const limit = parseInt(req.query.limit as string) || 20;

    if (!query) {
      res.status(400).json({
        success: false,
        error: 'Search query (q) parameter is required'
      });
      return;
    }

    // Get a count of all funds for debugging
    const totalSnapshot = await db.collection('funds').limit(10).get();
    const sampleFunds: Array<{id: string; schemeName: string}> = [];
    totalSnapshot.forEach(doc => {
      const data = doc.data();
      sampleFunds.push({
        id: doc.id,
        schemeName: data.schemeName || ''
      });
    });

    // Try a more flexible search approach
    const queryLower = query.toLowerCase();
    const snapshot = await db.collection('funds').get();

    // Format results with manual filtering
    const funds: Array<{id: string; [key: string]: any}> = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      const schemeName = (data.schemeName || '').toLowerCase();

      // Include if the scheme name contains the query string
      if (schemeName.includes(queryLower)) {
        funds.push({
          id: doc.id,
          ...data
        });
      }

      // Limit results
      if (funds.length >= limit) {
        return;
      }
    });

    // Return results with debug info
    res.status(200).json({
      success: true,
      query,
      fundsCount: funds.length,
      funds,
      debug: {
        totalFundsInDb: totalSnapshot.size,
        sampleFunds
      }
    });
  } catch (error: unknown) {
    console.error('Error searching funds:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Function to get all funds without pagination
export const getAllFunds = onRequest(async (req, res) => {
  try {
    // Set CORS headers
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    // Get all funds
    const snapshot = await db.collection('funds').get();

    // Format results
    const funds: Array<{id: string; [key: string]: any}> = [];
    snapshot.forEach(doc => {
      funds.push({
        id: doc.id,
        ...doc.data()
      });
    });

    // Return results
    res.status(200).json({
      success: true,
      count: funds.length,
      funds
    });
  } catch (error: unknown) {
    console.error('Error getting all funds:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Add a debug version of the AMFI fetch that logs more info
export const debugFetchAMFIData = onRequest(async (req, res) => {
  try {
    // Set CORS headers
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    // Fetch AMFI data
    const response = await fetch('https://www.amfiindia.com/spages/NAVAll.txt');
    const data = await response.text();

    // Parse the data
    const parsedData = parseAMFIData(data);

    // Log some samples for debugging
    const sampleData = parsedData.slice(0, 5);
    console.log('Sample parsed data:', JSON.stringify(sampleData, null, 2));

    // Save a few sample records directly
    let batchSuccess = false;
    if (parsedData.length > 0) {
      try {
        const batch = db.batch();

        // Save the first 10 records
        const samplesToSave = parsedData.slice(0, 10);

        for (const fund of samplesToSave) {
          const { schemeCode, schemeName, navValue, navDate } = fund;

          if (schemeCode) {
            const fundRef = db.collection('funds').doc(schemeCode);
            batch.set(fundRef, {
              schemeCode,
              schemeName,
              navValue,
              navDate,
              lastUpdated: new Date()
            }, { merge: true });
          }
        }

        await batch.commit();
        batchSuccess = true;
      } catch (batchError) {
        console.error('Batch commit error:', batchError);
      }
    }

    // Return debug info
    res.status(200).json({
      success: true,
      totalParsedRecords: parsedData.length,
      sampleData,
      batchSuccess
    });
  } catch (error: unknown) {
    console.error('Error in debug AMFI fetch:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Function to get a specific fund by schemeCode
export const getFundByCode = onRequest(async (req, res) => {
  try {
    // Set CORS headers
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    // Get fund code from query parameters
    const schemeCode = req.query.schemeCode as string;

    if (!schemeCode) {
      res.status(400).json({
        success: false,
        error: 'schemeCode parameter is required'
      });
      return;
    }

    // Query the fund
    const fundDoc = await db.collection('funds').doc(schemeCode).get();

    if (!fundDoc.exists) {
      res.status(404).json({
        success: false,
        error: `Fund with scheme code ${schemeCode} not found`
      });
      return;
    }

    // Return the fund data
    res.status(200).json({
      success: true,
      fund: {
        id: fundDoc.id,
        ...fundDoc.data()
      }
    });
  } catch (error: unknown) {
    console.error('Error getting fund by code:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Function to get the latest sync status
export const getAmfiSyncStatus = onRequest(async (req, res) => {
  try {
    // Set CORS headers
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    // Get the sync status
    const statusDoc = await db.collection('systemConfig').doc('amfiSync').get();

    if (!statusDoc.exists) {
      res.status(200).json({
        success: true,
        status: {
          lastSync: null,
          status: 'never_synced'
        }
      });
      return;
    }

    // Return the status
    res.status(200).json({
      success: true,
      status: statusDoc.data()
    });
  } catch (error: unknown) {
    console.error('Error getting AMFI sync status:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Function to get funds by category or AMC
export const getFundsByCategory = onRequest(async (req, res) => {
  try {
    // Set CORS headers
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    // Extract query parameters
    const category = req.query.category as string;
    const amc = req.query.amc as string;
    const limit = parseInt(req.query.limit as string) || 50;

    if (!category && !amc) {
      res.status(400).json({
        success: false,
        error: 'Either category or amc parameter is required'
      });
      return;
    }

    // Get all funds to filter
    const querySnapshot = await db.collection('funds').get();

    // Filter results manually since we don't have category/AMC as separate fields yet
    const funds: Array<{id: string; [key: string]: any}> = [];

    querySnapshot.forEach(doc => {
      const data = doc.data();
      const schemeName = (data.schemeName || '').toLowerCase();

      let match = true;

      if (category) {
        const categoryLower = category.toLowerCase();
        if (!schemeName.includes(categoryLower)) {
          match = false;
        }
      }

      if (amc && match) {
        const amcLower = amc.toLowerCase();
        if (!schemeName.includes(amcLower)) {
          match = false;
        }
      }

      if (match) {
        funds.push({
          id: doc.id,
          ...data
        });

        // Limit results
        if (funds.length >= limit) {
          return;
        }
      }
    });

    // Return results
    res.status(200).json({
      success: true,
      count: funds.length,
      funds,
      filters: {
        category,
        amc
      }
    });
  } catch (error: unknown) {
    console.error('Error getting funds by category:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});