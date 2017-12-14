/* pre-es6
let wizard = {magical: true, power: 10};
let magical = wizard.magical;
let power = wizard.power;

console.log(magical, power);*/

/*let wizard = {magical: true, power: 10};
let { power, magical } = wizard;
console.log(magical, power);
*/
/*
let ranger = { magical: false, power: 9};
let { magical, power } = ranger;
console.log(magical, power);*/
/*
let magical = true;
let power = 2;

let ranger = { magical: false, power: 9};
//let { magical, power } = ranger;
console.log(magical, power);*/

let magical = true;
let power = 2;

let ranger = { magical: false, power: 9};
({ magical, power } = ranger);
console.log(magical, power);
