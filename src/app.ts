let sumOrder: (price: number, quantity: number) => number;
sumOrder = (x, y) => x * y;

const sum: number = sumOrder(25, 2);

console.log(`total sum = ${sum}`);