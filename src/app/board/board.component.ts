import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from '../models/board';

import { MockRestService } from '../services/mock-rest.service';
import { Container } from '../models/container';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  rawJson;

  board: Board;

  constructor(private service: MockRestService) { }

  ngOnInit() {
    this.rawJson = this.service.getContainers();

    this.board = new Board();
    this.board.id = 1;
    this.board.displayName = "Board Name";

    this.rawJson.forEach(rawContainer => {
      let container = new Container();

      container.id = rawContainer.id;
      container.displayName = rawContainer.displayName;
      container.position = rawContainer.position;

      rawContainer.tickets.forEach(rawTicket => {
        let ticket = new Ticket();

        ticket.id = rawTicket.id;
        ticket.displayName = rawTicket.displayName;
        ticket.position = rawTicket.position;

        container.tickets.push(ticket);
      });

      this.board.containers.push(container);
    });
  }

  drop(event: CdkDragDrop<Ticket[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  logEveryTicketPositions() {
    console.log();
  }
}
