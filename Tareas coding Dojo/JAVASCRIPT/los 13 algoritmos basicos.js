//Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255
//entrada : numeros 1 y 255
//proceso: proceso: obtener todos los numeros desde el 1 al 255 a traves de un for
//salida : impresion de todos los numeros que cumplan con la condicion del for

function imprimirhasta255(x) {
    var numeros = 1
    for (var i = 1; i <= x; i++) {
        console.log(i);
        numeros += i;
    }
    return numeros;
}
y = imprimirhasta255(255);



//Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000
// - Puedes usar un operador de módulo para este ejercicio. 
//entrada: numeros del 1 al 1000
// proceso: de esos numeros,tomar los numeros pares
//sumar esos numeros pares

function sumapareshastamil(x) {
    var suma = 1
    for (var i = 1; i <= x; i++) {

        if (i % 2 == 0) {
            suma += i;
        }
    }
    return suma;
}
y = sumapareshastamil(1000);



//Suma impares hasta 5000: Escribe una función que devuelva 
//la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).


function sumaimpares(x) {
    var suma = 1
    for (var i = 1; i <= x; i++) {

        if (i % 2 == 1) {
            suma += i;
        }
    }
    return suma;
}
y = sumaimpares();

//4-Itera un array: Escribe una función que devuelva la suma de todos los valores
// dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14)

function imprArr(Array) {
    var suma = 0
    for (var i = 0; i < Array.length; i++) {
        suma += Array[i];
    }

    return suma;
}
y = imprArr([-5, 2, 5, 12]);
console.log(y);



//5-Encuentra el mayor (max): Dado un array con múltiples valores, 
//escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

function mayorElem(x) {
    var mayorHastaAhora = x[0];
    for (var i = 0; i < x.length; i++) {
        if (x[i] > x[0]) {
            mayorHastaAhora = x[i];
        }
    }
    return mayorHastaAhora;
}
console.log(mayorElem([-3, 3, 5, 7]));


//6-Encuentra el promedio (avg): Dado un array con múltiples valores, 
//escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).

function promedio() {
    var valores = 0;
    for (var i = 0; i < dai.length; i++) {
        valores += dai[i];
        //valores = 0 + 1
        // valores = 1

    }
    return valores / dai.length;
}

var dai = [1, 3, 5, 7, 20];
console.log(promedio(dai));



//7-Array de impares: Escribe una función que devuelva un 
//array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

var impares = [];
var x = 22;

function impar() {
    for (var i = 1; i <= x; i += 2) {
        impares.push(i);
    }
    return impares;
}
console.log(impar(x));




//8-Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
//Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

var arr = [1, 3, 5, 7];
var y = 3;



//9-Cuadrados: Dado un array con múltiples valores, 
//escribe una función que reemplace cada valor por el cuadrado del mismo valor 
//(ej: [1,5,10,-2] será [1,25,100,4]).

var arr = [2, 4, 6, 8];
function cuadrado() {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }
    return arr;
}
console.log(cuadrado());



//10-Negativos: Dado un array con múltiples valores, 
//escribe una función que reemplace cualquier número negativo dentro del array por 0. 
//Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

var arr = [1, 5, 10, -2];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr[i] = 0;
    }
}
console.log(arr);

//11-Max/Min/Avg: Dado un array con múltiples valores, 
//escribe una función que devuelva un nuevo array que solo contenga el 
//valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

var array= [1,5,10,-2] ;
for (const numero of array ) { //por cada numero del array
    console.log (numero)       //imprime el numero
  array.forEach(numero => {   //
  };
}
    
}


//por cada llave en el objeto,el objeto en este caso es el array,el in va por indice recorriendo
//la llave es el index,o indice (es la lista donde esta el array)
// esta es una forma de recorrer un array,
//tomar el indice del array para recorrerlo 
//si se el indice,puedo sber lo que hay dentro de ese indice ,pero eso no lo puedo saber con for in
for (const key in object) {
    console.log (array[index]);
        
    }

//con for of se puede saber el contenido que hay dentro de un indice
//el of va valor por valor

for (const numero of array ) {
    console.log (numero)
}







var points = [1, 5, 10, -2];
document.getElementById("demo").innerHTML = ValorMax(points);

function valorMax(arr) {
    var x = arr;
    var max = -Infinity;
    while (x--) {
        if (arr[x] > max) {
            max = arr[x];
        }
    }
    return max;
}
valorMax();




    function dojo() {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == [arr.length - 1]) {
                arr.push = "Dojo";
            }
            return arr.push;

        }
        console.log(arr.push);
    }






    function minMax(numero1, numero2) {


        return { min: numero1, max: numero2, suma: numero1 + numero2 };
    }

