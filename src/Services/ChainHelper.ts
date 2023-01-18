export default class ChainHelper {
    static handle(amount: number): number[][] {
        let result: number[][] = Array(amount).fill(null).map((): null[] => Array(amount).fill(null)),
            row: number = 0,
            column: number = 0,
            typeOfChange: Direction = Direction.ColumnPlus;

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
            let newCol: number = column,
                newRow: number = row;

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
};