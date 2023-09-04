<!-- Jogo.svelte -->
<script>
	import Swal from 'sweetalert2';
	import Jogador from './Jogador.svelte';
  
	function marcaGol() {
	  console.log('Marcou um gol!');
	  
	  Swal.fire({
		title: 'Parabéns!',
		text: 'Você marcou um gol!',
		icon: 'success',
		confirmButtonText: 'Ok'
	  });
	}
</script>

<body>
	<main>
		<Jogador acao={marcaGol} />
	</main>
</body>


<style>

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:root {
		font-size: 62.5%;
	}

	body {
		font-size: 1.6rem;
		background-image: linear-gradient(to bottom, #87CEEB, #a14ed8);
		display: flex; 
		justify-content: center; 
		align-items: center; 
		min-height: 100vh; 
	}
  
</style>
  