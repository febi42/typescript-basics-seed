let sumOrder: (price: number, quantity?: number) => number;
sumOrder = (x, y = 1) => x * y;

const sum: number = sumOrder(25);

console.log(`total sum = ${sum}`);