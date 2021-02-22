let produtos;

function carregaProdutos() {
	const produtos = JSON.parse(sessionStorage.getItem('produtos'));
	if (produtos === null) {
		document.querySelector('.carrinho_vazio').style.display = "block";
		document.getElementById('div-content-inner').style.display = "none";
	}
	else {
		document.querySelector('.carrinho_vazio').style.display = "none";
		document.getElementById('div-content-inner').style.display = "block";

		const list = document.getElementById('lista-produtos');
		list.innerHTML = "";
		const prod_div = document.querySelector('.prod_item');

		for (let i = 0; i < produtos.length; i++) {
			var divProdModel = prod_div.cloneNode(deep = true);
			divProdModel.children[0].innerHTML = "#1";
			divProdModel.children[1].innerHTML = produtos[i].name;
			divProdModel.children[2].innerHTML = produtos[i].price;
			list.appendChild(divProdModel);
		}


		let prices = [];

		for (let i = 0; i < produtos.length; i++) {
			prices[i] = parseFloat(produtos[i].price.split(" ")[0].replace(/[^0-9]/g, ''));
		}

		var soma = 0;

		for (let i = 0; i < prices.length; i++) {
			soma += prices[i];
		}

		var totvalue = document.getElementById('value-field');

		totvalue.innerHTML = "Valor Total: R$ " + soma.toString();
	}


};

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function finalizaCompra(btn) {
	document.querySelector('.inputs').style.display = "none";
	const t1 = getRandomInt(5, 20);
	document.getElementById('t1').innerText = t1;
	document.getElementById('t2').innerText = getRandomInt(t1 + 3, t1 + 6);;
	btn.style.display = "none";
	document.querySelector('.entrega').style.display = "block";
	document.getElementById('end').innerText = document.getElementById('ad-field').value;
	document.getElementById('nome').innerText = document.getElementById('name-field').value;
	sessionStorage.removeItem('produtos');
	comprados = [];
	toggleCarrinhoBtn();
}


function fecharModal() {
	document.querySelector('.entrega').style.display = "none";
	document.querySelector('.modalFinalizacao button#button1').style.display = "block";
	document.querySelector('#shadow').classList.toggle("open");
	document.querySelector('.modalFinalizacao').classList.toggle("open");
}
function abrirModal() {
	document.querySelector('.inputs').style.display = "block";
	carregaProdutos();
	document.querySelector('.modalFinalizacao').style.display = "block";
	document.querySelector('#shadow').classList.toggle("open");
	document.querySelector('.modalFinalizacao').classList.toggle("open");
}

// window.onload = carregaProdutos();