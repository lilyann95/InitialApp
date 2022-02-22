import { Injectable } from '@angular/core';
import { from, Observable, BehaviorSubject } from 'rxjs';
import { CreateUserWithEmailDto } from '../models/create-user.dto';
import { Auth } from '@angular/fire/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import { User } from '@angular/fire/auth';
import { Account } from '../models/account.interface';
import { collection, CollectionReference, doc, docData, Firestore } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // currentUser$: BehaviorSubject<User | null>;

  constructor(
    private firestore: Firestore,
    private auth: Auth
  ) {
    
    // const currentUserData = localStorage.getItem('currentUser');
    // let currentUser = null;
    // if (currentUserData) {
    //   try {
    //     currentUser = JSON.parse(currentUserData);
    //   } catch (e) {
    //     console.error('unable to parse current user data.');
    //     localStorage.removeItem('currentUser');
    //   }
    // }
    // this.currentUser$ = new BehaviorSubject<User | null>(currentUser);
    // onAuthStateChanged(this.auth, (user) => {
    //   this.currentUser$.next(user);
    // });
    // this.currentUser$.subscribe((user: User | null) => {
    //   if (user) localStorage.setItem('currentUser', JSON.stringify(user));
    //   else localStorage.removeItem('currentUser');
    // });
  }

  signUp(userDto: CreateUserWithEmailDto) {
    return new Observable<User>((subscriber) => {
      const auth = getAuth();
      if (!userDto.email || !userDto.password) {
        subscriber.error('empty email or password');
        return;
      }
      createUserWithEmailAndPassword(auth, userDto.email, userDto.password)
        .then((UserCredential) => {
          let user = UserCredential.user;
          if (!user) throw new Error('unexpected null in user data');
          return user;
        })
        .then((user) => {
          console.log('this is the user', user);
          subscriber.next(user);
          subscriber.complete();
        })
        .catch((error) => {
          subscriber.error(error);
        });
    });
  }

  login(email: string, password: string) {
    const auth = getAuth();
    return from(signInWithEmailAndPassword(auth, email, password));
  }

  logout() {
    const auth = getAuth();
    return from(signOut(auth));
  }

  getDataById(id: string) {
    const accountDocumentRef = doc(this.firestore, `accounts/${id}`);
    return docData(accountDocumentRef, {idField: 'id'}) as Observable<Account>;
  }




  //signin with google account though no client id
  // onSignIn(googleUser) {
  //   const auth = getAuth();
  //   console.log('Google Auth Response');

  //   const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
  //     unsubscribe();
  //     if (!this.isUserEqual(googleUser, firebaseUser)) {
  //       const credential = GoogleAuthProvider.credential(
  //         // googleUser.getAuthResponse().id
  //       );
  //       signInWithCredential(auth, credential).catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         const email = error.email;
  //         const credential = GoogleAuthProvider.credentialFromError(error);
  //       });
  //     } else {
  //       console.log('User already signed-in Firebase');
  //     }
  //   });
  // }
  // isUserEqual(googleUser, firebaseUser) {
  //   if(firebaseUser) {
  //     const providerData = firebaseUser.providerData;
  //     for(let i = 0; i < providerData.length; i++) {
  //       if(providerData[i].providerId === GoogleAuthProvider.PROVIDER_ID && 
  //         providerData[i].uid === googleUser.getBasicProfile().getId()) {
  //           return true;
  //       }
  //     }
  //   }
  //   return false;
  // }

  
}
