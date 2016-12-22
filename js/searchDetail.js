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
	
	$( "#search" ).bind('keypress', function(e) {
    	if(e.keyCode == 13){
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
		
		
		
		
		
		

		
		
});
