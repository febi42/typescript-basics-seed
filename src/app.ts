let pizza: {
    name: string,
    price: number,
    getName(): string,
}

pizza = {
    name: 'Pepperoni',
    price: 20,
    getName() { return this.name }
}

console.log(pizza.name);
console.log(pizza.getName());