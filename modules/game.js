const Field = require('./field');

const game = {
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
        console.log('asking');
    },

}

game.init();