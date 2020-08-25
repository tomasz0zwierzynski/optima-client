import { Component, OnInit } from '@angular/core';
import { User } from './auth/model/user';
import { AuthenticationService } from './auth/authentication.service';
import { Router, RouterEvent } from '../../node_modules/@angular/router';
import { filter } from '../../node_modules/rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
}


