type SizeType = 'small' | 'medium' | 'large';
type CallbackType = (size: SizeType) => void;

let pizzaSize: SizeType = 'medium';

const selectSize: CallbackType = (x) => { pizzaSize = x; }

selectSize('small');
console.log(`size = ${pizzaSize}`);