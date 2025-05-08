import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AvailableBikesService } from './catalog/available-bikes.service';
import { HttpClientModule } from '@angular/common/http';
import { CatalogSearchPipe } from './catalog/catalog-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    CatalogComponent,
    ConfirmComponent,
    CatalogSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [AvailableBikesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
