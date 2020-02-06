import { Ticket } from './ticket';

export class Container{
    id: string;
    position: number;
    displayName: string;
    tickets: Array<Ticket> = [];
}