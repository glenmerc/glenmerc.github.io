$( document ).ready(function() {
	
	"use strict";
	var i, genreId, movie, posterId, posterPre, poster, movieId, page, url, theatreValue;
		
	//open de data API voor aanmaak van genre Buttons op result
	$.getJSON("https://api.themoviedb.org/3/genre/movie/list?api_key=f32e0e7660d450db58d253702535beb2&language=en-us", function(data){
		
		//aanmaak van alle genre buttons op index
		for (i = 0; i < data.genres.length; i++) {
		document.getElementById("genreDropdown").innerHTML += "<li class='genreList' value='"+ data.genres[i].id +"'><a>"+ data.genres[i].name+"</a></li>";
		}	
		
		//weergeven van de genreId
		$(".genreList").on("click", function(){
			genreId = this.value;
			
			//sessionstore om value later te gebruiken
			sessionStorage.setItem("genreId",genreId);
			window.location.href = "result";
			});	
	});
	
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