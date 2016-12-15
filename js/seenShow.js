$( document ).ready(function() {
	
	"use strict";
	
	
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){
			var rootRef = firebase.database().ref().child("users").child(firebaseUser.uid).child("movies").child("seen");
			rootRef.on("child_added", snap =>{
				
				var counter = snap.child("counter").val()
				var movieId = snap.child("movieId").val();
				var moviename = snap.child("moviename").val();
				var poster = snap.child("poster").val();
				var posterPre = "https://image.tmdb.org/t/p/w500";
				
				$("#seenList").append("<div class='col-md-2 col-xs-6'><div class='movieVast'><a href='detail'><img class='posterSize movieId' alt='"+movieId+"' src='"+posterPre+poster + "'/><p class='textVast'>"+ moviename +"</p></a></div></div>");
				$(".col-md-2:has(img[alt=null])").remove();
			});
		}else{
		console.log("error");
		}
	});
});