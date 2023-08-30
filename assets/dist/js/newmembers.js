let todosUtilizadores = [];
var workerSelecionado;
var workerTrabalhosPic;
let worskImg = [];
var simpleExperiencia;
var allL;
var idMember;


//var email
var idUser;
var iAm = false;
document.getElementById('formReg').style.display='block';
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
	for (var i = 0; i<allL.length-1 ; i++)
	{
		if(a!=allL[i])
		{
			 novaLinha = novaLinha+""+allL[i]+";";
		}
	}

			db.collection('utilizadores').doc(workerSelecionado).update({linkTrabalhoU:novaLinha}).then(()=>
     		{
     			console.log("Fotos Actualizado");
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

			        //   alert("Online");
								 	
								 	
								 	document.getElementById('formReg').style.display='block';
			          
					}
				else
					{
						//No user is signed in
						alert("Por favor faça login");
					}
		
});

const limpar = function()
    		{
    			document.getElementById("nomeU").value = '';
    			document.getElementById("apelidoU").value = '';
    			document.getElementById("numeroU").value = '';
    			document.getElementById("trabalhoU").value = '';
    			document.getElementById("experienciaDeTrabalhoU").value = '';
    			document.getElementById("Alcaldia").value = '';
    			document.getElementById("colonia").value = '';
    		}


function creat (){
		

		var user = firebase.auth().currentUser;
		//var idU = user.uid;

		
		var provincia = document.getElementById("Alcaldia").value;
    	var cidade = document.getElementById("colonia").value;


    	var idC = ""+Math.floor(Date.now() / 1000);

			    
			    

    	if (cidade!="" && provincia!="" && $('#nomeU').val()!="" && $('#numeroU').val() && $('#trabalhoU').val()!="") 
    	{

    		var n = "";
			    	if ($('#apelidoU').val() !="") 
			    	{
			    			n = $('#apelidoU').val();
			    	}

			var nCompleto = $('#nomeU').val()+" "+n;
			idMember = idC+nCompleto;

		const newUser =
			    {
			    	
			        nomeU : nCompleto,
			        numeroU : $('#numeroU').val(),
			        id :idMember,
			        localU : provincia+", "+cidade,
			        //localU : "Sofala, Beira",
			        trabalhoU : $('#trabalhoU').val(),
			        experienciaDeTrabalhoU : $('#experienciaDeTrabalhoU').val(),
			        emailU :user.email,
			        linkPerfil : "",
			        linkTrabalhoU :"" 

			    }
			     

			    db.collection('utilizadores').doc(idMember).set(newUser).then(() => 
			    {
			        alert("Item adicionado");
			        
			    
			    }).catch(error =>{
			        console.log('Ocorreu um erro', error);
			        alert("Ocorreu um erro");
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
									  console.log("Enviado");
									  alert("Enviado um email para sua conta : "+firebase.auth.currentUser.email);
									}).catch(function(error) {
									  alert("Por favor verifique a sua caixa de email.");
								});

			});






function updatePic(url)
{
	// Set the "capital" field of the city 'DC'
		
		 db.collection('utilizadores').doc(idMember).update({linkPerfil:url})
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
	db.collection('utilizadores').doc(idMember).update({linkTrabalhoU:url+';'+actual});

	    

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
						var uploadTask = storageRef.child(idMember+'/'+broofa()).put(file, metadata);

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
						  	

						    db.collection('utilizadores').doc(idMember).update({linkTrabalhoU:downloadURL+';'+actual}).
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

				           

				            			$('#workImg').append(setImg);	

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


//Foto


const loginReg = function()
{
		var email = $('#email').val();
		var password = $('#password').val();

		const promise  = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Passord errada.');
          } else {
            alert(errorMessage);
          }
          console.log(error);


          //document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });


        promise.then(user => {
								 if (user) {
								 	console.log("logIn");
								 	// alert("Online");
								 	//console.log(idUser+" 00 "+emailUser);
								 	
								 	
								 	//$("#formLogin").remove();
								 	document.getElementById('formReg').style.display='block';
								 	

								 	
								}
								else
								{
									alert("Ocorreu um erro");
									//console.log("No Login");
								}
		}).catch(error => console.log);
	
}

