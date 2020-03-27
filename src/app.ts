class Sizes {
    constructor(public sizes: string[]) {}

    get availableSizes() { return this.sizes; }

    set availableSizes(sizes: string[]) { this.sizes = sizes; }
}

const sizes = new Sizes(['small', 'medium']);

// we can now access 'availableSizes'
// ... but also 'sizes' ?!
// (cannot make 'sizes' private...)
console.log(sizes.sizes);
console.log(sizes.availableSizes);

sizes.sizes = ['medium', 'large'];
sizes.availableSizes = ['medium', 'large'];
console.log(sizes.sizes);
console.log(sizes.availableSizes);

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