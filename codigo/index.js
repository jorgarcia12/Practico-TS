"use strict";
//Ejercicio 2
console.log("Corriendo desde TypeScript");
//Ejercicio 3
let texto_ts = "Hola TypeScript!";
let numero_ts = 123;
let bool_ts = true;
let fecha_ts = new Date(2024, 8, 10);
let texto = document.getElementById("texto");
if (texto) {
    texto.textContent = `Texto: ${texto_ts}`;
}
let numero = document.getElementById("numero");
if (numero) {
    numero.textContent = `Numero: ${numero_ts}`;
}
let bool = document.getElementById("booleano");
if (bool) {
    bool.textContent = `Booleano: ${bool_ts}`;
}
let fecha = document.getElementById("fecha");
if (fecha) {
    fecha.textContent = `Fecha: ${fecha_ts}`;
}
//Ejercicio 4
let string_num = document.getElementById("num_to_string");
let num = 456;
function string_converter(num) {
    return num.toString();
}
if (string_num) {
    string_num.textContent = `Numero convertido a cadena: ${string_converter(num)}`;
}
//Ejercicio 5
let arrays = document.getElementById("suma_array");
const array = [1, 50, 2, 3];
function sum_array(array) {
    let array_summary = 0;
    let i = 0;
    for (i = 0; i < array.length; i++) {
        array_summary += array[i];
    }
    return array_summary;
}
if (arrays) {
    arrays.textContent = `La suma del array con numero ${array} es ${sum_array(array)}`;
}
//Ejercicio 6
let student_html = document.getElementById("object");
let estudiante = {
    nombre: "Jorge",
    edad: 21,
    curso: "Programacion III",
};
if (student_html) {
    student_html.textContent = JSON.stringify(estudiante, null, 2);
}
//Ejercicio 7
let typed_data = document.getElementById("tipado");
let direccion1 = {
    calle: "Avenida Principal",
    ciudad: "Mendoza",
    cp: 5550,
};
if (typed_data) {
    typed_data.textContent = JSON.stringify(direccion1, null, 2);
}
//Ejercicio 8
let int_user = document.getElementById("interface");
const estudiante1 = {
    nombre: "Jorge",
    mail: "jor4300@gmail.com",
    saludar() {
        return `Hola Mi nombre es ${this.nombre}`;
    },
};
if (int_user) {
    int_user.textContent = estudiante1.saludar();
}
//Ejercicio 9
let clase_ej8 = document.getElementById("clase");
class Persona {
    presentacion() {
        let mensaje = `Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`;
        return mensaje;
    }
    constructor(nombre, edad) {
        (this.nombre = nombre), (this.edad = edad);
    }
}
const persona = new Persona("Jorge", 21);
if (clase_ej8) {
    clase_ej8.textContent = persona.presentacion();
}
//Ejercicio 10
let generic_class_text = document.getElementById("clase_generica_texto");
let generic_class_number = document.getElementById("clase_generica_numero");
class Caja {
    setText(text) {
        this.text = text;
    }
    getText() {
        return this.text;
    }
    setNumber(number) {
        this.number = number;
    }
    getNumber() {
        return this.number;
    }
}
let cajaTexto = new Caja();
let cajaNumero = new Caja();
cajaNumero.setNumber(55);
cajaTexto.setText("Mensaje secreto");
if (generic_class_number && generic_class_text) {
    generic_class_text.textContent = `Contenido de caja de Texto: ${cajaTexto.getText()}`;
    generic_class_number.textContent = `Contenido de caja de Numero: ${cajaNumero.getNumber()}`;
}
//Ejercicio 11
let generic_function_text = document.getElementById("funcion_generica_texto");
let generic_function_number = document.getElementById("funcion_generica_numero");
function identidad(value) {
    return value;
}
if (generic_function_text && generic_function_number) {
    generic_function_text.textContent = `Identidad del texto: ${identidad("texto")}`;
    generic_function_number.textContent = `Identidad del numero: ${identidad(123)}`;
}
//Ejercicio 12
let enums = document.getElementById("enum");
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Azul"] = 1] = "Azul";
    Color[Color["Verde"] = 2] = "Verde";
    Color[Color["Rosado"] = 3] = "Rosado";
    Color[Color["Violeta"] = 4] = "Violeta";
})(Color || (Color = {}));
let fav_color = Color.Verde;
if (enums) {
    enums.textContent = `Color favorito: ${Color[fav_color]}`;
}
