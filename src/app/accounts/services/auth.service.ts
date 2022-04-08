import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { CreateUserWithEmailDto } from '../models/create-user.dto';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { User, Auth } from '@angular/fire/auth';
import { Account } from '../models/account.interface';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection, CollectionReference, getDocs } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private firestore: Firestore,
    private auth: Auth,
  ) { }

  signUp(userDto: CreateUserWithEmailDto) {
    return new Observable<User>((subscriber) => {
      if (!userDto.email || !userDto.password) {
        subscriber.error('empty email or password');
        return;
      }
      createUserWithEmailAndPassword(this.auth, userDto.email, userDto.password)
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
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    localStorage.clear();
    return from(signOut(this.auth));
  }

  // getCollectionRef(parentId: string) {
  //   return collection(
  //     this.firestore,
  //     `${this.parentCollectionPath}/${parentId}/${this.subCollectionPath}`
  //   ) as CollectionReference;
  // }
  getDataById(id: string) {
    const accountDocumentRef = doc(this.firestore, `accounts/${id}`);
    return docData(accountDocumentRef, {idField: 'id'}) as Observable<Account>;
  }
  // dataSnapshot(parentId: string): Observable<Partial<T>[]> {
  //   return from(
  //     getDocs(this.getCollectionRef(parentId)).then((snapshot) => {
  //       return snapshot.docs.map((doc) => {
  //         return { ...doc.data(), uid: doc.id } as T;
  //       });
  //     })
  //   );
  // }
}
