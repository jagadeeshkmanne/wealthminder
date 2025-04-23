import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { firebaseConfig } from '@/core/config/firebase.config';

/**
 * Firebase service singleton to manage Firebase instances
 */
class FirebaseService {
  private static instance: FirebaseService;
  private app: any;
  private auth: Auth;
  private firestore: Firestore;
  private storage: FirebaseStorage;

  private constructor() {
    // Initialize Firebase
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }

  /**
   * Get singleton instance of FirebaseService
   */
  public static getInstance(): FirebaseService {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService();
    }
    return FirebaseService.instance;
  }

  /**
   * Get Firebase Auth instance
   */
  public getAuth(): Auth {
    return this.auth;
  }

  /**
   * Get Firestore instance
   */
  public getFirestore(): Firestore {
    return this.firestore;
  }

  /**
   * Get Firebase Storage instance
   */
  public getStorage(): FirebaseStorage {
    return this.storage;
  }
}

export default FirebaseService.getInstance();