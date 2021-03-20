import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public loginObj = { name: '', city: '', contact: '',email: '' };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  sendData() {
    console.log("User Name = "+this.loginObj.name);
    console.log("success doate form page session = "+sessionStorage.getItem('login'));
    this.api.donationForm(this.loginObj);
  }
}
