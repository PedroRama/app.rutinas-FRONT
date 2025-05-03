import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userDataService {
  private userData = {
    name: "",
    email: "",
    password: ""
  };

  setUserData(data: { name: string; email: string; password: string }): void {
    this.userData = data;
  }

  getUserData(): { name: string; email: string; password: string } {
    return this.userData;
  }
}