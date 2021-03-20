import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("This is Auth guard Session = "+sessionStorage.getItem('login'));
      if(sessionStorage.getItem('login')==null)
      return true;
      else
      {
        alert("You are all ready log in");
      //this.router.navigate(['donate']);
      return false;
      }
  }
  
}
