abstract class Sizes {
    constructor(protected sizes: string[]) {}

    get availableSizes() { return this.sizes; }

    set availableSizes(sizes: string[]) { this.sizes = sizes; }
}

class Pizza extends Sizes {
    public toppings: string[] = [];

    constructor(
        readonly name: string,
        sizes: string[]
    ) {
        super(sizes);
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium', 'large']);
pizza.addTopping('pepperoni');

console.log(pizza.name);
console.log(pizza.availableSizes);

pizza.updateSizes(['small', 'medium']);
console.log(pizza.availableSizes);

pizza.availableSizes = ['small', 'large'];
console.log(pizza.availableSizes);