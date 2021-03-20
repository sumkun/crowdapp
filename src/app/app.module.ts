import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { LoginComponent } from './login/login.component';
import { DonateComponent } from './donate/donate.component';
import { PostComponent } from './post/post.component';
import { SignupComponent } from './signup/signup.component';
import { FormComponent } from './donate/form/form.component';
import { ActivateGuard } from './activate.guard';
import { LoginGuard } from './login.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HowitworksComponent,
    LoginComponent,
    DonateComponent,
    PostComponent,
    SignupComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService,ActivateGuard,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
