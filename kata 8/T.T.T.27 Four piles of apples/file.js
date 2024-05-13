function fourPiles(n, y) {
    for (let i = 0; i < 1000; i++) {
      if (
        i - y + (i + y) + i * y + i / y === n &&
        [i + y, i - y, i * y, i / y].every(v => v > 0)
      )
        return [i + y, i - y, i * y, i / y];
    }
    return [];
  }