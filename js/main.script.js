
var palavras = ["","","Universidade","Forquilha","Insurreição","Paralelepípedo","Maçã","Enfeitiçar","Úlcera","","Pólvora","Irrigar","Microfone","Acordeão","Polegada",
"Talismã","Naftalina","Parquímetro","","Claustrofobia","Contrabando","","Excursão","Órbita","Transpirar","Gotejamento","","Impressora","Imaginação","Medalhas","Braça",
"Tripulação","Passos","Rocha","Estádio","Claustrofobia","Combustível","Crustáceo","Trança","Tímido","Balões","Esponja","Parquímetro","Afrouxar","Anão","Tráfego","Molécula","Lixeira",
"","Taxidermia","","Dobrável","Balão","Romance","Cotovelo","Transpirar","","Sorriso","Múmia","Vagabundo","Marcador","Maremoto","Veneza","Pântano","","Presunto",
"Astrônomo","Unicórnio","Aspirador","Minissaia","Gôndola","Mostarda","Incomodar","Pérolas","Leopardo","Beisebol","Armazém","Âncora","Assobio","Percussão"];

var palavrasFáceis = ["comer","queijo","laranja","frango","toalha","quatro","urso","balde","cova","acne","felicidade","toalha","pintor","cama","dados","rio","orelha","comida",
"espada","pia","estudante","chuva","lobo","capacete","casa","livro","cabelo","saco","ruim","cachos","barba","pelicano","teto","fino","pele","parede","doce","menina",
"menino","ouvido","cachorro","papelada","janela","piada","triste","hoje","Clava","Escrever","Quero","Jantar","que","ok","sim","pois","tenho","carteira","luz","quadro",
"foto","branco","preto","azul","verde","macaco","peixe","portugal","ruiva","fazer","barata","aranha","elefante","cubo","contole","carta","tomada","eu","sou","caipira",
"senhora","apareceu","escura","terra","vida","pai","sorte","nunca","pinga","amor","madeira","pedra","pote","ar","letra","palavra","tv","desenho","corda","borboleta"];

var palavrasDificeis = ["Admoesta","Alarido","Alcunha","Âmago","Ardiloso","Arroubo","Balbúrdia","Belicoso","Besugo","Curra","Dilapidar","Dândi","Engodar","Fenecimento","Fugaz",
"Fleumático","Frugal","Homizio","Ígneo","Ignóbil","ImplÍcito","Insolente","Irrupção","Incólume","Inócuo","Jaez","Janota","Justapor","Pacóvio","Parco","Pedante","Perdulário","Pernóstico",
"Pândego","Sumidade","Taciturno","Tênue","Veneta","Pândego"];

var palavrasIngles = ["dependent","gray","joyous","spicy","educated","glass","observant","lunch","nasty","pies","four","object","mourn","bloody","phobic","hall","helpless","plug",
"credit","silk","entertaining","post","quiet","heat","periodic","amusement","tart","offer","uppity","past","drown","bare","insurance","wonderful","recognise","applaud","numberless",
"way","ultra","things"];

//inicializa palavras do jogo
window.onload = function GerarPalavra() {
	playMuisc();
    //seta velocidade do jogo
    var retrievedObject = localStorage.getItem('opcoes');
    var parsedObject = JSON.parse(retrievedObject);
    console.log('retrievedObject.velocidade: ', parsedObject.velocidade);
    console.log('retrievedObject.dificuldade: ', parsedObject.dificuldade);

    document.getElementById('PalavraCima').style.animationDuration= parsedObject.velocidade;
    document.getElementById('PalavraMeio').style.animationDuration= parsedObject.velocidade;
    document.getElementById('PalavraBaixo').style.animationDuration= parsedObject.velocidade;

    if(parsedObject.dificuldade = "Facil")
    {
        $('#PalavraCima').html(palavrasFáceis[GerarNumeroAleatorio(palavrasFáceis.length - 1)]);
        $('#PalavraMeio').html(palavrasFáceis[GerarNumeroAleatorio(palavrasFáceis.length - 1)]);
        $('#PalavraBaixo').html(palavrasFáceis[GerarNumeroAleatorio(palavrasFáceis.length - 1)])
    }

    if(parsedObject.dificuldade = "Medio")
    {
        $('#PalavraCima').html(palavras[GerarNumeroAleatorio(palavras.length - 1)]);
        $('#PalavraMeio').html(palavras[GerarNumeroAleatorio(palavras.length - 1)]);
        $('#PalavraBaixo').html(palavras[GerarNumeroAleatorio(palavras.length - 1)])
    }

    if(parsedObject.dificuldade = "Dificil")
    {
        $('#PalavraCima').html(palavrasDificeis[GerarNumeroAleatorio(palavrasDificeis.length - 1)]);
        $('#PalavraMeio').html(palavrasDificeis[GerarNumeroAleatorio(palavrasDificeis.length - 1)]);
        $('#PalavraBaixo').html(palavrasDificeis[GerarNumeroAleatorio(palavrasDificeis.length - 1)]);
    }
}

