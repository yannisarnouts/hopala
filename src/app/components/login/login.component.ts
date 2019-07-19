import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User = new User();

  constructor(public authSer: AuthService) { }

  ngOnInit() {
  }
  doLogin() {
    this.authSer.doLogin(this.user.email, this.user.password);
  }
}
