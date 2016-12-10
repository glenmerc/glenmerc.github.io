$( document ).ready(function() {
	
	// Initialize Firebase
	var config = {
   	 	apiKey: "AIzaSyBQT460DP2_mPN0E_s5Ike9F-XvbGNGVAI",
    	authDomain: "morelikeit-1477411089338.firebaseapp.com",
   		databaseURL: "https://morelikeit-1477411089338.firebaseio.com",
    	storageBucket: "morelikeit-1477411089338.appspot.com",
   		 messagingSenderId: "848495272237"
  	};
	
  	firebase.initializeApp(config);
	
	//verkrijg de values van loginscherm
	const txtEmail = document.getElementById("txtEmail");
	const txtPassword = document.getElementById("txtPassword");
	const btnLogin = document.getElementById("btnLogin");
	const btnSignUp = document.getElementById("btnSignUp");
	const btnLogout = document.getElementById("btnLogout");
	
	//voeg login event toe
	btnLogin.addEventListener("click", e =>{
		//verkrijg de values
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//sign-in
		const promise = auth.signInWithEmailAndPassword(email,pass);
		promise.catch(e => console.log(e.message));
		});
	
	//voeg sign up event toe
	btnSignUp.addEventListener("click", e =>{
		//verkrijg de values
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//sign up
		const promise = auth.createUserWithEmailAndPassword(email,pass);
		promise.catch(e => console.log(e.message));
		});
	
	//voeg log out event toe
	btnLogout.addEventListener("click", e =>{
		//verkrijg de values
		firebase.auth().signOut();
		});
	
	//realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){
			console.log(firebaseUser);
			$("#btnLogout").removeClass("hide");
			$("#btnLogin").addClass("hide");
			$("#btnSignUp").addClass("hide");
			$("#btnFacebook").addClass("hide");
			$("#btnGoogle").addClass("hide");
			$("#btnGithub").addClass("hide");
			$("#txtEmail").addClass("hide");
			$("#txtPassword").addClass("hide");
			$("#loginHeader").addClass("hide");
			if (firebaseUser.displayName){
				$("#logged-in").html("Logged in as "+firebaseUser.displayName+"");
			}else{
				$("#logged-in").html("Logged in as "+firebaseUser.email+"");
			}
		}else{
			console.log("not logged in");
			$("#btnLogout").addClass("hide");
			$("#btnLogin").removeClass("hide");
			$("#btnSignUp").removeClass("hide");
			$("#btnFacebook").removeClass("hide");
			$("#btnGoogle").removeClass("hide");
			$("#btnGithub").removeClass("hide");
			$("#txtEmail").removeClass("hide");
			$("#txtPassword").removeClass("hide");
			$("#loginHeader").removeClass("hide");
			$("#logged-in").html("LOGIN <span class='caret'></span>");
		}
	});
	
	
	var provider = new firebase.auth.FacebookAuthProvider();
	
	$("#btnFacebook").click(function(){
		
		firebase.auth().signInWithPopup(provider).then(function(result) {
 			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
  			var token = result.credential.accessToken;
  			// The signed-in user info.
  			var user = result.user;
  			// ...
		}).catch(function(error) {
  			// Handle Errors here.
  			var errorCode = error.code;
  			var errorMessage = error.message;
  			// The email of the user's account used.
  			var email = error.email;
  			// The firebase.auth.AuthCredential type that was used.
  			var credential = error.credential;
  			// ...
		});
	});
	
	
	var provider1 = new firebase.auth.GoogleAuthProvider();
	$("#btnGoogle").click(function(){
		
		firebase.auth().signInWithPopup(provider1).then(function(result) {
  			// This gives you a Google Access Token. You can use it to access the Google API.
  			var token = result.credential.accessToken;
  			// The signed-in user info.
  			var user = result.user;
  			// ...
		}).catch(function(error) {
  			// Handle Errors here.
  			var errorCode = error.code;
  			var errorMessage = error.message;
  			// The email of the user's account used.
  			var email = error.email;
  			// The firebase.auth.AuthCredential type that was used.
  			var credential = error.credential;
  			// ...
		});
	});
	
	
	var provider2 = new firebase.auth.GithubAuthProvider();
	$("#btnGithub").click(function(){
		
		firebase.auth().signInWithPopup(provider2).then(function(result) {
  			// This gives you a Google Access Token. You can use it to access the Google API.
  			var token = result.credential.accessToken;
  			// The signed-in user info.
  			var user = result.user;
  			// ...
		}).catch(function(error) {
  			// Handle Errors here.
  			var errorCode = error.code;
  			var errorMessage = error.message;
  			// The email of the user's account used.
  			var email = error.email;
  			// The firebase.auth.AuthCredential type that was used.
  			var credential = error.credential;
  			// ...
	});
	
	
	});
});