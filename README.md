# TypeScript

Este repositório contém estudos relacionados ao TypeScript, uma linguagem de programação que adiciona tipagem estática a JavaScript. Aqui, você encontrará exemplos e explicações sobre tipos de dados, funções, parâmetros REST, operador Spread e interfaces em TypeScript.

<br>

## Tipos de Dados

No TypeScript, os tipos de dados são usados para definir quais tipos de valores uma variável pode armazenar. Alguns dos tipos de dados mais comuns em TypeScript incluem:

- `number`: Para representar números inteiros e de ponto flutuante.
- `string`: Para representar sequências de caracteres.
- `boolean`: Para representar valores verdadeiros ou falsos.
- `array`: Para representar uma lista de valores do mesmo tipo.
- `object`: Para representar objetos complexos com propriedades.
- `any`: Um tipo que permite qualquer valor, útil quando você não tem certeza do tipo.

Exemplo:
```typescript
let idade: number = 30;
let nome: string = "João";
let ativo: boolean = true;
let numeros: number[] = [1, 2, 3];
let pessoa: object = { nome: "Alice", idade: 25 };
let qualquerCoisa: any = "Qualquer valor";
```

<br>

## Funções

Em TypeScript, você pode definir funções que especificam os tipos de dados dos parâmetros e o tipo de retorno. Isso ajuda a tornar o código mais seguro e legível.

Exemplo de uma função simples:
```typescript
function soma(a: number, b: number): number {
    return a + b;
}
```

<br>

## Parâmetros REST

Os parâmetros REST permitem que você passe um número indefinido de argumentos para uma função. Eles são representados por três pontos antes do nome do parâmetro.

Exemplo:
```typescript
function somar(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
}
```

<br>

## Operador Spread

O operador Spread (`...`) é usado para espalhar os elementos de uma matriz ou objeto em outro. Isso é útil ao combinar ou clonar arrays e objetos.

Exemplo:
```typescript
const numeros1: number[] = [1, 2, 3];
const numeros2: number[] = [4, 5, 6];
const todosNumeros: number[] = [...numeros1, ...numeros2];
```

<br>

## Interfaces

As interfaces são usadas para definir contratos que os objetos devem seguir. Elas especificam a estrutura de um objeto, incluindo os tipos de dados e os nomes das propriedades.

Exemplo:
```typescript
interface Pessoa {
    nome: string;
    idade: number;
}

const pessoa: Pessoa = { nome: "Maria", idade: 30 };
```

<br>

Este repositório serve como um guia inicial para o TypeScript, abordando conceitos básicos relacionados a tipos de dados, funções, parâmetros REST, operador Spread e interfaces. Sinta-se à vontade para explorar os exemplos e expandir seus conhecimentos em TypeScript. Boa codificação!