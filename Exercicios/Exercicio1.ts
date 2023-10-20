// Função 1 - Recebe um parâmetro do tipo string
function cumprimentar(nome: string) {
    console.log(`Olá, ${nome}!`);
}

function somar(a: number, b: number) {
    const resultado = a + b;
    console.log(`A soma de ${a} e ${b} é igual a ${resultado}`);
}

function exibirDetalhes(nome: string, idade: number) {
    console.log(`Nome: ${nome}, Idade: ${idade} anos`);
}

cumprimentar("Alice");
somar(5, 7);
exibirDetalhes("Carlos", 32);