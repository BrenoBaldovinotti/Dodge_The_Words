
var palavras = ["Quatro","Urso","Universidade","Forquilha","Insurreição","Paralelepípedo","Maçã","Enfeitiçar","Úlcera","Balde","Pólvora",
"Irrigar",
"Microfone",
"Acordeão",
"Polegada",
"Talismã",
"Naftalina",
"Parquímetro",
"Cova",
"Claustrofobia",
"Contrabando",
"Acne",
"Excursão",
"Órbita",
"Transpirar",
"Gotejamento",
"Felicidade",
"Impressora",
"Imaginação",
"Medalhas",
"Braça",
"Tripulação",
"Passos",
"Rocha",
"Estádio",
"Claustrofobia",
"Combustível",
"Crustáceo",
"Trança",
"Tímido",
"Balões",
"Esponja",
"Parquímetro",
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
"Maremoto",
"Veneza",
"Pântano",
"Clava",
"Presunto",
"Astrônomo",
"Unicórnio",
"Aspirador",
"Minissaia",
"Gôndola",
"Mostarda",
"Incomodar",
"Pérolas",
"Leopardo",
"Beisebol",
"Armazém",
"Âncora",
"Assobio",
"Percussão"];


window.onload = function GerarPalavra(wordId) {

$('#PalavraCima').html(palavras[GerarNumeroAleatorio(palavras.length - 1)]);
$('#PalavraMeio').html(palavras[GerarNumeroAleatorio(palavras.length - 1)]);
$('#PalavraBaixo').html(palavras[GerarNumeroAleatorio(palavras.length - 1)]);
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

RandomWord();

/*mantem sempre o foco no input*/
$(document).ready(function() {

    $("input").focusout(function(){
    	$('#wordSubmit').focus();
    });

});

var score = 0
var multiplicadorDificuldade = 1

/*função para pegar, verificar, e apagar a palavra digitada */
$(document).keypress(function(e) {
    if(e.which == 13) {   
    	        	 	       
    	if($('#wordSubmit').val() != '' && $('#wordSubmit').val() != null)
    	{
    		if($('#wordSubmit').val() == $('#PalavraCima').html()) {
	        	eraseWord('PalavraCima');	
	        	updateScore();
	        	addWord('PalavraCima', 'words1');
	        	console.log(score);        		        	
	        }


    		if($('#wordSubmit').val() == $('#PalavraMeio').html()) {         			
	        	eraseWord('PalavraMeio');
	        	updateScore();
	        	addWord('PalavraMeio', 'words2');
	        	console.log(score);				       	
        	}

	        if($('#wordSubmit').val() == $('#PalavraBaixo').html()) {
	        	eraseWord('PalavraBaixo');
	        	updateScore();
	        	addWord('PalavraBaixo', 'words3');
	        	console.log(score);	        		        	      	 
	        }
    	}       
    	
        $('#wordSubmit').val('');
    }
});

function eraseWord (wordId) {
	score = score + (10 * multiplicadorDificuldade);
	$("#" + wordId).html('');	
}

function addWord (wordId, animationClass){
	      	      
	var el = $("#" + wordId),  
	newone = el.clone(true);
	el.before(newone);
	        
	$("." + el.attr("class") + ":last").remove();

	$("#" + wordId).removeClass(animationClass).addClass(animationClass);	
	$("#" + wordId).stop(true);
	$("#" + wordId).html(palavras[GerarNumeroAleatorio(palavras.length - 1)]); 
}

function updateScore () {
    $("#score-result").html('');	
	$("#score-result").html(" " + score);
}


var opcoes = null;

function init_options()
{

    var retrievedObject = localStorage.getItem('opcoes');


    console.log("valor " + retrievedObject);
    console.log('retrievedObject: ', JSON.parse(retrievedObject));

    if (retrievedObject != null) {
        console.log("not_null");

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