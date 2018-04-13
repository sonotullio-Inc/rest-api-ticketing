import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';

const routes: Routes = [
    {path: 'addTicket', component: AddTicketComponent}
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [ RouterModule ]
  })
  
  export class AppRoutingModule { }