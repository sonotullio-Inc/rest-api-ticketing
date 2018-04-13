import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { AppComponent } from './components/appComponent/app.component';
import { TicketService } from '../service/ticketService';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
