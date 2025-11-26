class movement{
    piece: piece;
    position: position;
    captures: position;
    notation: string;
    castles: boolean

    constructor(piece: piece, position: position, captures: position, notation: string, castles: boolean){
        this.piece = piece;
        this.position = position;
        this.captures = captures;
        this.notation = notation;
        this.castles = castles;
    }
}