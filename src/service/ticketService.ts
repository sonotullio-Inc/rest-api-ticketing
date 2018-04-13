import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from "../utils/commonsVariables";


@Injectable()
export class TicketService {
    
    constructor(private http: HttpClient) {}

    addTicket(ticket) {
        return this.http.post((BASE_URL + '/api/tickets'), (req, res, next) => {
            req.body = ticket;
         })
            .subscribe();
    }

    getAllTicket() {
        return this.http.get(BASE_URL +'/api/tickets')
            .subscribe();
    }
}