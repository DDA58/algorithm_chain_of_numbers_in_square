module.exports = (amount: number): number[][] => {
    let result: number[][] = [];
    for (let i: number = 1; i <= amount; i++) {
        result.push(Array(amount).fill(null));
    }

    enum Direction {
        ColumnPlus = 'column+',
        ColumnMinus = 'column-',
        RowPlus = 'row+',
        RowMinus = 'row-'
    }
    let row: number = 0;
    let column: number = 0;
    let typeOfChange: Direction = Direction.ColumnPlus;

    const fnIncrementOrDecrement: CallableFunction = (): void => {
        switch (typeOfChange) {
            case Direction.ColumnPlus:
                column++;
                break;
            case Direction.ColumnMinus:
                column--;
                break;
            case Direction.RowPlus:
                row++;
                break;
            case Direction.RowMinus:
                row--;
                break;
        }
    };

    const fnChangeDirection: CallableFunction = (): void => {
        let newCol: number = column;
        let newRow: number = row;
        switch (typeOfChange) {
            case Direction.ColumnPlus:
                newCol++;

                if (result[row][newCol] === undefined || Number.isInteger(result[row][newCol])) {
                    typeOfChange = Direction.RowPlus;
                }
                break;
            case Direction.ColumnMinus:
                newCol--;

                if (result[row][newCol] === undefined || Number.isInteger(result[row][newCol])) {
                    typeOfChange = Direction.RowMinus;
                }
                break;
            case Direction.RowPlus:
                newRow++;

                if (result[newRow] === undefined || Number.isInteger(result[newRow][column])) {
                    typeOfChange = Direction.ColumnMinus;
                }
                break;
            case Direction.RowMinus:
                newRow--

                if (result[newRow] === undefined || Number.isInteger(result[newRow][column])) {
                    typeOfChange = Direction.ColumnPlus;
                }
                break;
        }
    };

    for (let i: number = 0; i < amount * amount; i++) {
        fnChangeDirection();
        result[row][column] = i;
        fnIncrementOrDecrement();
    }

    return result;
}