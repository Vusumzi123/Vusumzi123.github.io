(function(){
	var app = angular.module('store', []);
	app.controller(
		'StoreController',
		function(){
		this.product1 = beer1;
		this.product2 = beer2;

		}
	);

	var beer1 = {
		name: 'Weizen',
		price: 45.00,
		description: 'Cerveza de trigo estilo hefeweizen típica de Bavaria, altamente carbonatada, con sabores frutales y aromas a clavo, de cuerpo medio-alto.',
		side: 'Carnes, pescados y mariscos especiados o salados.',
		glass : ['cervecero','Weizen'],
	}

	var beer2 = {
		name: 'Scottish Export 80/-',
		price: 45.00,
		description: 'Los sub-estilos Scottish Ale se diferencian por su densidad y contenido alcohólico, aunque las versiones más fuertes tendrán sabor más intenso y más amargor para balancear la malta.',
		side: 'Comida mexicana, platillos picantes, alitas y hamburguesas.',
		glass : ['Pinta inglesa'],
	}
})();