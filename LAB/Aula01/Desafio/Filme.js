class Filme {
    constructor(titulo, ano, genero, duracao) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = false;
        this.avaliacao = null;
    }

    exibirDetalhes() {
        const filmeAssistido = this.assistido ? 'Sim' : 'Não'; 
        const avaliacaoFilme = this.avaliacao ? this.avaliacao : 'Filme ainda não avaliado.';

        console.log(`
                    Nome do filme: ${this.titulo}
                    Ano de lançamento: ${this.ano}
                    Gênero: ${this.genero}
                    Duração: ${this.duracao}
                    Assistido? ${filmeAssistido}
                    Avaliação: ${avaliacaoFilme}
                    `);
    }

    marcarComoAssistido() {
        if (this.assistido) {
            console.log(`O filme ${this.titulo} já foi assistido.`);
        } else {
            this.assistido = true;
            console.log(`O filme ${this.titulo} foi adicionado à categoria de 'Filmes Assistidos'.`);
        }
    }

    avaliarFilme(nota) {
        this.avaliacao = nota.toFixed(2);
    }
}

const filme1 = new Filme('Gone Girl', 2014, 'Thriller', 149);
const filme2 = new Filme('Baby Driver', 2017, 'Action', 115);
const filme3 = new Filme('I Care a Lot', 2021, 'Comedy', 118);

console.log(filme1.marcarComoAssistido());
filme1.avaliarFilme(5);
console.log(filme1.exibirDetalhes());

console.log(filme2.marcarComoAssistido());
console.log(filme2.marcarComoAssistido());
console.log(filme2.exibirDetalhes());

console.log(filme3.exibirDetalhes());
