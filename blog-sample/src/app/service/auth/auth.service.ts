import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private tokenName = 'token';

  constructor() {}

  public getToken(): string {
    return localStorage.getItem(this.tokenName);
  }

  public setToken(token: string): void {
    localStorage.setItem(this.tokenName, token);
  }


}
