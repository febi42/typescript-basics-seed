let pizzaSize: string = 'medium';

function selectSize(size: 'small' | 'medium' | 'large') {
    pizzaSize = size;
}

selectSize('large');

console.log(`Pizza size = ${pizzaSize}`);