//alert("dg");

firebase.auth().onAuthStateChanged(function(user)
{

	alert("dg");
	 

          
				if(user)
				{
					  var displayName = user.displayName;
			          var email = user.email;
			          var emailVerified = user.emailVerified;
			          var photoURL = user.photoURL;
			          var isAnonymous = user.isAnonymous;
			          var uid = user.uid;
			          var providerData = user.providerData;

					          if (emailVerified == false) {
					          	alert("email  nao verificado");

					          	user.sendEmailVerification().then(function() {
								  // Email sent.
								  console.log("Enviado");
								  alert("Enviado");
								}).catch(function(error) {
								  // An error happened.
								  console.log("Erro no envio");
								  alert("Nao enviado");
								});
					          }
					          else {
					          	alert("verificado");
					          }
					//User is signed in
						alert("Login");

					}
				else
					{
						//No user is signed in
						alert("No login");
					}
		
});


		$("#login").click(

			function()
			{


			email = "joao@gmail.com";
			password = "joaojoao";


			firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // ...
			});

		});


		$("#criarConta").click(

			function()
			{

				alert("dg");


				var email = $("#emailU");
				var password = $("#passwordU");

				email = "joaoalbertojose96@gmail.com";
				password = "joaojoao";

				firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  			// Handle Errors here.
	  			var errorCode = error.code;
	  			var errorMessage = error.message;
	  			// ...

	  			var user = firebase.auth().currentUser;
	  			//user.uid
	  			const newUser =
			    {
			        /*nomeU : $('#nomeU').val(),
			        numeroU : $('#nomeU').val(),
			        id : user.uid,
			        localU : $('#provinciaU')+", "+$("#cidadeU"),
			        trabalhoU : $("#trabalhoU"),
			        experienciaDeTrabalhoU : $("#experienciaDeTrabalhoU"),
			        emailU : $("#emailU"),
			        linkPerfil : "",
			        linkTrabalhoU : ""*/


			         nomeU : "Joao",
			        numeroU : "846151124",
			        id : "dfsdfsd011",
			        localU : "Sofala, Cidade Maputo",
			        trabalhoU : "Programador",
			        experienciaDeTrabalhoU : "Android App; WebApp",
			        emailU : "joaoalbertojose96@gmail.com",
			        linkPerfil : "",
			        linkTrabalhoU : ""

			    }

			    db.collection('utilizadores').doc(user.uid).set(newUser).then(() => 
			    {
			        console.log('User Added');
			        
			    
			    }).catch(error =>{
			        console.log('Ocorreu um erro', e);
			    })

				
    
			})


			});





	  			/*firebase.auth().currentUser.sendEmailVerification().then(function() {
				        // Email Verification sent!
				        // [START_EXCLUDE]
				        alert('Email Verification Sent!');
				        // [END_EXCLUDE]
				      });
				});*

				

		})}

			

		);


		/*function sendEmailVerification() {
				      // [START sendemailverification]
				      firebase.auth().currentUser.sendEmailVerification().then(function() {
				        // Email Verification sent!
				        // [START_EXCLUDE]
				        alert('Email Verification Sent!');
				        // [END_EXCLUDE]
				      });
				      // [END sendemailverification]
				    
		}*/


			/*const logIn = function()
			{

			
			//Nova conta
			$("#singUp")
			{
				alert("sdad");
				var email = "euler01@gmail.com";
				var password = "joaojoao";

				firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  			// Handle Errors here.
	  			var errorCode = error.code;
	  			var errorMessage = error.message;
	  			alert("sdad");
	  			// ...
				});
			}
			}*/

logIn();


$("#singOutBtn").click(
	function()
	{
		firebase.auth().signOut();
	});



/*$("#loginBtn").click(
		function()
		{
			/*var email = $("#loginemail").val();
			var password = $("#loginpassword").val();

			
		}
	);

var user = firebase.auth().currentUser;*/