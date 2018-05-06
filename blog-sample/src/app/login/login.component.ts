import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/http/login.service';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = 'admin';
  public password = 'admin';
  public rememberme = true;

  constructor(private loginService: LoginService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    console.log('test');
    this.loginService.getToken(this.username, this.password)
      .subscribe(response => {
        if (this.rememberme) {
          this.authService.setToken(response['token']);
        }
        this.router.navigate(['/home']);
      });
  }
}
