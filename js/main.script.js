
var palavras = ["Quatro",
"Urso",
"Universidade",
"Forquilha",
"Insurreição",
"Cova",
"Sufocar",
"Angles",
"Afrouxar",
"Anão",
"Tráfego",
"Molécula",
"Lixeira",
"Jantar",
"Taxidermia",
"Escrever",
"Dobrável",
"Balão",
"Romance",
"Cotovelo",
"Transpirar",
"Quero",
"Sorriso",
"Múmia",
"Vagabundo",
"Marcador",
"Âncora",
"Percussão"];

function GerarPalavra() {

	window.alert(palavras[GerarNumeroAleatorio(palavras.length - 1)]);

}

function GerarNumeroAleatorio(tamanhoArray) {
		var numeroGerado;
    numeroGerado = Math.floor((Math.random() * tamanhoArray));
		return numeroGerado;	
}

function RandomWord() {
var requestStr = "https://setgetgo.com/randomword/get.php";

$.ajax({
	type: "GET",
	url: requestStr,
	dataType: "jsonp",
	success: RandomWordComplete
});
}

function RandomWordComplete(data) {
console.log(data.Word);
}


/*mantem sempre o foco no input*/
$(document).ready(function() {

    $("input").focusout(function(){
    	$('#wordSubmit').focus();
    });

});

var score = 0
/*função para pegar, verificar, e apagar a palavra digitada */
$(document).keypress(function(e) {
    if(e.which == 13) {   
    	        	 	       
    	if($('#wordSubmit').val() != '' && $('#wordSubmit').val() != null)
    	{
    		if($('#wordSubmit').val() == $('#PalavraMeio').html()) {     
    			score = score + 10;   	
	        	eraseWord('PalavraMeio');	        		        	
        	}

	        if($('#wordSubmit').val() == $('#PalavraCima').html()) {
	        	score = score + 10;
	        	eraseWord('PalavraCima');	        		        	
	        }

	        if($('#wordSubmit').val() == $('#PalavraBaixo').html()) {
	        	score = score + 10;
	        	eraseWord('PalavraBaixo');	        		        	      	 
	        }
    	}       

    	
        $('#wordSubmit').val('');

    }
});

function eraseWord (wordId) {
	score = score + 10;
	$("#" + wordId).html('');	
}

function updateScore () {	
	$("#score-result").replaceWith(" " + score);
}

var opcoes = null;

function init_options()
{
	
	var retrievedObject = localStorage.getItem('opcoes');	
	

	console.log("valor " + retrievedObject);
	console.log('retrievedObject: ', JSON.parse(retrievedObject));
	
	if (retrievedObject != "null") {
		
		opcoes = JSON.parse(retrievedObject);

	} else {
		console.log("NULL!!! ");
		opcoes = {
			velocidade:15, 
			dificuldade:"Facil", 
			multiplicadorDificuldade:1,	
			frequencia:5,
		};
		localStorage.setItem('opcoes', JSON.stringify(opcoes));		
	}
}

function getOpcoes() {

	localStorage.setItem('opcoes', JSON.stringify(opcoes));		
	
	
}

function velocidade_facil() {
	
	opcoes.velocidade = 15;
	highlight_velocidade();
	getOpcoes();
}

function velocidade_medio() {
	
	opcoes.velocidade = 10;
	highlight_velocidade();
	getOpcoes();
}

function velocidade_dificil() {
	
	opcoes.velocidade = 5;
	highlight_velocidade();
	getOpcoes();
}

function dificuldade_facil() {
	
	opcoes.dificuldade = "Facil";
	opcoes.multiplicadorDificuldade = 1;
	highlight_dificuldade();
	
	
	getOpcoes();
}

function dificuldade_medio() {
	
	opcoes.dificuldade = "Medio";
	opcoes.multiplicadorDificuldade = 2;	
	highlight_dificuldade();
	
	getOpcoes();
}

function dificuldade_dificil() {
	
	opcoes.dificuldade = "Dificil";
	opcoes.multiplicadorDificuldade = 3;
	highlight_dificuldade();
	
	getOpcoes();
}

function frequencia_facil() {
	
	opcoes.frequencia = 5;
	highlight_frequencia();
	getOpcoes();
}

function frequencia_medio() {
	
	opcoes.frequencia = 10;
	highlight_frequencia();	
	getOpcoes();
}

function frequencia_dificil() {
	
	opcoes.frequencia = 15;
	highlight_frequencia();	
	getOpcoes();
}

function highlight_dificuldade() {
	
	var array_values = Object.values(opcoes);
	switch (array_values[1]) {
		case "Facil":
			$('#dificuldade_facil').css('color', 'red')
			$('#dificuldade_medio').css('color', '#fff')
			$('#dificuldade_dificil').css('color', '#fff')
			
		break;
	
		case "Medio":
			$('#dificuldade_facil').css('color', '#fff')		
			$('#dificuldade_medio').css('color', 'red')
			$('#dificuldade_dificil').css('color', '#fff')
			
		break;

		case "Dificil":
			$('#dificuldade_facil').css('color', '#fff')		
			$('#dificuldade_medio').css('color', '#fff')
			$('#dificuldade_dificil').css('color', 'red')
		
		break;

		default:
			break;
	}
}

function highlight_velocidade() {
	
	var array_values = Object.values(opcoes);
	switch (array_values[0]) {
		case 15:
			$('#velocidade_facil').css('color', 'red')
			$('#velocidade_medio').css('color', '#fff')
			$('#velocidade_dificil').css('color', '#fff')
			
		break;
	
		case 10:
			$('#velocidade_facil').css('color', '#fff')		
			$('#velocidade_medio').css('color', 'red')
			$('#velocidade_dificil').css('color', '#fff')
			
		break;

		case 5:
			$('#velocidade_facil').css('color', '#fff')		
			$('#velocidade_medio').css('color', '#fff')
			$('#velocidade_dificil').css('color', 'red')
		
		break;

		default:
			break;
	}
}
function highlight_frequencia() {
	
	var array_values = Object.values(opcoes);
	switch (array_values[3]) {
		case 5:
			$('#frequencia_facil').css('color', 'red')
			$('#frequencia_medio').css('color', '#fff')
			$('#frequencia_dificil').css('color', '#fff')
			
		break;
	
		case 10:
			$('#frequencia_facil').css('color', '#fff')		
			$('#frequencia_medio').css('color', 'red')
			$('#frequencia_dificil').css('color', '#fff')
			
		break;

		case 15:
			$('#frequencia_facil').css('color', '#fff')		
			$('#frequencia_medio').css('color', '#fff')
			$('#frequencia_dificil').css('color', 'red')
		
		break;

		default:
			break;
	}

}

function set_options()
{
	init_options();
	highlight_dificuldade();
	highlight_velocidade();
	highlight_frequencia();
}