import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClick(){
    console.log("This is Donate Module"+sessionStorage.getItem('login'));
    if(sessionStorage.getItem('login')!=null)
    this.router.navigate(['form']);
    else
    {
      alert("You need to login first");
      sessionStorage.setItem('donateCheck','true');
      console.log("This is else  = "+sessionStorage.getItem('donateCheck'));
      this.router.navigate(['login']); 
    }

  }
}
