
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

GerarPalavra();
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

RandomWord();

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
