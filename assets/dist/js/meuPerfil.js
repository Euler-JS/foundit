let todosUtilizadores = [];
var workerSelecionado;
var workerTrabalhosPic;
let worskImg = [];
var simpleExperiencia;
var allL;

//var email
var idUser;
var iAm = false;
const renderTrabalhadores  = function () {

	db.collection("utilizadores").get().then(data =>
	{
		data.docs.forEach(element =>
		{
			//console.log("todosUtilizadores.length");
			const singleUtilizador = element.data();
			todosUtilizadores.push(singleUtilizador);
			console.log(todosUtilizadores.length);
			//console.log('Go '+element.nomeU);
			//$('#progress').show();

		});

		//clickGo();
		//console.log("DFC "+idUser);
		
		
		clickGo(idUser);
	});
}



//console.log("FFF "+user.email);

const aleluia = function (a, p){
	var novaLinha="";
	var o = "#"+a;
	var goo = false;
	/*todosLinks.forEach(element =>
	{
		if(element ==a )
		{
			alert(element+" Apanhei "+a);
		}
	})*/
	//$(o).empty();
	for (var i = 0; i<allL.length-1 ; i++)
	{
		if(a!=allL[i])
		{

			/*
			https://firebasestorage.googleapis.com/v0/b/htmlfirebaseteste1.appspot.com/o/worker4you%2Ftrabalhos%2FkoVTHi0rpQaMrHDwhXJThkjjOlp1%2Fe8a1821d-dd2c-451c-aff9-3f6cdf847c5f?alt=media&token=352ad415-48f3-4581-88a0-93c0d6eefcc7;
			https://firebasestorage.googleapis.com/v0/b/htmlfirebaseteste1.appspot.com/o/worker4you%2Ftrabalhos%2FkoVTHi0rpQaMrHDwhXJThkjjOlp1%2F74627073-39eb-41a2-b034-a320b997c35a?alt=media&token=f703d2f5-e80a-4197-a3d5-3eb1a80a81db;
			https://firebasestorage.googleapis.com/v0/b/htmlfirebaseteste1.appspot.com/o/worker4you%2Ftrabalhos%2FkoVTHi0rpQaMrHDwhXJThkjjOlp1%2F45d7eabe-e86d-4900-83cd-6332ddfc9af2?alt=media&token=bd94b9ad-959f-4ef2-b152-bf669c772cb9;
			https://firebasestorage.googleapis.com/v0/b/htmlfirebaseteste1.appspot.com/o/worker4you%2Ftrabalhos%2FkoVTHi0rpQaMrHDwhXJThkjjOlp1%2F5cbe1aa3-d746-4a8f-8846-c7cad6b3973d?alt=media&token=3687281e-318e-4596-b53e-c6a8c35af365;
			*/
			//workerTrabalhosPic = downloadURL+';'+actual;
			 novaLinha = novaLinha+""+allL[i]+";";
			console.log(novaLinha);

			console.log(allL[i]);
		}
		else
		{
			//$(a).empty();
			//document.getElementById(todosLinks[i]).empty();
			console.log("eh o actual");
		}
		if (i==allL.length-1) 
		{
			
			//alert("Hey "+a);
		}
	}

	//aler("Fimmm "+novaLinha);
			db.collection('utilizadores').doc(workerSelecionado).update({linkTrabalhoU:novaLinha}).then(()=>
     		{
     			console.log("Fotos Actualizado");
     			//document.getElementById(a).innerHTML = "Foto Eliminada";
     			allL=novaLinha.split(";");
     			document.getElementById(a).remove();
     			
     		}).catch(error=>
     		{
     			console.log("Ocorreu um erro");
     			dialog.close();
     		})

	if (goo) {

	
	}
}




