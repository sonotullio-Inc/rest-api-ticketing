import { Component, OnInit, Inject } from '@angular/core';
import { TicketService } from '../../../service/ticketService';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css'],
  providers: [TicketService]
})
export class AddTicketComponent implements OnInit {
  private ticketService: TicketService;

  constructor(@Inject(TicketService) ticketService: TicketService) {
      this.ticketService = ticketService;
  }

  addTicket(ticket) {
          this.ticketService.addTicket(ticket);
  }
  
  ngOnInit() {
  }

}
