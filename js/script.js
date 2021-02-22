let bombas = [
	{
		"name": "Bomba Tsar",
		"image": "data/imagens/tsar.jpg",
		"price": "10.000.000",
		"category": "bombas"
	},
	{
		"name": "Kit Granadas Sortido",
		"image": "data/imagens/kit_granada.jpg",
		"price": "500",
		"category": "bombas"
	},
	{
		"name": "Lança Granadas",
		"image": "data/imagens/lanca_granada.jpg",
		"price": "5.000",
		"category": "bombas"
	},
	{
		"name": "Granada de Mão Alemã",
		"image": "data/imagens/granada_alema.jpg",
		"price": "200",
		"category": "bombas"
	}
]

let armas_fogo = [
	{
		"name": "MP 40",
		"image": "data/imagens/mp_40.jpg",
		"price": "2.000",
		"category": "armas_fogo"
	},
	{
		"name": "Lança Chamas",
		"image": "data/imagens/lanca_chamas.jpg",
		"price": "5.000",
		"category": "armas_fogo"
	},
	{
		"name": "AK-47",
		"image": "data/imagens/ak_47.jpg",
		"price": "3.000",
		"category": "armas_fogo"
	},
	{
		"name": "Desert Eagle",
		"image": "data/imagens/desert.jpg",
		"price": "2.000",
		"category": "armas_fogo"
	}
]


let veiculos = [
	{
		"name": "M26 Pershing",
		"image": "data/imagens/m26_pershing.jpg",
		"price": "1.000.000",
		"category": "veiculos"
	},
	{
		"name": "Helicóptero de Combate",
		"image": "data/imagens/helicoptero.jpg",
		"price": "800.000",
		"category": "veiculos"
	},
	{
		"name": "Caça de Guerra",
		"image": "data/imagens/caca_guerra.jpg",
		"price": "1.200.000",
		"category": "veiculos"
	},
	{
		"name": "Veículo Anfíbio Militar",
		"image": "data/imagens/anfibio.jpg",
		"price": "500.000",
		"category": "veiculos"
	}
]


let armas_brancas = [
	{
		"name": "Espada Espartana",
		"image": "data/imagens/espada_espartana.jpg",
		"price": "500",
		"category": "armas_brancas"
	},
	{
		"name": "Guilhotina",
		"image": "data/imagens/guilhotina.png",
		"price": "1.000",
		"category": "armas_brancas"
	},
	{
		"name": "Katana Japonesa",
		"image": "data/imagens/katana.jpg",
		"price": "1.000",
		"category": "armas_brancas"
	},
	{
		"name": "Machadinha Viking",
		"image": "data/imagens/machado.jpg",
		"price": "800",
		"category": "armas_brancas"
	}
]


let all = [
	{
		"name": "Bomba Tsar",
		"image": "data/imagens/tsar.jpg",
		"price": "10.000.000",
		"category": "bombas"
	},
	{
		"name": "Kit Granadas Sortido",
		"image": "data/imagens/kit_granada.jpg",
		"price": "500",
		"category": "bombas"
	},
	{
		"name": "Lança Granadas",
		"image": "data/imagens/lanca_granada.jpg",
		"price": "5.000",
		"category": "bombas"
	},
	{
		"name": "MP 40",
		"image": "data/imagens/mp_40.jpg",
		"price": "2.000",
		"category": "bombas"
	},
	{
		"name": "Lança Chamas",
		"image": "data/imagens/lanca_chamas.jpg",
		"price": "5.000",
		"category": "bombas"
	},
	{
		"name": "M26 Pershing",
		"image": "data/imagens/m26_pershing.jpg",
		"price": "1.000.000",
	},
	{
		"name": "Espada Espartana",
		"image": "data/imagens/espada_espartana.jpg",
		"price": "500",
	},
	{
		"name": "Guilhotina",
		"image": "data/imagens/guilhotina.png",
		"price": "1.000",
	},
	{
		"name": "Katana Japonesa",
		"image": "data/imagens/katana.jpg",
		"price": "1.000",
	},
	{
		"name": "Machadinha Viking",
		"image": "data/imagens/machado.jpg",
		"price": "800",
	},
	{
		"name": "Helicóptero de Combate",
		"image": "data/imagens/helicoptero.jpg",
		"price": "800.000",
	},
	{
		"name": "Caça de Guerra",
		"image": "data/imagens/caca_guerra.jpg",
		"price": "1.200.000",
	},
	{
		"name": "Veículo Anfíbio Militar",
		"image": "data/imagens/anfibio.jpg",
		"price": "500.000",
	},
	{
		"name": "AK-47",
		"image": "data/imagens/ak_47.jpg",
		"price": "3.000",
	},
	{
		"name": "Desert Eagle",
		"image": "data/imagens/desert.jpg",
		"price": "2.000",
	},
	{
		"name": "Granada de Mão Alemã",
		"image": "data/imagens/granada_alema.jpg",
		"price": "200",
	}
]


const todos = [
	...bombas,
	...armas_fogo,
	...veiculos,
	...armas_brancas
];

console.log(todos);


let comprados = [];

var i = 0;


function exibeProdutos(categoria = "todos", ini = 0) {
	const exibir = (categoria != "todos"
		? todos.filter((el) => el.category == categoria).slice(ini, ini + 8)
		: todos.sort(() => Math.random() - 0.5));

	for (let i = 0; i < 8; i++) {
		if (i < exibir.length) {
			document.getElementById(`item-${i + 1}-area`).style.display = 'flex';
			document.getElementById(`p${i + 1}_1`).innerHTML = exibir[i].name;
			document.getElementById(`p${i + 1}_2`).innerHTML = "R$ " + exibir[i].price;
			document.getElementById(`image${i + 1}`).src = exibir[i].image;
			document.querySelector(`#item-${i + 1}-area button`).onclick = () => adicionarCarrinho(exibir[i]);
		}
		else document.getElementById(`item-${i + 1}-area`).style.display = 'none';

	}

	document.getElementById("prev-button-id").style.display = 'none';

}

function toggleCarrinhoBtn() {
	let carrinho = document.querySelector('#button-area');
	if (carrinho.style.display !== "none") carrinho.style.display = "none";
	else carrinho.style.display = "block";
}

function adicionarCarrinho(prod) {
	if(comprados.length == 0) toggleCarrinhoBtn();
	comprados.push(prod);
	document.querySelector('#button-area button').innerHTML = ` 
	<img class="img_carrinho" src='data/imagens/cesta.png'>
	 (${comprados.length})
	 Finalizar Compra`;
	// alert(nam + " adicionado ao carrinho");
}

window.onload = () => {
	toggleCarrinhoBtn();
	exibeProdutos();
};


function clickArmasFogo() { exibeProdutos(categoria = "armas_fogo") }


function clickArmasBrancas() { exibeProdutos(categoria = "armas_brancas") }

function clickBombas() { exibeProdutos(categoria = "bombas") }

function clickVeiculos() { exibeProdutos(categoria = "veiculos") }



function finalizar() {
	let enviar = JSON.stringify(comprados);
	sessionStorage.setItem('produtos', enviar);
	abrirModal();
}