// declare coupon of type string OR null
// - this is required when setting (type checking) "strict": true
// - actually legal is "... coupon: string | number", but does not make a lot of sense...
let coupon: string | null = 'pizza25';

function removeCoupon(): void {
    coupon = null;
}

console.log(coupon);

removeCoupon();
console.log(coupon);