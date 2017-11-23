/*mantem sempre o foco no input*/
$(document).ready(function() {
    $("input").focusout(function(){
      $('#wordSubmit').focus();
    });

});

/*COLISÃO*/
//função de colisão entre divs
function collision($span, $div1) {
  var x1 = $span.offset().left;
  var y1 = $span.offset().top;
  var h1 = $span.outerHeight(true);
  var w1 = $span.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div1.offset().left;
  var y2 = $div1.offset().top;
  var h2 = $div1.outerHeight(true);
  var w2 = $div1.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;
    
  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) 
  	{
  		return false;
  	}
  	else
  	{
  		return true;		
  	}  
}
//evento que checa se as divs colidisão
window.setInterval(function() {
	if(collision($('#PalavraCima'), $('#chegada')) || collision($('#PalavraMeio'), $('#chegada')) || collision($('#PalavraBaixo'), $('#chegada')))
	{
		//pausa a animanimação
		$('.words1').css('animation-play-state','paused');
	    $('.words2').css('animation-play-state','paused');
	    $('.words3').css('animation-play-state','paused');

	    //remove da tela do usuário
	    $('.words1').css('display','none');
	    $('.words2').css('display','none');
	    $('.words3').css('display','none');
      $('.spirte-row').css('display','none');
      $('.dead-spirte-row').css('display','block');

	    //atualiza o placar final
	    $("#end-game").removeAttr('style');
	    updateFinalScore();
	}
}, 200);
/*COLISÃO END*/
