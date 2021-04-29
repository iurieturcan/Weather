// Will choose a constant variable for this, since will not change. 
const Kelvin = 293 ;
// This variable will calculate the Celsius degrees.
let Celsius = Kelvin - 273 ;
// This variable will calculate the Celsius degrees, this variable and the previus are not constant. 
let Fahrenheit = Celsius * (9/5) + 32 ;
// This will help the number not to be displayed with decimals.
Fahrenheit = Math.floor(Fahrenheit);

console.log(`The Temperature is ${Fahrenheit} degrees Fahrenheit.`);

