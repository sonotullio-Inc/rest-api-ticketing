import { Router, Request, Response, NextFunction } from 'express'
import Ticket from '../models/Ticket';

class TicketRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public GetTickets(req: Request, res: Response): void {
        Ticket.find({})
            .then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            })
            .catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            })
    }

    public GetTicket(req: Request, res: Response): void {
        const number: string = req.params.number;
        Ticket.findOne({ number })
            .then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            })
            .catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            })
    }

    public CreateTicket(req: Request, res: Response): void {

        const title: String = req.body.title;
        const number: String = req.body.number;
        const description: String = req.body.description;
        const priority: String = req.body.priority;
        const state: String = req.body.state;

        const ticket = new Ticket({
            title: title,
            number: number,
            description: description,
            priority: priority,
            state: state
        });
        ticket.save()
            .then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            })
            .catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            })
    }

    public UpdateTicket(req: Request, res: Response): void {
        const number: string = req.params.number;
        Ticket.findOneAndUpdate({ number }, req.body)
            .then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            })
            .catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            })
    }

    public DeleteTicket(req: Request, res: Response): void {
        const number: string = req.params.number;
        Ticket.findOneAndRemove({ number })
            .then((data) => {
                const status = res.statusCode;
                res.json({
                    status,
                    data
                });
            })
            .catch((err) => {
                const status = res.statusCode;
                res.json({
                    status,
                    err
                });
            })
    }

    routes() {
        this.router.post('/', this.CreateTicket);
        this.router.get('/', this.GetTickets);
        this.router.get('/:number', this.GetTicket);
        this.router.put('/:number', this.UpdateTicket);
        this.router.delete('/:number', this.DeleteTicket);
    }
}

//export
const ticketRoutes = new TicketRouter();
ticketRoutes.routes();

export default ticketRoutes.router;