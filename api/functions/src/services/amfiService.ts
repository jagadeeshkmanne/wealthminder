// src/services/amfiService.ts
export function parseAMFIData(rawData: string): Array<{
  schemeCode: string;
  schemeName: string;
  navValue: number;
  navDate: string;
}> {
  const lines = rawData.split('\n');
  const fundData = [];

  for (let line of lines) {
    line = line.trim();

    // Skip empty lines, headers, and category labels
    if (!line ||
        line.includes('Scheme Code;') ||
        line.startsWith('Open Ended') ||
        !line.includes(';')) {
      continue;
    }

    // Check if this is a fund entry (should have semicolons)
    if (line.includes(';')) {
      const parts = line.split(';');

      // Ensure we have required fields
      if (parts.length >= 6) {
        try {
          const schemeCode = parts[0].trim();
          const schemeName = parts[3].trim();
          const navValue = parseFloat(parts[4].trim());
          const navDate = parts[5].trim();

          // Only add if we have valid data
          if (schemeCode && schemeName && !isNaN(navValue) && navDate) {
            fundData.push({
              schemeCode,
              schemeName,
              navValue,
              navDate
            });
          }
        } catch (error) {
          console.log(`Error parsing line: ${line}`, error);
        }
      }
    }
  }

  return fundData;
}