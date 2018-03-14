import addHeaderToDom from './helpers';
// import logFunction, {add, subtract, multiply, divide} from './math';
import * as mathStuff from './math';

import {person} from './math';

console.log('mathStuff', mathStuff);

addHeaderToDom('3 + 7 = ' + mathStuff.add(3,7));

addHeaderToDom('3 * 9 = ' + mathStuff.multiply(3,9));

addHeaderToDom('2 / 4 = ' + mathStuff.divide(2,4));

addHeaderToDom('4 - 2 = ' + mathStuff.subtract(4, 2));

console.log(person.address);