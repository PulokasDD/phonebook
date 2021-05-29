import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HeaderComponent } from './header/header.component';
import { PhoneTableComponent } from './phone-table/phone-table.component';
import { ContactCardComponent } from './contact-card/contact-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    HeaderComponent,
    PhoneTableComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
