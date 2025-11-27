import { piece } from './piece.ts';
import { movement } from './movement.ts';

export class board{
    boardPieces: piece[];
    movements: movement[];

    constructor(boardPieces: piece[], movements: movement[]){
        this.boardPieces = boardPieces;
        this.movements = movements;
    }
}