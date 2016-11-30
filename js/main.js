$( document ).ready(function() {
	
	
	$.getJSON("http://ip-api.com/json", function(data){
		var city = data.city;
		
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d7b9ba0ae6a5acee57e21df562bd2fe0", function (data) { 
		
		var weather = data.weather;
		console.log(weather);
		console.log(city);
		
		});
		
	});
		
		
	
	
});