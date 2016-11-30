$(document).ready(function() {

var input = "empty", result= "empty";
var key = "138244-test-WH0LXQF8";

	//on event click the input is loaded
	$("#submit").on("click", function(){
		input = document.getElementById('searchInput').value;
		
		//open the API
			$.getJSON("https://www.tastekid.com/api/similar?q="+ input +"&info=1&k="+ key +"", function (data){
		
			result = data.Similar.Info;
			console.log(result);
		
			});	
		
		
	});

});