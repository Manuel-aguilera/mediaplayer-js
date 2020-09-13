function calcularArea(base) {
	console.log(`El area del triángulo es: ${((this.an + base) / 2) * this.a}`);
}

const valores = {
	a: 20,
	an: 40,
};

//Uso de call
calcularArea.call(valores, 15);
//uso de apply
calcularArea.apply(valores, [15]);
//uso de bind
const calcular = calcularArea.bind(valores, 15);
calcular();
