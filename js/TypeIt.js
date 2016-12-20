$( document ).ready(function() {
	
	var quote, jaar, film,i ;
	
	//lokale json inladen om weer te geven op index
	$.getJSON("/js/quotes.json", function(data){
		
		//randomgenner
		i = Math.floor((Math.random() * 100) + 1);
	
		//weergeven van random afbeeldingen op de index
		$(".background").css({"background-image": "url(../../img/index/"+data.Quotes[i].Img+")"}).ready(function() {
        
			//typing.js voor random quotes met typewriter effect weer te geven in de tag met class typing
			$(".typing").typeIt({
    			strings: ['“'+ data.Quotes[i].Quote +'” <p class="ptit">'+ data.Quotes[i].Film +', '+ data.Quotes[i].Jaar  +'</p>'],
    			speed: 100,
	 			lifelike:true,
	 			cursor:false,
     			breakLines: true,
     			autoStart: true	 
			});

		});	
    });//sluit de json toegang

});