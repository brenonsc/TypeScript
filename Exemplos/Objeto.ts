interface TurmaModelo {
    nome: string,
    qtd: number,
    materia: string,
    p_instrutora: string
}

const Turma: TurmaModelo = {
    nome: "Turma .NET 03",
    qtd: 32,
    materia: "FullStack C#",
    p_instrutora: "Yuri"
}

console.log(Turma)

const Turma2: Object = {
    nome: "Turma JavaScript",
    qtd: 32,
    materia: "FullStack JS",
    p_instrutora: "Jacque"
}

console.log(Turma2)