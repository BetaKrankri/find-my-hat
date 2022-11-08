const Field = require('./field');
const prompt = require ('prompt-sync')({sigint: true});


let game = {
    world: null,
    init: function () {
        let rdmHeight = Math.floor(Math.random() * 7) + 3;
        let rdmWidth = Math.floor(Math.random() * 7) + 3;
        let percentage = .2;
        this.world = new Field(Field.generateField(rdmHeight, rdmWidth, percentage));
        this.world.print();

        this.ask4Move();
    },
    ask4Move: function () {
        try {
            while (true) {
                let isMoveValid = false;
                let nextMove = '';
                do {
                    nextMove = prompt('Which way? (WASD): ');
                    nextMove = nextMove.trim().toUpperCase();
                    isMoveValid = /^[WASD]$/.test(nextMove);
                } while (!isMoveValid)
                this.world.movePlayer(nextMove);
            }
        } catch (error) {
            console.log(error.message);
            return;
        }
    }
}

module.exports = game;