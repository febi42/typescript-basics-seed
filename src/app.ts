class Pizza {
    public toppings: string[] = [];

    constructor(readonly name: string) {}

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');

// error - cannot write pizza.name
// pizza.name = 'febi';

console.log(pizza.name);
console.log(pizza);