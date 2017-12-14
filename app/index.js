//let c = [100, 200];
/* pre-es6
let a = c[0];
let b = c[1];
*/
//let [a, b] = c;
//console.log(a, b);

/*let fellowship = ["Frodo", "Gandalf", "Aragorn"];

let [hobbit, wizard, ranger] = fellowship;
console.log(hobbit, wizard, ranger);*/

let c = [100, 200, 300, 400, 500];
let [a, ...b] = c;
console.log(a, b);
