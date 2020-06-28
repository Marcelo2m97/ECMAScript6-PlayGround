//How to use async and await
const obtenerPokemones = async() => {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json();
        data.results.forEach(element => {
            console.log(element.name)
        });
    } catch(error) {
        console.log(error)
    }
}

obtenerPokemones()