// ----------------------------------------------Add Item ---------------------------------------------

const lostItemForm = document.getElementById("lostItemForm");
const mainPhotoPreview = document.getElementById("mainPhotoPreview");
const otherPhotosPreview = document.getElementById("selectedPhotosPreview");
const selectedOtherPhotos = [];

// Adicionar item
lostItemForm.addEventListener("submit", async function(event) {
    event.preventDefault();
	const timestamp = firebase.firestore.FieldValue.serverTimestamp();
	const otherPhotos = document.getElementById("otherPhotos");
	const itemName = document.getElementById("itemName").value;
    const itemLocation = document.getElementById("itemLocation").value;
	const itemId = generateUniqueId();
   // Obtém o arquivo da imagem principal
   const mainPhotoFile = mainPhoto.files[0];

   // Obtém os arquivos das outras fotos
   const otherPhotoFiles = Array.from(otherPhotos.files);

   const mainPhotoURL = await uploadImageToStorage(mainPhotoFile);

    const otherPhotoURLs = await Promise.all(
        otherPhotoFiles.map(async photoFile => await uploadImageToStorage(photoFile))
    );

    const formData = {
		id: itemId,
        itemName: itemName,
        itemLocationDiscription: itemLocation,
		itemLocation:document.getElementById("Alcaldia").value +", "+document.getElementById("colonia").value,
        province: document.getElementById("Alcaldia").value,
        district: document.getElementById("colonia").value,
        mainPhoto: mainPhotoURL,
        otherPhotos: otherPhotoURLs,
		timestamp: timestamp
    };

    // const formDataJSON = JSON.stringify(formData);
    // localStorage.setItem("formData", formDataJSON);

    db.collection('itensPerdidos').add(
		formData
	).then(docRef => {
		 // Limpa o formulário
		 formData.id = docRef.id
		 lostItemForm.reset();
		 mainPhotoPreview.style.display = "none";
		 mainPhotoPreview.src = "";
		 otherPhotosPreview.innerHTML = "";
		alert("Item adicionado com sucesso!");
		window.location.reload();
	}).catch(error => {
		console.log('Ocorreu um erro', error);
		alert("Ocorreu um erro ao adicionar o item perdido.");
	});

   
});

// Função para converter uma imagem em base64
function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}


//Fim add item

//-----Salvando Fotos no Store
async function uploadImageToStorage(imageFile) {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(imageFile.name);

    await imageRef.put(imageFile);

    const imageURL = await imageRef.getDownloadURL();
    return imageURL;
}
//------ Fim salvar fotos

// ---------------------------------- Fim Add Item

//----------Funcao para criar ID
function generateUniqueId() {
    // Gere um ID único baseado no timestamp atual e um número aleatório
    return Date.now() + Math.random().toString(36).substr(2, 9);
}
//-----------Fim funcao para criar ID
//-----Add Pic Princiapl
$(document).ready(function () {
    $("#mainPhoto").change(function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                $("#mainPhotoPreview").attr("src", e.target.result);
                $("#mainPhotoPreview").show(); // Exibe a imagem
            };
            reader.readAsDataURL(file);
        }
    });
});
//// Fim add Pic Principal

//Add Pic Outros
const otherPhotosInput = document.getElementById("otherPhotos");
const selectedPhotosPreview = document.getElementById("selectedPhotosPreview");

otherPhotosInput.addEventListener("change", function() {
	selectedPhotosPreview.innerHTML = "";
    const selectedPhotos = Array.from(otherPhotosInput.files);
  
    selectedPhotos.forEach(photo => {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("selected-photo-container");
  
        const img = document.createElement("img");
        img.src = URL.createObjectURL(photo);
        img.alt = "Selected Photo";
  
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Apagar";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function() {
			// console.log('Valor ', otherPhotosInput.value);
            imgContainer.remove();
        });
  
        imgContainer.appendChild(img);
        imgContainer.appendChild(deleteBtn);
  
        selectedPhotosPreview.appendChild(imgContainer);
    });
  
    // Limpa o valor do input após adicionar as fotos
    // otherPhotosInput.value = null;	
});
  
  // ... Resto do seu código ...
  

//Fim add pic outros





					  	
						