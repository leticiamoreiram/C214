<script>
	import Jogador from "./Jogador.svelte";

	function marcaGol() {
		console.log("Marcou um gol!")
	}
</script>

<main>
	<h1>Exibe a informação quando marca gol</h1>
	<Jogador acao = {marcaGol} />
	
</main>

