//How to use async and await
//Filling array with map
//Using filter
const obtenerPokemones = async() => {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json();
        let arrayNombres2 = data.results.map(pokemon => pokemon.name)
        let arrayNombres3 = data.results.filter(pokemon => pokemon.name !== 'bulbasaur')
        console.log(arrayNombres2)
        console.log(arrayNombres3)
    } catch(error) {
        console.log(error)
    }
}

obtenerPokemones()