import { Component, inject } from '@angular/core';
import { ServerService } from '../../../services/server.service';
import { userDataService } from '../../../services/userdata/user-data.service';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  private serviceUserData = inject(userDataService);

  nameP: string = "";
  emailP: string = "";
  passwordP: string = "";

  onChangeName($event: Event): void {
    const value = ($event.target as HTMLInputElement).value;
    this.serviceUserData.setUserData({ ...this.serviceUserData.getUserData(), name: value });
  }
  
  onChangeEmail($event: Event): void {
    const value = ($event.target as HTMLInputElement).value;
    this.serviceUserData.setUserData({ ...this.serviceUserData.getUserData(), email: value });
  }
  
  onChangePassword($event: Event): void {
    const value = ($event.target as HTMLInputElement).value;
    this.serviceUserData.setUserData({ ...this.serviceUserData.getUserData(), password: value });
  }

}
