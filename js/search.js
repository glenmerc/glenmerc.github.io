$(document).ready(function() {
	
	"use strict";
	var query, movie, i, posterId, movieId, genreId, posterPre, poster;
	
	
	$("#btnSearch").on("click", function(){
		query = document.getElementById("search").value;
		genreId = this.value;
		sessionStorage.setItem("genreId", genreId);
		sessionStorage.setItem("query", query);
		window.location.href = "search";
		});
	
	$( "#search" ).keypress(function( e ) {
  		if (e.which == 13 ) {
		query = document.getElementById("search").value;
		genreId = 100;
		sessionStorage.setItem("genreId", genreId);
		sessionStorage.setItem("query", query);
		window.location.href = "search";
		}
  		
		});
		
		
	
	
	genreId = sessionStorage.getItem("genreId");
	if (genreId === "100"){
		$("#pager").addClass("hide");
		}
		
		
		query = sessionStorage.getItem("query");
		
		$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=f32e0e7660d450db58d253702535beb2&language=en-US&query="+query+"&page=1&include_adult=false", function(data){
			
			for (i = 0; i < data.results.length; i++) {
			movie = data.results[i].original_title;
			movieId = data.results[i].id;
			posterId = data.results[i].poster_path;
			posterPre = "https://image.tmdb.org/t/p/w500";
			poster = posterPre+posterId;
			
			// if geen posterId dan laden we een placeholder in
				if (posterId === null){
					poster = "../img/noImage.jpg";
					}
			
			
			document.getElementById("movies").innerHTML += "<div class='col-md-2 col-xs-6'><div class='movieVast'><a href='detail'><img class='posterSize movieId' alt='"+movieId+"' src='"+poster+ "'/><p class='textVast'>"+ movie +"</p></a></div></div>";
			
			}	
			
			//wanneer er geklikt wordt op een .movieId --> sessionstorage van alt-waarde
			$(".movieId").on("click", function(){
				movieId = $(this).attr("alt");
				sessionStorage.setItem("movieId", movieId);
				});
				
	
			
		});
		
		
		

		
		
});
