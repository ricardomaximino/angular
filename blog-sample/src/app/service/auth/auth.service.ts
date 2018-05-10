import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  private tokenName = 'token';

  constructor(private jwtHelperService: JwtHelperService) {}

  public getToken(): string {
    return localStorage.getItem(this.tokenName);
  }

  public setToken(token: string): void {
    localStorage.setItem(this.tokenName, token);
  }

  public decodeToken(): any {
    return this.jwtHelperService.decodeToken(this.getToken());
  }

  public getExpirationDate(): any {
    return this.jwtHelperService.getTokenExpirationDate(this.getToken());
  }

  public isExpired(): boolean {
    return this.jwtHelperService.isTokenExpired(this.getToken());
  }

}
