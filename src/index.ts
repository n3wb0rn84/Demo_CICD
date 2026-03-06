import calcService from './services/calc.service.js';

const val = 42;
const valIsEven = calcService.isEven(val);

console.log(`La valeur ${val} est ${valIsEven ? 'pair' : 'impair'} !`);
