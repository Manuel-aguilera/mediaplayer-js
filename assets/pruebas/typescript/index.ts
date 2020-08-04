// debugger;

console.log("Hello, Typescript");

// function add(a: number, b: number) {
// 	return a + b;
// }

// const sum = add(2, 3);
// console.log(sum);

//boolean
let muted: boolean = true;
muted = false;

//Números
let numerador: number = 2;
let denominador: number = 9;
let resultado = numerador / denominador;

//String
let nombre: string = "Manuel";
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["Manuel", "Jesus", "Adilene"];
// people.push("900");

let peopleNumber: Array<string | number> = [];
peopleNumber.push("Manuel");
peopleNumber.push(1997);

//Enum
enum Color {
	Rojo = "Rojo",
	Verde = "Verde",
	Azul = "Azul",
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

//any
let comodin: any = "Joker";
comodin = { type: "Wildcard" };

//Object
let someObject: object = { type: "Wildcard" };

//funciones
function add(a: number, b: number): number {
	return a + b;
}

const sum = add(3, 4);
console.log(`La suma es ${sum}`);

function createAdder(a: number): (number) => number {
	return function (b: number) {
		return a + b;
	};
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);
console.log(addFour);

function fullName(firstName?: string, lastName: string = "Magaña"): string {
	return `${firstName} ${lastName}`;
}

const manuel = fullName("Manuel");
console.log(manuel);

interface Rectangulo {
	ancho: number;
	alto: number;
	color?: Color;
}

let rect: Rectangulo = {
	ancho: 4,
	alto: 6,
	color: Color.Rojo,
};

function area(r: Rectangulo) {
	return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
	return this.color ? `Un rectángulo ${this.color}` : `Un rectángulo`;
};
console.log(rect.toString());
