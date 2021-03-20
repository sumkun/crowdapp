import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public loginObj = { name:'', city:'', MoNo:'', email: '', psw: '' , pswrepeat:'' };

  constructor(private api: ApiService) { 
  }
  ngOnInit(): void {
    this.api.getDataApi();
  }

  sendData() {
    console.log("User Email = "+this.loginObj.email);
    this.api.signUpUser(this.loginObj);
  }
}
