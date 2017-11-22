
var palavras = ["Quatro",
"Urso",
"Universidade",
"Forquilha",
"Insurreição",
"Paralelepípedo",
"Maçã",
"Enfeitiçar",
"Úlcera",
"Balde",
"Pólvora",
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

