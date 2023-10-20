interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

const produto1: Produto = {
    nome: "Televisão 4K OLED 50 polegadas Samsung",
    preco: 4999.99,
    categoria: "Televisores"
};

const produto2: Produto = {
    nome: "iPhone 15 Pro Max 512GB",
    preco: 11999.99,
    categoria: "Smartphones"
};

const listaProdutos: Produto[] = [...[produto1, produto2]];

console.log(...listaProdutos);
