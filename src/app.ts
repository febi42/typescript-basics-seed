const pizzas = [
    {name: 'Pepperoni', toppings: ['pepperoni']}
];

const mappedPizzas = pizzas.map(
    function(pizza) {
        return pizza.name.toUpperCase();
    }
)

console.log(pizzas);
console.log(mappedPizzas);