"use strict";
let numbers = [1, 2, 3];
let user = [1, 'shree'];
user.push(3);
console.log(user);
let mySize = 2;
console.log(mySize);
function calulate(income, taxYear) {
    if (taxYear || 2024 > 2023) {
        return 1.3 * income + income;
    }
    return 0;
}
calulate(3000);
let employee = {
    id: 1,
    name: "shree"
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
const ans = kgToLbs('55kg');
console.log(ans);
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('hola');
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
class Invoice {
    constructor(c, d, a) {
        this.client = c,
            this.details = d,
            this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const inOne = new Invoice('shree', 'work on website', 230);
console.log(inOne.format());
//# sourceMappingURL=app.js.map