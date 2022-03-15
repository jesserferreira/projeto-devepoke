const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value
        const idCartaoSelecionado = 'cartao-' + idPokemonSelecionado
        
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoSelecionado)
        
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const PokemonSelecionadoListagem = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoListagem.classList.add('ativo')
    })
})