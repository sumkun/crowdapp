import { ActivateGuard } from './activate.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './donate/donate.component';
import { FormComponent } from './donate/form/form.component';
import { HomeComponent } from './home/home.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'howitworks', component:HowitworksComponent},
  {path:'login', component:LoginComponent,canActivate:[LoginGuard]},
  {path:'donate', component:DonateComponent},
  {path:'signup', component:SignupComponent},
  {path:'form', component:FormComponent,canActivate:[ActivateGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
