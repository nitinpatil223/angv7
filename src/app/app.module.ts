import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './auth.guard';
import { PublicHeaderComponent } from './shared/public-header/public-header.component';
import { UserHeaderComponent } from './shared/user-header/user-header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicHeaderComponent,
    UserHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    console.log("ApptModule loaded");
  }
}
