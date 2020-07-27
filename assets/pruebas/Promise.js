//carrera task queue y microtask queue

const data = [
	[
		["nombre", "Manuel"],
		["carrera", "ISC"],
		["edad", 22],
	],
	[
		["nombre", "Jesús"],
		["carrera", "ISC"],
		["edad", 24],
	],
	[
		["nombre", "Adilene"],
		["carrera", "II"],
		["edad", 24],
	],
];

console.log(data.json());

function fetch() {
	const alumnos = new Promise((resolve, reject) => {
		true
			? setTimeout(() => {
					resolve(data);
			  }, 5000)
			: reject("No hay datos implementados");
	});
	alumnos
		.then((datos) => {
			const d = datos;
			console.log(d);
		})
		.catch((error) => {
			console.log(error.message);
		});
}

console.log("Primero");
fetch();
console.log("Segundo");