const clickGo = function(a){

		workerSelecionado = a;
		//console.log(document.getElementsByTagName("p").value);
		var worklink, experiencia;

		let allWorkslinks = [];
		let allExperiencia = [];
		var alo = "";
		var testando="";
		let perfil = $('');



		worskImg = $('<div class="row  w3-card  w3-white w3-container "> ');
		testando = '<div class="row w3-white w3-container "> ';
		let button_closePerfil = $('<div class="w3-card w3-center w3-container w3-white" style="width:100%;">'+
			'<progress id="uploaderFull" value="0" max="100" style="display:none;width:100%;">0%</progress>'+
				            '<input type="file" id="inputFileFull" multiple="multiple"  accept="image/*" value="uploaderFull"  style="display:none;">'+
				            '<label for="inputFileFull" class="w3-card w3-button" style="color:white; background-color:#f5af09;margin-bottom:5%;">Encontrou Alguma Coisa? Clique Aqui</label>'+
			'</div>');
		let button_closePerfil1 = $('<div class="container">'+
									  '<span onclick="clickClose()" class="closebtn-galeria">&times;</span>'+
									  '<img id="expandedImg-galeria" style="width:100%">'+
									  '<div id="imgtext-galeria"></div>'+
									'</div>');
		let c = $('');

		var find = true;

		//console.log("F "+workerSelecionado+" "+todosUtilizadores.length);
		todosUtilizadores.forEach(element =>{
			//console.log("EL "+element.id);
			//console.log("F "+workerSelecionado);
		if (find) {
		if (workerSelecionado == element.id) {
			
			document.getElementById('progress').style.display = 'none';
			document.getElementById('elementsNavBar').style.visibility = 'visible';
			document.getElementById('statusLoad').innerHTML = "AS Pub";
			iAm = true;


			

						worklink = element.linkTrabalhoU;
						console.log(" Link " +worklink);
						workerTrabalhosPic = worklink;
						experiencia = element.experienciaDeTrabalhoU;
						simpleExperiencia = experiencia;
						allWorkslinks = worklink.split(";");
						allL= allWorkslinks;
						allExperiencia = experiencia.split(";");

						//'<img src="'+allWorkslinks[i]+'" alt="John" class="img-fluid mx-auto d-block" style="height: 250px; width: 250px">'+
						worskImg.append(button_closePerfil);
						
						for (var i = 0; i < allWorkslinks.length-1; i++) {
							const r = allWorkslinks[i];
							const p = i;

							
							let setImg = $('<div class="col-md-4 " id="'+r+'">'+
				              '<div class=" no-gutters border  flex-md-row mb-4 shadow-sm h-md-500 position-relative">'+
				                '<div class="col-auto  d-flex flex-column position-static">'+
				                  '<img src="'+allWorkslinks[i]+'" alt="Sem foto de trabalho" class="img-fluid mx-auto d-block" style="height: auto; width: 100%">'+
				                '</div>'+

				             
				                
				              '</div>'+
				            '</div>');

				            let aleluia0 = $('<div  class="w3-card no-gutters border  flex-md-row mb-4 shadow-sm h-md-500 position-relative  w3-white w3-margin-bottom" style="margin-top:-26px; "> <label><i class="fa fa-trash fa-fw w3-margin-right w3-xlarge w3-text-teal"></i>Apagar</label> </div>');

				            
				            aleluia0.on('click', () =>
							{
								//alert(element.id);
								//alert("0 "+tb);
								chamarApagar(r,p);
								
								
							});


							
				           setImg.append(aleluia0);
								
				            worskImg.append(setImg);
				            
				            
						}


						for (var i = 0; i < allExperiencia.length; i++) {
							
							alo = alo+"<br>"+allExperiencia[i];	
						}

								
						//worskImg.append('</div>');
						testando = testando+"</div>";

						//worskImg.append('</div>');
						c.append(worskImg).append('</div>').append('</div>');

						var pf ;

						if (element.linkPerfil=="") 
						{
							pf = "assets/img/icon/imgAvatar3.png";
						}
						else
						{
							pf = element.linkPerfil;
						}
						
						
						//trash
						perfil= $('<div id="mySidenaverfil" class="sidenaverfil modal-content animate">'+
				  '<div class="w3-margin-top">'+
				  '<h2 style="font-size: 30px; text-align: left; padding: 2px 0;"      class="container">Olá, Bem Vindo '+element.nomeU+'</h2>'+
				  '<div class="w3-row-padding">'+
				    '<div class="w3-third">'+

				      '<div class="w3-white w3-text-grey w3-card-4">'+
				        '<div class="w3-display-container">'+
				          '<img id="perfilTag" src="'+pf+'" style="width:100%" alt="Avatar">'+
				          '<div class="w3-display-bottomleft w3-container w3-text-black">'+
				            '<h2 id="hNomePerfil">'+element.nomeU+'</h2>'+
				            '<progress id="uploader" value="0" max="100" style="display:none;">0%</progress>'+
				            '<input type="file" id="inputFile" accept="image/*" value="upload" style="display:none;">'+
				            '<label for="inputFile" class="w3-card w3-button" style="color:white; background-color:#f5af09">Escolher Foto</label>'+
				          '</div>'+
				        '</div>'+
				      '</div>'+
				      '<br>'+
				    '</div>'+

				    '<div class="w3-twothird">'+
				      '<div class="w3-container w3-card w3-white w3-margin-bottom">'+
				      '<h2 class="w3-text-grey w3-padding-16 alltext"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Detalhes do Perfil</h2>'+
				      '<div class="w3-container">'+

				          '<p class="alltext" ><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i><label id="editLNome">'+element.nomeU+'</label><label id="lblCNome" for="show-dialog"><i class="fa fa-edit fa-fw w3-margin-left w3-large w3-text-teal" ></i></label></p>'+
				          
				          '<p class="alltext"><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i><label id="editLLocal">'+element.localU+'</label><label id="lblCLocal" for="show-dialogLocal"><i class="fa fa-edit fa-fw w3-margin-left w3-large w3-text-teal"></i></label></p>'+
				          '<p class="alltext"><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>'+element.emailU+'</p>'+
				          '<p class="alltext"><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i><label id="editLNumero">'+element.numeroU+'</label><label id="lblCNumero" for="show-dialogNumero"><i class="fa fa-edit fa-fw w3-margin-left w3-large w3-text-teal"></i></label></p>'+
				          '<hr>'+  
				          '<br>'+
				        '</div>'+
				        '<h2 class="w3-text-grey w3-padding-16 alltext"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Descrição<label id="lblCExperiencia" for="show-dialogExperiencia"><i class="fa fa-edit fa-fw w3-margin-left w3-large w3-text-teal"></i></label></h2>'+
				        '<div class="w3-container">'+
				          '<p class="alltext" id="editLExperiencia">Trabalhou com :'+alo+'</p>'+
				          '<hr>'+
				        
				      '</div>');
				        

						//$('#gridImgWork').append(worskImg);
						perfil.append('<div class=" w3-white w3-card w3-row-padding w3-container" style="margin-left:14px; margin-right:14px;" id="gridImgWork">'+
				        '<h2 class="w3-text-grey w3-padding-16 alltext">'+
				        '<i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Fotos de Trabalhos</h2></div></div></div><div class="w3-twothird">');
						perfil.append(worskImg);
						
						$('#idPerfil').append(perfil);


						
				  		

				  	}

				  	if (iAm) {
				  		document.getElementById("mensagemU").innerHTML = "Olá, Bem Vindo "+element.nomeU;
				  		document.getElementById('beWorker').style.display='none';

				  		$("#lblCNome").click(function(){

				  			console.log("clicouEditar");
				  			chamarNome();
				  			//document.getElementById('show-dialog').click;
				  			
				  		});

				  		$("#lblCLocal").click(function(){

				  			console.log("Local");
				  			chamarLocal();
				  		});

				  		$("#lblCNumero").click(function(){

				  			console.log("clicouNumero");
				  			chamarNumero();
				  		});

				  		$("#lblCExperiencia").click(function(){

				  			

				  			
				  			console.log(simpleExperiencia);
				  			chamarExperiencia(simpleExperiencia);
				  		});


				  		
				  		var uploader = document.getElementById('uploader');
					  	var fileButton =         document.getElementById('inputFile');

					  	var uploaderFull = document.getElementById('uploaderFull');
					  	var fileButtonFull =         document.getElementById('inputFileFull');

					  	fileButton.addEventListener('change', function(e){
					  	var file = e.target.files[0];


					  	//var file = ...

						// Create the file metadata
						var metadata = {
						  contentType: 'image/jpeg'
						};

						var storageRef = firebase.storage().ref('worker4you/perfil/');
									  	//var task = storageRef.put(file);

						//var storage = firebase.storage();

						// Upload file and metadata to the object 'images/mountains.jpg'
						var uploadTask = storageRef.child(workerSelecionado).put(file, metadata);

						// Listen for state changes, errors, and completion of the upload.
						uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
						  function(snapshot) {
						    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
						    document.getElementById('uploader').style.display='block';
						    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						    uploader.value = progress;
						    console.log('Upload is ' + progress + '% done');
						    switch (snapshot.state) {
						      case firebase.storage.TaskState.PAUSED: // or 'paused'
						        console.log('Upload is paused');
						        break;
						      case firebase.storage.TaskState.RUNNING: // or 'running'
						        console.log('Upload is running');
						        break;
						    }
						  }, function(error) {

						  // A full list of error codes is available at
						  // https://firebase.google.com/docs/storage/web/handle-errors
						  switch (error.code) {
						    case 'storage/unauthorized':
						      // User doesn't have permission to access the object
						      console.log("User doesn't have permission to access the object");
						      break;

						    case 'storage/canceled':
						      // User canceled the upload
						      console.log("User canceled the upload");
						      break;

						    //...

						    case 'storage/unknown':
						      console.log("Unknown error occurred, inspect error.serverResponse");
						      break;
						  }
						}, function() {
						  // Upload completed successfully, now we can get the download URL
						  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
						  	document.getElementById('uploader').style.display='none';
						    console.log('File available at', downloadURL);
						    updatePic(downloadURL);
						  });
						});
					  	//var storageRef = firebase.storage().ref('agora/img/'+file.name);
					  	//var task = storageRef.put(file);
					  	/*task.on('state_changed', function progress(snapshot) {
					    var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
					    uploader.value = percentage;

						  }, function error(err) {


						  },function complete() {

						  });*/
						});




					  	
						fileButtonFull.addEventListener('change', function(e){
							

							console.log("Tamanho "+e.target.files.length);

						//for(var i =0; i< e.target.files.length; i++){	
					  	
					  	var file = e.target.files[0];

					  	newU(file,workerTrabalhosPic, e, 2);


					  	//var file = ...

						// Create the file metadata
						
						//}


					
					  	//var storageRef = firebase.storage().ref('agora/img/'+file.name);
					  	//var task = storageRef.put(file);
					  	/*task.on('state_changed', function progress(snapshot) {
					    var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
					    uploader.value = percentage;

						  }, function error(err) {


						  },function complete() {

						  });*/
						});

						find = false;



						
				  	}
				  	else
				  	{
				  		document.getElementById("mensagemU").innerHTML = "Olá, Você não é um Worker";
				  		document.getElementById('beWorker').style.display='block';


				  	}

				  }
				  
  		

	});


		//document.getElementById('id01').style.display='block';
		//document.getElementById("mySidenaverfil").style.width = "100%";
}



