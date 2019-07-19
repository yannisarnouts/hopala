import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { BugsComponent } from './components/bugs/bugs.component';
import { CreatebugComponent } from './components/createbug/createbug.component';
import {AngularFireDatabaseModule} from '@angular/fire/database-deprecated';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BugsComponent,
    CreatebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
