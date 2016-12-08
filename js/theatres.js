$( document ).ready(function() {
	var theatreValue, naam, adres,position, map, telefoon, website, info, img, locationLat, locationLon, position, myLat, myLon;

	
	//geeft value weer van de theatrelist dropdown
	$(".theatreList").on("click", function(){
		theatreValue = this.value;
		
		//sessionstorage voor gebruik in andere functie
		sessionStorage.setItem("theatreValue",theatreValue);
		
		//zend ons door naar pagina waar info wordt weergegeven
		window.location.href = "theatres";
	});
	
	//haal sessionstorage op
	theatreValue = sessionStorage.getItem("theatreValue");
	
		
	//open local json file voor info van bioscopen
	$.getJSON("https://api.myjson.com/bins/3jo7b", function(data){
		naam = data.Bioscopen[theatreValue].Naam;
		map = data.Bioscopen[theatreValue].Map;
		telefoon = data.Bioscopen[theatreValue].Telefoon;
		website = data.Bioscopen[theatreValue].Website;
		adres = data.Bioscopen[theatreValue].Adres;
		info = data.Bioscopen[theatreValue].Info;
		img = data.Bioscopen[theatreValue].Img;
		
		//wegschrijven van data naar de html
		document.getElementById("naam").innerHTML += ""+naam+"";
		document.getElementById("telefoon").innerHTML += ""+telefoon+"";
		document.getElementById("website").innerHTML += "<a class='link' target='_blank' href='"+website+"'>"+website+"</a>";
		document.getElementById("adres").innerHTML += ""+adres+"";
		document.getElementById("info").innerHTML += ""+info+"";
		document.getElementById("img").innerHTML += "<img class='cinemaPhoto' src='/img/"+img+"'/>";
		
		//geeft de coordinaten van de gebruiker terug en stored deze in vars
		navigator.geolocation.getCurrentPosition(succes,failure,{timeout:10000});
	
	//slaat de coordinaten op bij succes van retrieve
	function succes(position){
		myLat = position.coords.latitude;
	    myLon = position.coords.longitude;
	
	//wegschrijven van data naar de html
		document.getElementById("mapper").innerHTML += '<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin='+myLat+'%2C%20'+myLon+'&destination='+map+'&key=AIzaSyBYkHYFPNnydJ2j8n7n5ChCXGScwN-d3z4" allowfullscreen></iframe>';
	
	}
	//geeft foutcode wanneer coordinaten niet konden worden gevonden	
	function failure(){
		$("#mapper").html("<p>failed to get your location</p>");
		}
		
		


});
});
	