
function suma(){
    let lista=[];
    let contador= 0;
    let cantidad = Number(prompt("cuantos numeros quiere sumar??"));
    //con ciclo while preguntamos los numeros para agregarlos a una lista
    while( contador < cantidad ){
        const numeros = Number(prompt("Ingrese su numero: "));
        lista.push(numeros);
        contador++;
    }
    console.log(lista);
    //con el ciclo for se hara la suma de los numeros agregados a la lista
    let total = 0;
    for( let i= 0; i < lista.length; i++){
        total += lista[i];
    }
    console.log(`El resultado de la suma es: ${total}`);
}

function resta(){
    //en la resta ocupe el mismo metodo de agregar los numeros a una lista y despues restarlos
    let lista=[];
    let contador= 0;
    let cantidad = Number(prompt("cuantos numeros quiere restar??"));
    while( contador < cantidad ){
        const numeros = Number(prompt("Ingrese su numero: "));
        lista.push(numeros);
        contador++;
    }
    console.log(lista);
    var total = lista[0];
    for (var i = 1; i < lista.length; i++) {
        total -= lista[i]; 
    }
    console.log(`El resultado de la resta es: ${total}`);
}

function dividir(){
    const num1= Number(prompt("Ingrese el numero a dividir:"));
    const num2= Number(prompt("Ingrese el numero que dividira al anterior:"));
    console.log(`su division es: ${num1 / num2}`);
    console.log(`y el resto de la division es: ${num1 % num2}`);
}


function calcularIva(){
    //primero preguntamos por el precio sin iva incluido, lo segundo es el valor del iva
    const precio = Number(prompt("Ingrese el precio del prodcuto: "));
    const iva =  Number(prompt("Ingrese el tipo iva: "));

    const valorIva = precio * (iva / 100);
    const precioIva =  precio + valorIva;

    console.log("El precio sin iva: " + precio);
    console.log("El precio con iva incluido es: " + precioIva);
    return precioIva;
}





