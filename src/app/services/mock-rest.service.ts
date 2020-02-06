import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockRestService {

  constructor() { }

  getContainers(){
    return [
      {
        id: 1,
        displayName: 'Container 1',
        position: 1,
        tickets: [{
          id: 11,
          displayName: 'Ticket 11',
          position: 1
        }, { 
          id: 12,
          displayName: 'Ticket 12',
          position: 2
        }, { 
          id: 13,
          displayName: 'Ticket 13',
          position: 3
        }]
      }, {
        id: 2,
        displayName: 'Container 2',
        position: 2,
        tickets: [{
          id: 21,
          displayName: 'Ticket 21',
          position: 2
        }, { 
          id: 22,
          displayName: 'Ticket 22',
          position: 2
        }, { 
          id: 23,
          displayName: 'Ticket 23',
          position: 3
        }]
      }, {
        id: 3,
        displayName: 'Container 3',
        position: 3,
        tickets: [{
          id: 31,
          displayName: 'Ticket 31',
          position: 3
        }, { 
          id: 32,
          displayName: 'Ticket 32',
          position: 3
        }, {
          id: 33,
          displayName: 'Ticket 33',
          position: 3
        }]
      }
    ]
  }
}
