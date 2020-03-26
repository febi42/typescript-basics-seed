type Pizza = {
    name: string,
    toppings: number
};

const pizza: Pizza = {
    name: 'Napoletana',
    toppings:4
};

const serialzedPizza = JSON.stringify(pizza);

function getNameFromSerializedPizza(jsonObject: string): string {
    // 'cast' result of JSON.parse to type Pizza
    return (JSON.parse(jsonObject) as Pizza).name;
}

console.log(pizza);
console.log(`serialized pizza = ${serialzedPizza}`);
console.log(`name of serialized pizza = ${getNameFromSerializedPizza(serialzedPizza)}`);