import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private router: Router,private http: HttpClient) { }

  getDataApi()
  {
    this.http.get('http://localhost:4000/post').subscribe(res =>{
      console.log(res);
    });
  }

  signUpUser(loginObj)
  {
    console.log("ApiService -> loginUser -> loginObj ", loginObj);
    this.http.post('http://localhost:4000/signUp' , loginObj).subscribe(res => {
    console.log(res);
    });
    console.log("reg Success");
    
  }

  loginUser(loginObj)
  {
    //console.log("ApiService -> loginUser -> loginObj ", loginObj);
    this.http.post('http://localhost:4000/login' , loginObj).subscribe(res => {
    console.log("This is Session = "+res);
    sessionStorage.setItem('login',JSON.stringify(res));
    console.log(sessionStorage.getItem('login'));
    alert("Login Successfull");
    if(sessionStorage.getItem('donateCheck')==null)
    this.router.navigate(['donate']);
    else
    this.router.navigate(['form']);
    });
    console.log("log Success");

  }

  donationForm(loginObj)
  {
    //console.log("ApiService -> loginUser -> loginObj ", loginObj);
    this.http.post('http://localhost:4000/donationForm' , loginObj).subscribe(res => {
    console.log(res);
    sessionStorage.clear();
    console.log("After clearing session = "+sessionStorage.getItem('login'));
    this.router.navigate(['donate']);
    });
    console.log("log Success");

  }
}