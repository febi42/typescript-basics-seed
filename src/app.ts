interface Sizes {
    sizes: string[]
};

interface Pizza extends Sizes {
    name: string,
    getAvailableSizes(): string[],
    [key: number]: string,
};

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        getAvailableSizes() { return this.sizes; }
    };
}

pizza = createPizza('Fiorentina', ['small', 'large']);
pizza[42] = 'febi';
pizza[41.9] = 'feb';

console.log(pizza);
console.log(pizza.getAvailableSizes());