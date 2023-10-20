interface Usuario {
    nome: string;
    idade: number;
    cidade: string;
    email: string;
    interesses: string[];
}

const usuario1: Usuario = {
    nome: "Breno Henrique",
    idade: 25,
    cidade: "Pinhalzinho",
    email: "brenonsc@gmail.com",
    interesses: ["Tecnologia", "Jogos", "Fórmula 1", "Música", "Filmes"]
};

const usuario2: Usuario = {
    nome: "André Santos",
    idade: 30,
    cidade: "Itatiba",
    email: "andre@email.com",
    interesses: ["Viagens", "Trilhas", "Filmes"]
};

console.log("Informações do Usuário 1:");
console.log("Nome: " + usuario1.nome);
console.log("Idade: " + usuario1.idade + " anos");
console.log("Cidade: " + usuario1.cidade);
console.log("E-mail: " + usuario1.email);
console.log("Interesses: " + usuario1.interesses.join(", "));
console.log("\nInformações do Usuário 2:");
console.log("Nome: " + usuario2.nome);
console.log("Idade: " + usuario2.idade + " anos");
console.log("Cidade: " + usuario2.cidade);
console.log("E-mail: " + usuario2.email);
console.log("Interesses: " + usuario2.interesses.join(", "));
