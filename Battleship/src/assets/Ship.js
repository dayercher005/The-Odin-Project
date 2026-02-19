export {Ship};

class Ship{

    constructor(length, name){
        this.length = length;
        this.hitNumber = 0
        this.sunk = false;
        this.name = name
    }

    hit(){
        return this.hitNumber += 1;
    }

    isSunk(){
        if (this.hitNumber == this.length){
            this.sunk = true;
        } else {
            this.sunk = false
        }

        return this.sunk;
    }

}