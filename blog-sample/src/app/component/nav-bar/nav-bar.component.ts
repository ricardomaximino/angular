import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { User } from '../../profile/profile.component.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    //this.userService.getLoggedUser().subscribe(loggedUser => this.user = loggedUser);
  }

}
