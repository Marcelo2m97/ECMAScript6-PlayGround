//How to use fetch
//Filling array without map
fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        let arrayNombres = []
        data.results.forEach(element => {
            arrayNombres.push(element.name)
            console.log(element.name)
        });
        console.log(arrayNombres)
    })
    .catch(error => console.log(error))