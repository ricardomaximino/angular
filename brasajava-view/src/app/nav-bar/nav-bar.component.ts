import { Component, OnInit } from '@angular/core';
import { User } from '../common/common-user';
import { LoggedUserService } from '../services/logged-user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: User;
  constructor(private loggedUserService: LoggedUserService) { }

  ngOnInit() {
    this.loggedUserService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
