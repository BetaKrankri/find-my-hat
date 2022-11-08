const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
        this.playerPos = { x: 0, y: 0 };
    };

    static generateField(height, width, percentage) {
        let newField = [];

        // Placing holes and fields
        {
            let row = [];

            for (let i = 0; i < height; i++) {
                for (let j = row.length; j < width; j++) {
                    if ((Math.random().toFixed(2) * 1 > percentage)) {
                        row.push(fieldCharacter);
                    } else {
                        row.push(hole);
                    }
                }
                newField.push(row);
                row = [];
            }
        }
        // placing hat
        {
            let hatCoord = { x: width, y: height };

            for (let coord in hatCoord) {
                let newCoord = 0;
                while (newCoord === 0) {
                    newCoord = Math.floor(Math.random() * hatCoord[coord]);
                }
                hatCoord[coord] = newCoord;
            }
            // console.log(hatCoord);
            // console.log(newField);
            newField[hatCoord.y][hatCoord.x] = hat;
        }
        // Placing player 
        {

            newField[0][0] = pathCharacter;
        }
        return newField;
    };
    print() {
        let canvas = "";
        this._field.forEach(row => {
            canvas += '\n' + row.join('');
        });
        console.log(canvas);
        return canvas;
    };
    movePlayer(move) {
        // change player coordinates
        switch (move) {
            case 'W': {
                this.playerPos.y -= 1;
                break;
            }
            case 'S': {
                this.playerPos.y += 1;
                break;
            }
            case 'A': {
                this.playerPos.x -= 1;
                break;
            }
            case 'D': {
                this.playerPos.x += 1;
                break;
            }
        }
        // stop game cases:
        // Case 1: Out of the world border
        if (this.playerPos.y < 0 || this.playerPos.x < 0 || this.playerPos.y >= this._field.length || this.playerPos.x >= this._field[0].length) {
            throw new Error('Out of bound instruction');
        }
        switch (this._field[this.playerPos.y][this.playerPos.x]) {
            // if not stoping just change the path
            case fieldCharacter: {
                this._field[this.playerPos.y][this.playerPos.x] = pathCharacter;
                this.print();
                break;
            }
            //Case 2: Falling in a hole
            case hole: {
                throw new Error('Sorry, you fell down on hole');
            }
            //Case 3: Findind the hat
            case hat: {
                throw new Error('Congrats! you found your hat');
            }
        }
    };

}

// const myField = new Field(Field.generateField(10, 10, .2));

// myField.print();




////////////
module.exports = Field;