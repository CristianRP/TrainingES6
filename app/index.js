/*let a = [7, 8 ,9];
let b = [6, ...a, 10]; // in this case replace de concat function
console.log(b);*/

/*function print(a, b, c) {
  console.log(a, b, c);
}*/
function print(...z) {
  console.log(z);
}

let z = [1, 2, 3];
print(z[0], z[1], z[2]); // pre-es6
print(...z); // es6
print(1,2,3, "adsf");
