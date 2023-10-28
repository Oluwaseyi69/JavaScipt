function createBoard(rows, columns, pieces) {
  let board = new Array(rows);
  for (let i = 0; i < rows; i++) {
      board[i] = new Array(columns).fill(" ");
  }

  for (let piece of pieces) {
      let idx = piece.x
      let index = piece.y;
      let value = piece.value;
      
      if (idx >= 0 && idx < rows && index >= 0 && index < columns) {
          board[idx][index] = value;
      }
  }

  return board;
}

let pieces = [
  { x: 0, y: 0, value: 'x' },
  { x: 0, y: 1, value: 'x'},
  { x: 0, y: 2, value: 'o'},

  { x: 1, y: 0, value: 'o' },
  { x: 1, y: 2, value: 'x' },

  { x: 2, y: 0, value: 'x' },
  { x: 2, y: 1, value: 'o' },
  { x: 2, y: 2, value: 'o' }


];

let board = createBoard(3, 3, pieces);

for (let row of board) {
  console.log(row);
}
