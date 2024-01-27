const isValidColumn = (board: string[][], x: number): boolean => {
  const buf: Set<string> = new Set();
  for (let y = 0; y < 9; y++) {
    const n = board[y][x];
    if (n === ".") {
      continue;
    }

    if (buf.has(n)) {
      return false;
    }

    buf.add(n);
  }

  return true;
};

const isValidRow = (board: string[][], y: number): boolean => {
  const buf: Set<string> = new Set();
  for (let x = 0; x < 9; x++) {
    const n = board[y][x];
    if (n === ".") {
      continue;
    }

    if (buf.has(n)) {
      return false;
    }

    buf.add(n);
  }

  return true;
};

const isValidCell = (board: string[][], i: number): boolean => {
  const xStart = Math.floor(i % 3) * 3;
  const yStart = Math.floor(i / 3) * 3;
  let buf: Set<string> = new Set();

  for (let y = yStart; y < yStart + 3; y++) {
    for (let x = xStart; x < xStart + 3; x++) {
      const n = board[x][y];

      if(n === ".") {
        continue;
      }

      if(buf.has(n)){
        return false;
      }

      buf.add(n);
    }
  }

  return true;
};

function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    if (!isValidColumn(board, i)) return false;
    if (!isValidRow(board, i)) return false;
    if (!isValidCell(board, i)) return false;
  }

  return true;
}
