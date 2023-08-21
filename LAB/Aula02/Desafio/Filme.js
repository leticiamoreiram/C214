const readline = require('readline');

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

const listaFilmes = [
    new Filme('Gone Girl', 2014, 'Thriller', 149),
    new Filme('Baby Driver', 2017, 'Action', 115),
    new Filme('I Care a Lot', 2021, 'Comedy', 118)
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu() {
    console.log("\nMenu:");
    console.log("1. Adicionar novo filme");
    console.log("2. Marcar filme como assistido");
    console.log("3. Avaliar filme");
    console.log("4. Exibir lista de filmes");
    console.log("5. Sair do programa");
}

function getInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    while (true) {
        exibirMenu();
        const escolha = await getInput("Escolha uma opção: ");

        switch (escolha) {
            case '1':
                const titulo = await getInput("Digite o título do filme: ");
                const ano = parseInt(await getInput("Digite o ano de lançamento: "));
                const genero = await getInput("Digite o gênero do filme: ");
                const duracao = parseInt(await getInput("Digite a duração do filme: "));
                listaFilmes.push(new Filme(titulo, ano, genero, duracao));
                console.log("Filme adicionado com sucesso!");
                break;

            case '2':
                console.log("Filmes disponíveis:");
                listaFilmes.forEach((filme, index) => {
                    console.log(`${index + 1}. ${filme.titulo}`);
                });
                const numeroFilmeAssistido = parseInt(await getInput("Digite o número do filme que deseja marcar como assistido: ")) - 1;
                if (numeroFilmeAssistido >= 0 && numeroFilmeAssistido < listaFilmes.length) {
                    listaFilmes[numeroFilmeAssistido].marcarComoAssistido();
                } else {
                    console.log("Número de filme inválido!");
                }
                break;

            case '3':
                console.log("Filmes disponíveis:");
                listaFilmes.forEach((filme, index) => {
                    console.log(`${index + 1}. ${filme.titulo}`);
                });
                const numeroFilmeAvaliar = parseInt(await getInput("Digite o número do filme que deseja avaliar: ")) - 1;
                if (numeroFilmeAvaliar >= 0 && numeroFilmeAvaliar < listaFilmes.length) {
                    const nota = parseFloat(await getInput("Digite a nota do filme (0-10): "));
                    if (nota >= 0 && nota <= 10) {
                        listaFilmes[numeroFilmeAvaliar].avaliarFilme(nota);
                        console.log("Filme avaliado com sucesso!");
                    } else {
                        console.log("Nota inválida! A nota deve estar entre 0 e 10.");
                    }
                } else {
                    console.log("Número de filme inválido!");
                }
                break;

            case '4':
                console.log("Lista de filmes:");
                listaFilmes.forEach((filme, index) => {
                    console.log(`Filme ${index + 1}: ${filme.titulo}`);
                });
                break;

            case '5':
                console.log("Saindo do programa...");
                rl.close();
                return;

            default:
                console.log("Opção inválida! Escolha uma opção válida.");
                break;
        }
    }
}

main();
