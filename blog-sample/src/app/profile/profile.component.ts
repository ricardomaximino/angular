import { Component, OnInit } from '@angular/core';
import { User, ProfileConfig } from './profile.component.model';
import { Profile } from 'selenium-webdriver/firefox';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private userService?: UserService) { }

  ngOnInit() {
   this.userService.getLoggedUser().subscribe(loggedUser => this.user = loggedUser);
  }

}


