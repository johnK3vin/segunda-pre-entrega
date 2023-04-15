class Persona{
  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }

  get nombre(){
    return this._nombre;
  }
  set nombre(nombre){
    this._nombre = nombre;
  }

  get apellido(){
    return this._apellido;
  }
  set apellido(apellido){
    this._apellido = apellido;
  }

  get edad(){
    return this._edad;
  }
  set edad(edad){
    this._edad = edad;
  }
}

const persona = [
  new Persona("John", "Vega", 21),
  new Persona("Alvaro", "Sanchez", 24)
];


function mostrarObjetos() {
  const lista = document.getElementsByClassName('lista');
  lista.innerHTML = "";

  for (let i = 0; i < persona.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = `${persona[i]._nombre} ${persona[i]._apellido}, ${persona[i]._edad}`;
    document.body.append(item);
  }
}


//ahora una funcion para agregar mas personas a la lista
function agregarPersona (){
  const nombre = prompt("Ingrese su nombre: ");
  const apellido = prompt("Ingrese su apellido: ");
  const edad = Number(prompt("Ingrese su edad: "))

  const nuevaPersona = new Persona(nombre, apellido, edad);
  persona.push(nuevaPersona);
  console.log(persona);

  const item = document.createElement('li');
  item.innerHTML = `${nuevaPersona._nombre} ${nuevaPersona._apellido}, ${nuevaPersona._edad}`
  document.body.append(item);
}


window.onload = function() {
  mostrarObjetos();
};
