//var generateName = require('sillyname'); //commonjs type

/* import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`)
 */
//const superheroes = require('superheroes');
import superheroes from "superheroes";
 
//superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
const name = superheroes.random();
//=> 'Spider-Ham'
console.log(`I am ${name}!`);