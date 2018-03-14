export function add (x, y){
    return x + y;
}

export const subtract = (x, y) => {
    return x - y;
}

export const multiply = (x, y) => {
    return x * y;
}

export const divide = (x, y) => x / y;

export default () => {
    console.log('This is the default export of math.js');
}


export const person = {
    name: 'Jane Smith Allergen McGee',
    address: {
        street: 'dalmation way',
        city: 'Irvine'
    }
}