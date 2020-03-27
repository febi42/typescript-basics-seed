interface SizesInterface {
    availableSizes: string[];
}

abstract class Sizes implements SizesInterface {
    constructor(protected sizes: string[]) {}

    get availableSizes() { return this.sizes; }

    set availableSizes(sizes: string[]) { this.sizes = sizes; }
}

interface PizzaInterface extends SizesInterface {
    readonly name: string;
    toppings: string[];

    addTopping(topping: string): void;
    updateSizes(sizes: string[]): void;
}

class Pizza extends Sizes implements PizzaInterface {
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