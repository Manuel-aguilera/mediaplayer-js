class Juego {
	constructor() {
		this.buttons = document.getElementsByClassName("bt"); //HTMLCollectionOf<Element>
		console.log(this.buttons);

		this.colores = [
			"Red",
			"Red_Light",
			"Purple",
			"Purple_Light",
			"Blue",
			"Green",
			"Green_Light",
			"Yellow",
			"Orange",
		];

		this.addClick();
		this.toggleColor = this.toggleColor.bind(this);
	}

	addClick() {
		let i = 0;
		let b = Object.values(this.buttons);
		b.forEach((button) => {
			this.setColor(button, this.colores[i]);

			button.onclick = ({ target }) => {
				this.toggleColor(target);
			};
			i = i + 1;
		});
	}

	setColor(button, color) {
		button.title = color;
		button.classList.add(color);
	}

	toggleColor(button) {
		// const classes = Object.values(button.classList);
		// console.log(classes);
		// let result = classes.find((clase) => {
		// 	return this.colores.find((color) => clase === color);
		// });
		button.classList.toggle(button.title);
	}
}

export default Juego;
