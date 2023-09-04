<!-- Jogador.svelte -->
<script>
    export let acao;
</script>
  
<div>
    <button on:click={acao}>Marcar gol</button>
</div>
  
<style>
    button {
        height: 20.4rem;
        width: 40.8rem;
        border-radius: 10px; 
        font-size: 2.4rem;
        text-transform: uppercase;
        font-weight: bold;
        background-color: rgba(255, 255, 255, 0.5); 
        color: #770586; 
        border: none; 
        cursor: pointer; 
    }

    button:hover {
        background-color: #FFFFFF; 
        color: rgb(28, 155, 228);
    }

</style>