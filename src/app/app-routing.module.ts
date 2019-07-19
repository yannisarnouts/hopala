import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {BugsComponent} from './components/bugs/bugs.component';
import {CreatebugComponent} from './components/createbug/createbug.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'bugs', component: BugsComponent},
  {path: 'createbugs', component: CreatebugComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
