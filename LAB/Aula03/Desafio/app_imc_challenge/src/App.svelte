<script>
	let peso = 0;
	let altura = 0;
	let imc = 0;
	let classificacao = "";

	function calcularIMC() {
		if (peso > 0 && altura > 0) {
			imc = (peso / Math.pow(altura, 2)).toFixed(2);
			definirClassificacao();
		} else {
			imc = 0;
			classificacao = "";
		}
	}

	function definirClassificacao() {
		if (imc < 18.5) {
			classificacao = "Abaixo do peso";
		} else if (imc < 25) {
			classificacao = "Peso ideal (Parabéns)";
		} else if (imc < 30) {
			classificacao = "Levemente acima do peso";
		} else if (imc < 35) {
			classificacao = "Obesidade grau I";
		} else if (imc < 40) {
			classificacao = "Obesidade grau II (Severa)";
		} else {
			classificacao = "Obesidade grau III (Mórbida)";
		}
	}
</script>

<body>
	<main>
	  <h1>Calculadora de IMC</h1>
	  <label>
		Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} min="0"/>
	  </label>
	  <label>
		Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} min="0"/>
	  </label>
	  {#if imc > 0}
		<div class="imc-info">
		  <p>Seu IMC é {imc}</p>
		  <p>Classificação: {classificacao}</p>
		</div>
	  {/if}
	</main>
  </body>

<style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(to top right, #FF8C00, #FF1493);
    }

    main {
      padding: 20px;
      border-radius: 10px;
	  color: rgba(0, 0, 0,);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      text-align: center;
      max-width: 400px;
      width: 100%;
    }

    h1 {
      color: white;
      margin-bottom: 20px;
    }

    label {
      color: white;  
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
    }

    input[type="number"] {
	  margin-top: 10px;	
      width: 100%;
      padding: 10px;
      border: 1px solid rgba(1, 1, 1, 0.1);
      border-radius: 5px;
	  background-color: rgba(1, 1, 1, 0.3);
	  
    }

    p {
      margin: 10px 0;
      font-size: 18px;
      color: white;
    }

    .imc-info {
      background-color: transparent;
      color: white;
      padding: 10px;
      border-radius: 5px;
      margin-top: 20px;
	  font-size: 24px;
	  text-align: left;
	  font-weight: bold;
    }

</style>