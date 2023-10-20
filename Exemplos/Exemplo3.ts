const array01 = [1, 2, 3];
const array02 = [4, 5, 6];

//Operador Spread
const array03 = [...array01, ...array02];

console.log(array03);

//Operador Rest
function somarNumeros(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(somarNumeros());
console.log(somarNumeros(10, 20));
console.log(somarNumeros(10, 20, 30));