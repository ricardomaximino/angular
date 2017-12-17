import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from './services/logged-user.service';
import { User } from './common/common-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  message = 'Today is a good powering day.';
  user: User;

  constructor(private loggedUserService: LoggedUserService) { }

  ngOnInit() {
    console.log('On Init' + Date());
    this.loggedUserService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