firebase.auth().onAuthStateChanged(function(user)
{

				if(user)
				{
					  //renderTrabalhadores();
					  var displayName = user.displayName;
			          var email = user.email;
			          var emailVerified = user.emailVerified;
			          var photoURL = user.photoURL;
			          var isAnonymous = user.isAnonymous;
			          var uid = user.uid;
			          var providerData = user.providerData;

			          idUser = user.uid;
			          emailUser = user.email;
			          
			          //console.log("vvv "+todosUtilizadores.length);

			          //clickGo(idUser);

					          if (emailVerified == false) {
					          	//alert("email  nao verificado");

					          	/*user.sendEmailVerification().then(function() {
								  // Email sent.
								  console.log("Enviado");
								  alert("Enviado");
								}).catch(function(error) {
								  // An error happened.
								  console.log("Erro no envio");
								  alert("Nao enviado");


								});*/
								//console.log("Nao verificado");
								document.getElementById("mensagemU").innerHTML = "Olá, por favor confirme a criação da sua conta.<br>Se já fez a confirmação da conta, por favor faça um Refresh/Actualize a página.";
								document.getElementById('sendVerificationEmail').style.display = 'block';
								
								


					          }
					          else {
					          	console.log("verificado");
					          	document.getElementById('sendVerificationEmail').style.display = 'none';
					          	renderTrabalhadores();
					          	//document.getElementById('sendVerificationEmail').style = 'none';
					          	//document.getElementById('beWorker').style.display='block';
								//document.getElementById('idPerfil').style.display='none';

					          	//document.getElementById('idPerfil').style.display='block';
					          }
					//User is signed in
						//alert("Online" +user.email);

					}
				else
					{
						//No user is signed in
						alert("Por favor faça login");
					}
		
});


