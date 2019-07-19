import { Component, OnInit } from '@angular/core';
import {Item} from '../../model/item';
import {AngularFireDatabase, FirebaseListObservable} from '@angular/fire/database-deprecated';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-createbug',
  templateUrl: './createbug.component.html',
  styleUrls: ['./createbug.component.scss']
})
export class CreatebugComponent implements OnInit {
  private dbPath = '/hopalaapp';
  items: Observable<any[]> = null;
  private bug: Item = new Item();

  constructor(private dbF: AngularFirestore) {
    this.items = dbF.collection('bugs').valueChanges();
  }

  ngOnInit() {
  }

  public addBug() {
    let bugCollection = this.dbF.collection<Item>('bugs');
    bugCollection.add({ naam: this.bug.naam, beschrijving: this.bug.beschrijving });
  }
}
