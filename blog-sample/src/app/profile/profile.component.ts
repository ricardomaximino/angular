import { Component, OnInit } from '@angular/core';
import { User, ProfileConfig } from './profile.component.model';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User();
    this.user.name = 'Elena Keylan';
    this.user.profile = new ProfileConfig();
    this.user.profile.banner = '../../assets/image/profileBanner.jpeg';
    this.user.profile.profile = '../../assets/image/profileProfile.jpeg';
    this.user.profile.message = 'I aloways try my best to become better, but never try to be the best.';
  }

}


