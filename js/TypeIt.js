$( document ).ready(function() {
	
	var quote, jaar, film,i ;
	
	$.getJSON("/js/quotes.json", function(data){
		
		
		i = Math.floor((Math.random() * 100) + 1);
	
	$(".background").css({"background-image": "url(../../img/index/"+data.Quotes[i].Img+")"}).ready(function() {
        
		$(".typing").typeIt({
     strings: ['“'+ data.Quotes[i].Quote +'” <p class="ptit">'+ data.Quotes[i].Film +', '+ data.Quotes[i].Jaar  +'</p>'],
     speed: 100,
	 lifelike:true,
	 cursor:false,
     breakLines: true,
     autoStart: true
	 
	 
})
/*
.tiPause(2000)
.tiType('What are you looking for?')
.tiPause(500)*/
;

});	
    });

	$('.btnmarge').click(function(){
 		 $(".layer").css({"height":"100vh"});
	});
	
	

});