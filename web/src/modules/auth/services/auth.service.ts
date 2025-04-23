// src/modules/auth/services/auth.service.ts
import {
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendEmailVerification
} from 'firebase/auth';

import { doc, setDoc, getDoc, updateDoc, Firestore } from 'firebase/firestore';
import { LoginCredentials, RegisterCredentials, UpdatePasswordCredentials, UserRole } from '@/shared/types';

class AuthService {
  private auth: Auth;
  private firestore: Firestore;

  constructor(auth: Auth, firestore: Firestore) {
    this.auth = auth;
    this.firestore = firestore;
  }

  /**
   * Sign up a new user with email and password
   */
  async signUp(credentials: RegisterCredentials): Promise<UserCredential> {
    const { email, password, displayName } = credentials;

    const userCredential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    // Update profile
    await updateProfile(userCredential.user, {
      displayName
    });

    // Create user document in Firestore
    await this.createUserDocument(userCredential.user);

    return userCredential;
  }

  /**
   * Sign in with email and password
   */
  async signIn(credentials: LoginCredentials): Promise<UserCredential> {
    const { email, password } = credentials;

    const userCredential = await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    // Update last login
    await this.updateUserLogin(userCredential.user);

    return userCredential;
  }

  /**
   * Sign in with Google
   */
  async signInWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();

    const userCredential = await signInWithPopup(this.auth, provider);

    // Create or update user document
    await this.createUserDocument(userCredential.user);

    return userCredential;
  }

  /**
   * Sign out the current user
   */
  async signOut(): Promise<void> {
    return signOut(this.auth);
  }

  /**
   * Send password reset email
   */
  async resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email);
  }

  /**
   * Send email verification
   */
  async sendVerificationEmail(user: User): Promise<void> {
    return sendEmailVerification(user);
  }

  /**
   * Update user profile
   */
  async updateUserProfile(
    user: User,
    displayName: string,
    photoURL?: string
  ): Promise<void> {
    // Update Firebase Auth profile
    await updateProfile(user, {
      displayName,
      photoURL: photoURL || user.photoURL
    });

    // Update Firestore document
    const userRef = doc(this.firestore, 'users', user.uid);
    await updateDoc(userRef, {
      displayName,
      photoURL: photoURL || user.photoURL
    });
  }

  /**
   * Update user password
   */
  async updateUserPassword(
    user: User,
    credentials: UpdatePasswordCredentials
  ): Promise<void> {
    const { currentPassword, newPassword } = credentials;

    // Re-authenticate user before changing password
    const credential = EmailAuthProvider.credential(
      user.email || '',
      currentPassword
    );

    await reauthenticateWithCredential(user, credential);

    // Update password
    return updatePassword(user, newPassword);
  }

  /**
   * Create or update user document in Firestore
   */
  private async createUserDocument(user: User): Promise<void> {
    if (!user.uid) return;

    const userRef = doc(this.firestore, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      // Create new user document if it doesn't exist
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || '',
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        role: UserRole.USER,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        preferences: {
          theme: 'light',
          currency: 'INR',
          language: 'en',
          timezone: 'Asia/Kolkata',
          emailNotifications: true
        }
      });
    } else {
      // Just update last login time
      await this.updateUserLogin(user);
    }
  }

  /**
   * Update user's last login time
   */
  private async updateUserLogin(user: User): Promise<void> {
    if (!user.uid) return;

    const userRef = doc(this.firestore, 'users', user.uid);
    await updateDoc(userRef, {
      lastLogin: new Date().toISOString()
    });
  }
}

export default AuthService;