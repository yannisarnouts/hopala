import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hopalaApp';

  constructor(private authSer: AuthService) {}

  isLoggedIn(): boolean {
    return this.authSer.isLoggedIn();
  }
}
