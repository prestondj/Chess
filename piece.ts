abstract class piece{
    position: position;
    notation: string;

    constructor(position: position, notation: string){
        this.position = position;
        this.notation = notation;
    }

    abstract getValidMoves(): position[];
    abstract canCastle(): boolean;
    abstract canEnPassant(): boolean;
}