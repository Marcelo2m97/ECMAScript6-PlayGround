//How to use async and await
//Filling array with map
const obtenerPokemones = async() => {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json();
        let arrayNombres2 = data.results.map(pokemon => pokemon.name)
        console.log(arrayNombres2)
    } catch(error) {
        console.log(error)
    }
}

obtenerPokemones()