$( document ).ready(function() {
	
	var i, data, genreId, movie, poster, movieId;
		
	//open de data API voor aanmaak van genre Buttons op index
	$.getJSON("https://api.themoviedb.org/3/genre/movie/list?api_key=f32e0e7660d450db58d253702535beb2&language=en-us", function(data){
		
		//aanmaak van alle genre buttons op index
		for (i = 0; i < data.genres.length; i++) {
		document.getElementById("genreButtons").innerHTML += "<div class='col-md-2 col-xs-12'><button class='btnMarge btn btn-primary col-md-12 col-xs-12' value='"+ data.genres[i].id +"'>"+ data.genres[i].name+"</button></div>";
		}	
		
		//weergeven van de genreId
		$(".btnMarge").on("click", function(){
			genreId = this.value;
			
			//sessionstore om value later te gebruiken
			sessionStorage.setItem("genreId",genreId);
			window.location.href = "result";
			});	
	});
	
	genreId = sessionStorage.getItem("genreId");
	console.log(genreId);
	
	if (genreId === "0"){
		//open de data API voor het weergeven van "now playing"
		$.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=f32e0e7660d450db58d253702535beb2&language=en-US", function(data){
			//aanmaak van elke film
			for (i = 0; i < data.results.length; i++) {
				movie = data.results[i].original_title;
				poster = data.results[i].poster_path;
				movieId = data.results[i].id;
    			document.getElementById("movies").innerHTML += "<div class='col-md-2 col-xs-6'><div class='movieVast'><a href='detail'><img class='posterSize movieId' alt='"+movieId+"' src='https://image.tmdb.org/t/p/w500" + poster + "'/><p class='textVast'>"+ movie +"</p></a></div></div>";
			}
			
			$(".movieId").on("click", function(){
				movieId = $(this).attr("alt");
				sessionStorage.setItem("movieId", movieId);
				});
			
		});
	}else{
		//open de data API voor het weergeven van films op genre
		$.getJSON("https://api.themoviedb.org/3/genre/"+ genreId +"/movies?api_key=f32e0e7660d450db58d253702535beb2&language=en-US&include_adult=false&sort_by=created_at.asc", function(data){
		
			//aanmaak van elke film
			for (i = 0; i < data.results.length; i++) {
			movie = data.results[i].original_title;
			poster = data.results[i].poster_path;
			movieId = data.results[i].id;
    		document.getElementById("movies").innerHTML += "<div class='col-md-2 col-xs-6'><div class='movieVast'><a href='detail'><img class='posterSize movieId' alt='"+movieId+"' src='https://image.tmdb.org/t/p/w500" + poster + "'/><p class='textVast'>"+ movie +"</p></a></div></div>";
			}
			$(".movieId").on("click", function(){
				movieId = $(this).attr("alt");
				sessionStorage.setItem("movieId", movieId);
				});
		});
	}
	
	//open de data API voor aanmaak van genre Buttons op index
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
	
	
	$("#genreButtons").hide();
	$(".btnmarge").on("click",function(){
		$("#genreButtons").fadeToggle("show","swing");
		});
	
	
	
	
});