import {Container} from './container';

export class Board {
    id: number;
    displayName: string;
    containers: Array<Container> = [];
}