$( document ).ready(function() {
	
	"use strict";
	var i, genreId;
		
	//open de data API voor aanmaak van genre options op index
	$.getJSON("https://api.themoviedb.org/3/genre/movie/list?api_key=f32e0e7660d450db58d253702535beb2&language=en-us", function(data){
		
		//aanmaak van alle genre options op index
		for (i = 0; i < data.genres.length; i++) {
		document.getElementById("genreOptionsInput").innerHTML += "<option value='"+ data.genres[i].id +"'>"+ data.genres[i].name+"</option>";
		}	
		
		//opslaan van de genreId "0" bij nowPlaying-btnMarge
		$(".btnMarge").on("click", function(){
			genreId = this.value;
			//sessionstore om value later te gebruiken
			sessionStorage.setItem("genreId",genreId);
			window.location.href = "result";
			});	
			
			
		//opslaan van de genreId
		$( "select" ).change(function() {
   			genreId = $("select option:selected").attr("value");
      		//sessionstore om value later te gebruiken
			sessionStorage.setItem("genreId",genreId);
			window.location.href = "result";
    	});
	
	});
	
	
	//bij klik op de button verschijnen/verdwijnen de verschillende genres op de index
	$("#genreOptions").hide();
	$(".btnmarge").on("click",function(){
		$("#genreOptions").fadeToggle("show","swing");
		});
	
	
});