import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginObj = { uname: '', psw: '' };

  constructor(private router: Router,private api: ApiService) { } 

  ngOnInit(): void {

  }

  btnClick(){
    this.router.navigate(['signup']); 

  }

  sendData() {
    console.log("User Email = "+this.loginObj.uname);
    this.api.loginUser(this.loginObj);
  }
}
