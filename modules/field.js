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

}

// const myField = new Field(Field.generateField(10, 10, .2));

// myField.print();




////////////
module.exports = Field;