function creat (){
		

		var user = firebase.auth().currentUser;
		var idU = user.uid;

		var provincia = document.getElementById("Alcaldia").value;
    	var cidade = document.getElementById("colonia").value;



    	if (cidade!="" && provincia!="" && $('#nomeU').val()!="" && $('#numeroU').val() && $('#trabalhoU').val()!="") 
    	{

    		var n = "";
			    	if ($('#apelidoU').val() !="") 
			    	{
			    			n = $('#apelidoU').val();
			    	}

		const newUser =
			    {
			    	
			        nomeU : $('#nomeU').val()+" "+n,
			        numeroU : $('#numeroU').val(),
			        id :user.uid,
			        localU : provincia+", "+cidade,
			        trabalhoU : $('#trabalhoU').val(),
			        experienciaDeTrabalhoU : $('#experienciaDeTrabalhoU').val(),
			        emailU :user.email,
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

			    

			    console.log($('#nomeU').val()+" "+$('#apelidoU'));
			    console.log($('#numeroU').val());
			    console.log($('#provinciaU').val()+", "+$('#cidadeU').val());
			    console.log($('#trabalhoU').val());
			    console.log($('#experienciaDeTrabalhoU').val());
			    console.log(user.email);
			    console.log("UID "+idU);

			    db.collection('utilizadores').doc(idU).set(newUser).then(() => 
			    {
			        console.log('User Added');
			        document.getElementById('beWorker').style.display='none';
			        renderTrabalhadores();
			        
			    
			    }).catch(error =>{
			        console.log('Ocorreu um erro', e);
			    })
	}else {
	alert("Por favor preencha os campos obrigatórios.");
}
}



	$("#cadastrarWorker").click(

			function()
			{

				//alert("dg");
				creat();

			});


	$("#sendVerificationEmail").click(

			function()
			{

								firebase.auth().currentUser.sendEmailVerification().then(function() {
									  // Email sent.
									  console.log("Enviado");
									  alert("Enviado um email para sua conta : "+firebase.auth.currentUser.email);
									}).catch(function(error) {
									  // An error happened.
									  console.log("Erro no envio");
									  alert("Por favor verifique a sua caixa de email.");


								});

			});




//Alterar Foto de Perfil

/*function fotoPerfil()
{
	// File or Blob named mountains.jpg
		//var file = ...

		// Create the file metadata
		var metadata = {
		  contentType: 'image/jpeg'
		};

		// Upload file and metadata to the object 'images/mountains.jpg'
		var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

		// Listen for state changes, errors, and completion of the upload.
		uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
		  function(snapshot) {
		    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
		    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		    console.log('Upload is ' + progress + '% done');
		    switch (snapshot.state) {
		      case firebase.storage.TaskState.PAUSED: // or 'paused'
		        console.log('Upload is paused');
		        break;
		      case firebase.storage.TaskState.RUNNING: // or 'running'
		        console.log('Upload is running');
		        break;
		    }
		  }, function(error) {

		  // A full list of error codes is available at
		  // https://firebase.google.com/docs/storage/web/handle-errors
		  switch (error.code) {
		    case 'storage/unauthorized':
		      // User doesn't have permission to access the object
		      break;

		    case 'storage/canceled':
		      // User canceled the upload
		      break;

		    ...

		    case 'storage/unknown':
		      // Unknown error occurred, inspect error.serverResponse
		      break;
		  }
		}, function() {
		  // Upload completed successfully, now we can get the download URL
		  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
		    console.log('File available at', downloadURL);
		  });
		});
}*/


function updatePic(url)
{
	// Set the "capital" field of the city 'DC'
		
		 db.collection('utilizadores').doc(workerSelecionado).update({linkPerfil:url})
	    .then(()=>
	    {
	        console.log('Foto perfil Actualizada com Sucesso');
	        document.getElementById('perfilTag').src=url;
	        //renderTrabalhadores();
	        //toggleTarefaArray(element);

	    }).catch(error=>
	        {
	            console.log('Ocorreu um erro',error);
	        })
}



function updateTrabalhoPic(url, actual)
{

	var g = false;
	db.collection('utilizadores').doc(workerSelecionado).update({linkTrabalhoU:url+';'+actual});

	    

}

function broofa() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

function newU(file, actual,e, contador)
{
	
	var metadata = {
						  contentType: 'image/jpeg'
						};

						var storageRef = firebase.storage().ref('worker4you/trabalhos/');
									  	//var task = storageRef.put(file);

						//var storage = firebase.storage();

						// Upload file and metadata to the object 'images/mountains.jpg'
						var uploadTask = storageRef.child(workerSelecionado+'/'+broofa()).put(file, metadata);

						// Listen for state changes, errors, and completion of the upload.
						uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
						  function(snapshot) {
						    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
						    document.getElementById('uploaderFull').style.display='block';
						    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						    uploaderFull.value = progress;

						    console.log('Upload is ' + progress + '% done');
						    switch (snapshot.state) {
						      case firebase.storage.TaskState.PAUSED: // or 'paused'
						        console.log('Upload is paused');
						        break;
						      case firebase.storage.TaskState.RUNNING: // or 'running'
						        console.log('Upload is running');
						        break;
						    }
						  }, function(error) {

						  // A full list of error codes is available at
						  // https://firebase.google.com/docs/storage/web/handle-errors
						  switch (error.code) {
						    case 'storage/unauthorized':
						      // User doesn't have permission to access the object
						      console.log("User doesn't have permission to access the object");
						      break;

						    case 'storage/canceled':
						      // User canceled the upload
						      console.log("User canceled the upload");
						      break;

						    case 'storage/unknown':
						      console.log("Unknown error occurred, inspect error.serverResponse");
						      break;
						  }
						}, function() {
						  // Upload completed successfully, now we can get the download URL
						  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
						  	

						    db.collection('utilizadores').doc(workerSelecionado).update({linkTrabalhoU:downloadURL+';'+actual}).
						    then(()=>
						    		{
						    			workerTrabalhosPic = downloadURL+';'+actual;
									    document.getElementById('uploaderFull').style.display='none';
									    console.log('File available at', downloadURL);

									    let setImg = $('<div class="col-md-4">'+
							              '<div class=" no-gutters border  flex-md-row mb-4 shadow-sm h-md-500 position-relative">'+
							                '<div class="col-auto  d-flex flex-column position-static">'+
							                  '<img src="'+downloadURL+'" alt="Sem foto de trabalho" class="img-fluid mx-auto d-block" style="height: auto; width: 100%">'+
							                '</div>'+

							                
							              '</div>'+
							            '</div>');

				           

				            			worskImg.append(setImg);	

									    if (contador <= e.target.files.length) 
									    {
									    	console.log(contador+" WWWWWWWWWWW");
									    	var file = e.target.files[contador-1];
									    	contador = contador + 1;
					  						newU(file,workerTrabalhosPic, e, contador);
									    	
									    }
						    		}


						    	);
						    
						    //new updateTrabalhoPic(downloadURL, workerTrabalhosPic);
						  });
						});

}