function GerarNumeroAleatorio(tamanhoArray) {
		var numeroGerado;
    numeroGerado = Math.floor((Math.random() * tamanhoArray));
		return numeroGerado;	
}

/*MÚSICAS*/
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

var backgroundMusic;

function playMuisc() {
		backgroundMusic = new sound("js/background.mp3");
    	backgroundMusic.play();
}
/*MÚSICAS END*/

/*FUNÇÃO MAIN DO JOGO*/
var score = 0
var multiplicadorDificuldade =1
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
/*FUNÇÃO MAIN DO JOGO END*/

/*APAGA PALAVRA*/
function eraseWord (wordId) {
	score = score + (10 *multiplicadorDificuldade);
	$("#" + wordId).html('');	
}
/*APAGA PALAVRA END*/


/*ADCIONA PALAVRA*/
function addWord (wordId, animationClass){
	      	      
	var el = $("#" + wordId),  
	newone = el.clone(true);
	el.before(newone);
	        
	$("." + el.attr("class") ).remove();
	var lae = $("." + el.attr("class") + ":last");
	console.log(lae);

	$("#" + wordId).removeClass(animationClass).addClass(animationClass);	
	$("#" + wordId).stop(true);


    var retrievedObject = localStorage.getItem('opcoes');
    var parsedObject = JSON.parse(retrievedObject);
    console.log('retrievedObject: ', parsedObject.velocidade);
    document.getElementById('PalavraCima').style.animationDuration= parsedObject.velocidade;
    document.getElementById('PalavraMeio').style.animationDuration= parsedObject.velocidade;
    document.getElementById('PalavraBaixo').style.animationDuration= parsedObject.velocidade;


    if(parsedObject.dificuldade = "Facil")
    {
        $("#" + wordId).html(palavrasFáceis[GerarNumeroAleatorio(palavrasFáceis.length - 1)]); 
    }

    if(parsedObject.dificuldade = "Medio")
    {
        $("#" + wordId).html(palavras[GerarNumeroAleatorio(palavras.length - 1)]); 
    }

    if(parsedObject.dificuldade = "Dificil")
    {
        $("#" + wordId).html(palavrasDificeis[GerarNumeroAleatorio(palavrasDificeis.length - 1)]); 
    }
	
}
/*ADCIONA PALAVRA END*/

/*PLACAR*/
function updateScore () {
    $("#score-result").html('');	
	$("#score-result").html(" " + score);
}
/*PLACAR END*/


/*PLACAR FINAL*/
function updateFinalScore () {
    $("#score-result-final").html('');	
	$("#score-result-final").html(" " + score);
}
/*PLACAR FINAL END*/


/*OPÇÕES*/
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

function highlight_dificuldade() {

    var array_values = Object.values(opcoes);
    switch (array_values[1]) {
        case "Facil":
            $('#dificuldade_facil_span').css('display', 'inline-block');
            $('#dificuldade_media_span').css('display', 'none');
            $('#dificuldade_dificil_span').css('display', 'none');

        break;

        case "Medio":
            $('#dificuldade_facil_span').css('display', 'none');
            $('#dificuldade_media_span').css('display', 'inline-block');
            $('#dificuldade_dificil_span').css('display', 'none');
        break;

        case "Dificil":
       		$('#dificuldade_facil_span').css('display', 'none');
            $('#dificuldade_media_span').css('display', 'none');
        	$('#dificuldade_dificil_span').css('display', 'inline-block');
        break;

        default:
            break;
    }
}

function highlight_velocidade() {

    var array_values = Object.values(opcoes);
    switch (array_values[0]) {
        case "15s":
            $('#velocidade_facil_span').css('display', 'inline-block');
            $('#velocidade_media_span').css('display', 'none');
            $('#velocidade_rapida_span').css('display', 'none');
        break;

        case "10s":
            $('#velocidade_facil_span').css('display', 'none');
            $('#velocidade_media_span').css('display', 'inline-block');
            $('#velocidade_rapida_span').css('display', 'none');
        break;

        case "5s":
            $('#velocidade_facil_span').css('display', 'none');
            $('#velocidade_media_span').css('display', 'none');
            $('#velocidade_rapida_span').css('display', 'inline-block');

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
}
/*OPÇÕES END*/