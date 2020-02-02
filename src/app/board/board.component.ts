import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  containers = [
    {
      displayName: 'Container 1',
      tickets: [
        'Ticket 11',
        'Ticket 12',
        'Ticket 13',
        'Ticket 14',
        'Ticket 15'
      ]
    },
    {
      displayName: 'Container 2',
      tickets: [
        'Ticket 21',
        'Ticket 22',
        'Ticket 23',
        'Ticket 24',
        'Ticket 25'
      ]
    },
    {
      displayName: 'Container 3',
      tickets: [
        'Ticket 31',
        'Ticket 32',
        'Ticket 33',
        'Ticket 34',
        'Ticket 35'
      ]
    },
    {
      displayName: 'Container 4',
      tickets: [
        'Ticket 41',
        'Ticket 42',
        'Ticket 43',
        'Ticket 44',
        'Ticket 45'
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  logEveryTicketPositions(){
    console.log("=== === ===");
  }
}
