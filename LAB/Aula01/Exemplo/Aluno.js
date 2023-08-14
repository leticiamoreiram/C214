class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.notas = []
    }

    adicionarNota(nota) {
        this.notas.push(nota);
        console.log(`Nota ${nota} adicionada para o aluno ${this.nome}`)
    }

    calcularMedia() {
        if (!this.notas.length) {
            console.log(`O aluno não pssui notas registradas.`)
        } 
        const somaNotas = this.notas.reduce((total, nota) => total + nota, 0);
        const media = somaNotas/this.notas.length;
        return media.toFixed(2);
    }

    verificarAprovacao(mediaMinima = 60) {
        const media = this.calcularMedia();
        if (media >= mediaMinima) {
            return `${this.nome} aprovado(a) com média ${media}.`
        } else {
            return `${this.nome} reprovado(a) com média ${media}.`
        }
    }



}

const aluno1 = new Aluno('Pedro');
const aluno2 = new Aluno('Joana');

aluno1.adicionarNota(20);
aluno1.adicionarNota(80);

aluno2.adicionarNota(50);
aluno2.adicionarNota(100);

console.log(aluno1.verificarAprovacao())
console.log(aluno2.verificarAprovacao())