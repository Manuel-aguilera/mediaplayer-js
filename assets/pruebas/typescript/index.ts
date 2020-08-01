console.log("Hello, Typescript");

function add(a: number, b: number) {
	console.log(a);
	// return a + b;
}

const sum = add(2, 3);

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
