const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni']
};

function order({ name, toppings }) {
    console.log(name, toppings);
}

order(pizza);

const toppings = ['pepperoni', 'bacon', 'chilli'];

const [first, second] = toppings;

console.log(first, second);