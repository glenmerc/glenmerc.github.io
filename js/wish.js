$( document ).ready(function() {
	
	"use strict";
	
	var movieId, movieName, poster;
	 
	$("#wish").on("click", function(){
		movieId = sessionStorage.getItem("movieId");
		movieName= sessionStorage.getItem("title");
		poster = sessionStorage.getItem("poster");
		firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).child("moviename").set(movieName);
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).child("poster").set(poster);
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).child("movieId").set(movieId);
			firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).child("wish").set("true");
		}else{
		console.log("error")	;
		}
	
		});
	});
	
	$("#wish").on("click", function(){
		$(this).html("<p class='white'>added to wishlist <span class='glyphicon glyphicon-plus'></span></p>");
		});
	
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){	
			movieId = sessionStorage.getItem("movieId");
			var rootRef = firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId);
			rootRef.on("value", snap =>{
				
				
				var wish = snap.child("wish").val();
				if (wish === "true"){
					$("#wish").html("");
					$("#removeWish").removeClass("hide");
					}
		});
		}
	});
	
	
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){	
			movieId = sessionStorage.getItem("movieId");
					
				$("#removeWish").on("click", function(){	
				firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("wish").child(movieId).remove();
				
				});
			
		}
	});
	
	
});