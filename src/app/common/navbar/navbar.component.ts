import { Component, OnInit } from '@angular/core';
import { User } from '../../auth/model/user';
import { AuthenticationService } from '../../auth/authentication.service';
import { Router, RouterEvent, NavigationEnd } from '../../../../node_modules/@angular/router';
import { filter } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  admin = false;
  user = false;

  userObject: User;

constructor(private authenticationService: AuthenticationService, private router: Router) {
  router.events.subscribe( e => {
   if ( e instanceof NavigationEnd)
      this.refreshNavbar();
    });
  }

  refreshNavbar(): void {
    this.userObject = this.authenticationService.currentUserValue;
    if (this.userObject) {
      let roles = this.userObject.roles;

      if (roles.includes('ADMIN')) this.admin = true;
      if (roles.includes('USER')) this.user = true;
    }
  }

  ngOnInit(): void {
    this.refreshNavbar();
  }

  logout() {
    this.authenticationService.logout();
    location.reload();
  }

}
