$( document ).ready(function() {
	
	"use strict";
	var i, genreId, movie, posterId, posterPre, poster, movieId, page, url, theatreValue;
		
	
	//geeft value weer van de theatrelist dropdown
	$(".theatreList").on("click", function(){
		theatreValue = this.value;
		
		//sessionstorage voor gebruik in andere functie
		sessionStorage.setItem("theatreValue",theatreValue);
		
		//zend ons door naar pagina waar info wordt weergegeven
		window.location.href = "theatres";
	});
	
	
	$("#btnLogout").on("click", function(){
		window.location.href = "result";
		});
});