//Actualizar Nome

function chamarNome()
{

var dialog = document.querySelector('#dialogNome');
    var showDialogButton = document.querySelector('#show-dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
      dialog = null;
    });

     dialog.querySelector('.saveNome').addEventListener('click', function() {

     	var nome1 = $('#nome1A').val();
     	var nome2 = $('#nome2A').val(); 

     	if (nome1!="") 
     	{

     		dialog.close();
     	var fName = nome1+" "+nome2;

     	db.collection('utilizadores').doc(workerSelecionado).update({nomeU:fName}).then(()=>
     		{
     			console.log("Nome Actualizado");
     			document.getElementById("editLNome").innerHTML = fName;
     			document.getElementById("hNomePerfil").innerHTML = fName;
     			dialog.close();
     			
     		}).catch(error=>
     		{
     			console.log("Ocorreu um erro");
     			
     		})

     	}else
     	{
     		alert("Por favor, digite o teu nome");
     	}
      
    });



 }

//Fim Actualizar nome


//Apagar Foto
function chamarApagar(r,p)
{

var dialog = document.querySelector('#dialogApagar');
    
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    
      dialog.showModal();
    
    dialog.querySelector('.closeApagar').addEventListener('click', function() {
      dialog.close();
      dialog = null;
    });

     dialog.querySelector('.saveApagar').addEventListener('click', function() {
     	dialog.close();
     	aleluia(r,p);

     	
      
    });



 }

 //Fim




