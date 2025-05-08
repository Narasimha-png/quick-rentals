import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CatalogComponent } from './catalog/catalog.component';


const routes: Routes = [
  {path:'', component: LandingPageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'confirm' , component: ConfirmComponent },
  {path:'avilablebikes', component: CatalogComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
