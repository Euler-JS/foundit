//alert("dg");
var idUser = "", emailUser="";
firebase.auth().onAuthStateChanged(function(user)
{

	
	 

          
				if(user)
				{
					  var displayName = user.displayName;
			          var email = user.email;
			          var emailVerified = user.emailVerified;
			          var photoURL = user.photoURL;
			          var isAnonymous = user.isAnonymous;
			          var uid = user.uid;
			          var providerData = user.providerData;

			          idUser = user.uid;
			          emailUser = user.email;
 
					          if (emailVerified == false) {
					          	alert("email  nao verificado");

					          	/*user.sendEmailVerification().then(function() {
								  // Email sent.
								  console.log("Enviado");
								  alert("Enviado");
								}).catch(function(error) {
								  // An error happened.
								  console.log("Erro no envio");
								  alert("Nao enviado");
								});*/
					          }
					          else {
					          	alert("verificado");
					          }
					//User is signed in
						alert("Login : " +user.email);

					}
				else
					{
						//No user is signed in
						alert("No login");
					}
		
});


$("#criarConta1").click(

			function()
			{

				//alert("dg");


				var email = $('#emailU').val();
				var password = $('#passwordU').val();

				//email = "joaoa000N13@gmail.com";
				//password = "joaojoao";

				const promise = firebase.auth().createUserWithEmailAndPassword(email, password);

				promise.then(user => {
					 if (user) {
					 	console.log("indo criar conta");
					 	//console.log(idUser+" 00 "+emailUser);
					 	
						creat();
					}
					else
					{
						console.log("Conta nao Criada");
					}
				}).catch(error => console.log);

				


				//creat();	
				

				


			});



/*$('#criarConta').click((event) =>{

			event.preventDefault();
				


				const tarefa =
    {
        name : "Aloo",
        isCompleted : false,
        id : "5445187456145"
    }
    
    db.collection('listaTarefas').doc("0054558456").set(tarefa).then(() => 
    {
        console.log('Tarefa adicionada com Sucesso');
       
    
    }).catch(error =>{
        console.log('Ocorreu um erro', e);
    })*/
    


				//var email = $("#emailU");
				//var password = $("#passwordU");

				/*email = "euler001@gmail.com";
				password = "joaojoao";

				firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  			// Handle Errors here.
	  			var errorCode = error.code;
	  			var errorMessage = error.message;
	  			// ...

	  			var user = firebase.auth().currentUser;*/
	  			//user.uid
	  			


				
    
			
			//})

		







	$("#sair").click(
	function()
	{
		firebase.auth().signOut();
	});




	$('.submit-tarefa').click((event) => {
    event.preventDefault();
    const id = broofa();
    
    const tarefa =
    {
        name : "rklnghdgh",
        isCompleted : false,
        id : id
    }

    console.log(id);
    
    db.collection('listaTarefas').doc(id).set(tarefa).then(() => 
    {
        console.log('Tarefa adicionada com Sucesso');
        
    
    }).catch(error =>{
        console.log('Ocorreu um erro', e);
    })
    
})


	function creat (){
		

		var user = firebase.auth().currentUser;
		var idU = user.uid;
		const newUser =
			    {
			        nomeU : $('#nomeU').val(),
			        numeroU : $('#numeroU').val(),
			        id : idU,
			        localU : $('#provinciaU').val()+", "+$('#cidadeU').val(),
			        trabalhoU : $('#trabalhoU').val(),
			        experienciaDeTrabalhoU : $('#experienciaDeTrabalhoU').val(),
			        emailU : $('#emailU').val(),
			        linkPerfil : "",
			        linkTrabalhoU :"" 


			        /* nomeU : "Joao",
			        numeroU : "846151124",
			        id : "000",
			        localU : "Sofala, Cidade Maputo",
			        trabalhoU : "Programador",
			        experienciaDeTrabalhoU : "Android App; WebApp",
			        emailU : "joaoalbertojose96@gmail.com",
			        linkPerfil : "",
			        linkTrabalhoU : ""*/

			    }

			    

			    console.log($('#nomeU').val());
			    console.log($('#numeroU').val());
			    console.log($('#provinciaU').val()+", "+$('#cidadeU').val());
			    console.log($('#trabalhoU').val());
			    console.log($('#experienciaDeTrabalhoU').val());
			    console.log($('#emailU').val());
			    console.log("UID "+idU);

			    db.collection('utilizadores').doc(idU).set(newUser).then(() => 
			    {
			        console.log('User Added');
			        
			    
			    }).catch(error =>{
			        console.log('Ocorreu um erro', e);
			    })
	}


	$("#c").click((event) =>{
		event.preventDefault();

		var numeroU = "870041389";

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

			    db.collection('utilizadores').doc(numeroU).set(newUser).then(() => 
			    {
			        console.log('User Added');
			        
			    
			    }).catch(error =>{
			        console.log('Ocorreu um erro', e);
			    })

	})


	function broofa() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
