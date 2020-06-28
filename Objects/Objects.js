//Instancing a object
const mascota = {
    nombre: 'Sansa',
    edad: 3,
    razas: ['Alaskan', 'Malamute']
}

//Calling object properties
console.log(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.razas)
console.log(mascota.razas[0])
console.log(mascota.razas[1])

//Adding a new property to the object
mascota.id = 1

//Calling the new property
console.log(mascota.id)

//Destructuring objects
//Without destructuring objects we would save on a variable or a constant the
//value of a object property
const nombreMascota = mascota.nombre
console.log(nombreMascota)

//With destructuring objects it will be like this
const{nombre, edad} = mascota
console.log(nombre)
console.log(edad)