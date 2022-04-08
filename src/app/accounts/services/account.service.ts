import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  CollectionReference,
  docData,
  doc,
} from '@angular/fire/firestore';
import {
  addDoc,
  deleteDoc,
  DocumentReference,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { from, Observable } from 'rxjs';
import { Account } from '../models/account.interface';

@Injectable({
  providedIn: 'root',
})

export class AccountService {
  // accountsCollection?: CollectionReference<Account>;

  constructor(private firestore: Firestore) {
    // this.accountsCollection = collection(this.firestore, 'accounts');
  }

  create(account: Account) {  //correct working function
    const accountsCollection = collection(this.firestore, 'accounts');
    if (accountsCollection) {
      return from(addDoc(accountsCollection, account));
    } else {
      console.error('firestore uninitialized.');
    }
    return null;
  }

  getData(): Observable<Account[]> | null {   //correct working function
    const accountsCollection = collection(this.firestore, 'accounts');
    if (accountsCollection) {
      return collectionData(accountsCollection, { idField: 'id' }) as Observable<Account[]>;
    } else {
      console.error('firestore uninitialized.');
    }
    return null;
  }

  delete(account: Account) {
    const accountDocumentRef = doc(this.firestore, `accounts/${account.id}`); // complete though not tested
    return deleteDoc(accountDocumentRef);
  }

  // update(id: string, changes: Partial<Account>): Observable<void> | null {
  //   const accountDocumentRef = doc(this.firestore, `accounts/${changes.id}`); // complete though not tested
  //   if (!id) {
  //     console.log('no account id');
  //   }
  //   if (this.accountsCollection) {
  //     return from(updateDoc(accountDocumentRef, changes));
  //   } else {
  //     console.error('firestore uninitialized.');
  //   }
  //   return null;
  // }

  updateRecord(account: Account) {  //correct, complete but not tested
    const accountDocumentRef = doc(this.firestore, `accounts/${account.id}`);
    return setDoc(accountDocumentRef, account);
  }
}

//Subscribe
// subscription = this.itemRef.snapshotChanges().subscribe();

//Unsubscribe
// subscription.unsubscribe()