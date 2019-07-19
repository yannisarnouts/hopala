import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from '@angular/fire/database-deprecated';
import {Item} from '../../model/item';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {
  private dbPath = '/bugs';
  items: Observable<any[]> = null;
  item: FirebaseListObservable<Item> = null;

  constructor(private dbF: AngularFirestore) {
    this.items = dbF.collection('bugs').valueChanges();
  }

  ngOnInit() {
  }
}