//Actualizar Local

function chamarLocal()
{
var dialog = document.querySelector('#dialogLocal');
    var showDialogButton = document.querySelector('#show-dialogLocal');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.closeLocal').addEventListener('click', function() {
      dialog.close();

    });


     dialog.querySelector('.saveLocal').addEventListener('click', function() {

     	//var provincia1 = $('#local1A').val();
     	//var cidade2 = $('#local2A').val(); 

     	var provincia = document.getElementById("AlcaldiaP").value;
    	var cidade = document.getElementById("coloniaP").value;


     	var fLocal = provincia+", "+cidade;

     	if (cidade!="" && provincia!="") 
     	{
     		dialog.close();

     	console.log("Local Sucesso");
     	

     	db.collection('utilizadores').doc(workerSelecionado).update({localU:fLocal}).then(()=>
     		{
     			console.log("Local Actualizado");
     			document.getElementById("editLLocal").innerHTML = fLocal;
     			
     			dialog.close();
     		}).catch(error=>
     		{
     			console.log("Ocorreu um erro");
     			
     		})

     	}else
     	{
     		alert("Por favor Preacha os campos Obrigatórios")
     	}
      
    });



     

 }

//Fim Actualizar Local   

//Actualizar numero

function chamarNumero()
{
var dialog = document.querySelector('#dialogNumero');
    var showDialogButton = document.querySelector('#show-dialogNumero');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.closeNumero').addEventListener('click', function() {
      dialog.close();

    });


     dialog.querySelector('.saveNumero').addEventListener('click', function() {

     	var numero = $('#numero1A').val();
     	
     	if (numero!="") {
     	
     	console.log("Numero Sucesso");
     	dialog.close();
     	

     	db.collection('utilizadores').doc(workerSelecionado).update({numeroU:numero}).then(()=>
     		{
     			console.log("Numero Actualizado");
     			document.getElementById("editLNumero").innerHTML = numero;
     			
     			
     		}).catch(error=>
     		{
     			console.log("Ocorreu um erro");
     			dialog.close();
     		})
     	}else
     	{
     		alert("Por favor digite o número de celular.")
     	}
      
    });

     

 }



 function chamarExperiencia(antigaExperiencia)
{
var dialog = document.querySelector('#dialogExperiencia');
    var showDialogButton = document.querySelector('#show-dialogExperiencia');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
      
    });
    dialog.querySelector('.closeExperiencia').addEventListener('click', function() {
      dialog.close();

    });

   /* var el = document.querySelector('#Experiencia1A');
		var tf = mdc.textField.MDCTextField(el);
		el.value = 'foo';*/

    $('#Experiencia1A').val(antigaExperiencia);


     dialog.querySelector('.saveExperiencia').addEventListener('click', function() {

     	var experiencia = $('#Experiencia1A').val();
     	

     	
     	console.log("Experiencia Sucesso");
     	

     	db.collection('utilizadores').doc(workerSelecionado).update({experienciaDeTrabalhoU:experiencia}).then(()=>
     		{
     			console.log("Experiencia Actualizado");
     			
     			simpleExperiencia = experiencia;
     			novaEx(simpleExperiencia.split(";"));
     			
     			dialog.close();
     		}).catch(error=>
     		{
     			console.log("Ocorreu um erro");
     			dialog.close();
     		})
      
    });

     

 }

 function novaEx(ar)
 {
 	var ex="";
 	for (var i = 0; i < ar.length; i++) {
							
							ex = ex+"<br>"+ar[i];	
						}

						document.getElementById("editLExperiencia").innerHTML = ex;
 }

//Fim Actualizar numero  




