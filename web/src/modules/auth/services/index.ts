// src/modules/auth/services/index.ts
import firebaseService from '@/core/services/firebase.service';
import AuthService from './auth.service';

// Create and export the auth service instance
const auth = firebaseService.getAuth();
const firestore = firebaseService.getFirestore();
const authService = new AuthService(auth, firestore);

export { authService };
export { default as AuthService } from './auth.service';