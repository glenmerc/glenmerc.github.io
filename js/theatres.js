$( document ).ready(function() {
	var theatreValue, naam, adres,position, map, telefoon, website, info, img, locationLat, locationLon, position, myLat, myLon, lat, lng;

	
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
	$.getJSON("../js/Bioscopen.json", function(data){
		naam = data.Bioscopen[theatreValue].Naam;
		map = data.Bioscopen[theatreValue].Map;
		telefoon = data.Bioscopen[theatreValue].Telefoon;
		website = data.Bioscopen[theatreValue].Website;
		adres = data.Bioscopen[theatreValue].Adres;
		info = data.Bioscopen[theatreValue].Info;
		img = data.Bioscopen[theatreValue].Img;
		lat = data.Bioscopen[theatreValue].Lat;
		lng = data.Bioscopen[theatreValue].Lng;
		
		//wegschrijven van data naar de html
		document.getElementById("naam").innerHTML += ""+naam+"";
		document.getElementById("telefoon").innerHTML += ""+telefoon+"";
		document.getElementById("website").innerHTML += "<a class='link' target='_blank' href='"+website+"'>"+website+"</a>";
		document.getElementById("adres").innerHTML += ""+adres+"";
		document.getElementById("info").innerHTML += ""+info+"";
		document.getElementById("img").innerHTML += "<img class='cinemaPhoto' src='/img/"+img+"'/>";
		
		var mapOptions = {
    		center: new google.maps.LatLng(lat, lng),
    		zoom: 15,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
			};
		var map = new google.maps.Map(document.getElementById('map'), mapOptions);

		var markerOptions = {
    		position: new google.maps.LatLng(lat, lng),
			icon: 'https://cdn4.iconfinder.com/data/icons/ballicons-2-new-generation-of-flat-icons/100/popcorn-32.png'
			};
		var marker = new google.maps.Marker(markerOptions);
		marker.setMap(map);
		
		var infoWindowOptions = {
    		content: ''+naam+' Is Here!'
			};

		var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
		google.maps.event.addListener(marker,'click',function(e){
  
  		infoWindow.open(map, marker);
		
		
  
});
		
});
});
	