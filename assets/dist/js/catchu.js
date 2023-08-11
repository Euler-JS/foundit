let todosUtilizadores = [];
let todosUtilizadoresFiltros = [];
let todosTrabalhos = [];
var workerSelecionado;
//var a='JS';

const renderTrabalhadores  = function (ver) {

	console.log("ver todos "+ver);

	if (ver == "todos") {
						      // User doesn't have permission to access the object
						      console.log("ver todos");
						      db.collection("utilizadores").get().then(data =>
								{
									data.docs.forEach(element =>
									{
										const singleUtilizador = element.data();
										todosUtilizadores.push(singleUtilizador);
										todosUtilizadoresFiltros.push(singleUtilizador);
										todosTrabalhos.push(singleUtilizador.trabalhoU);
										console.log('Go '+element.nomeU);
									});

									criarTrabalhadores(todosUtilizadoresFiltros);
									criaCategorias(todosTrabalhos);
								});
						      }
	else {
					
						       console.log("ver " +ver);
						      db.collection("utilizadores").get().then(data =>
								{
									data.docs.forEach(element =>
									{
										const singleUtilizador = element.data();
										//console.log("dff " +singleUtilizador.trabalhoU);
										//| singleUtilizador.experienciaDeTrabalhoU.search(ver)>=0
										if (singleUtilizador.trabalhoU.search(ver)>=0)
										{ 
											todosUtilizadores.push(singleUtilizador);
											todosUtilizadoresFiltros.push(singleUtilizador);
											console.log('Go '+element.nomeU);
										}
									});

									criarTrabalhadores(todosUtilizadoresFiltros);
								});
						     

						    //...
		}
}

const renderTrabalhadoresCopia  = function (ver) {

	console.log("ver todos "+ver);
	//alert(" V "+todosUtilizadores.length);

	if (ver == "todos") {
						      // User doesn't have permission to access the object
						      console.log("ver todos");
						      
									todosUtilizadores.forEach(element =>
									{
										//const singleUtilizador = element.data();
										//todosUtilizadores.push(singleUtilizador);
										todosUtilizadoresFiltros.push(element);
										console.log('Go '+element.nomeU);
									});

									criarTrabalhadores(todosUtilizadoresFiltros);
								
						      }
	else {
					
						       console.log("ver " +ver);
						      
									todosUtilizadores.forEach(element =>
									{
										//const singleUtilizador = element.data();
										//console.log("dff " +singleUtilizador.trabalhoU);
										//| singleUtilizador.experienciaDeTrabalhoU.search(ver)>=0
										if (element.trabalhoU.search(ver)>=0)
										{ 
											//todosUtilizadores.push(singleUtilizador);
											todosUtilizadoresFiltros.push(element);
											console.log('Go '+element.nomeU);
										}
									});

									criarTrabalhadores(todosUtilizadoresFiltros);
								
						     

						    //...
		}

	

	
}

const renderPesquisa = function(ver, provincia, cidade)
{


	
									todosUtilizadores.forEach(element =>
									{

										var verProvincia= true, verCidade=true, verVer=true;
										if (provincia=="") 
										{
											verProvincia = false;
										}

										if (cidade=="") 
										{
											verCidade = false;
										}

										if (ver =="") 
										{
											verVer = false;
										}

										if (verProvincia && verVer) 
										{
											//Quer dizer que temos provincia e cidade e categoria
											const singleUtilizador = element;
											//var s = singleUtilizador.localU+""+singleUtilizador.experienciaDeTrabalhoU+""+singleUtilizador.trabalhoU
											if (verCidade) 
											{
												if (singleUtilizador.localU.search(provincia+", "+cidade)>=0) 
													{
														if (singleUtilizador.experienciaDeTrabalhoU.search(ver) >=0 |
															singleUtilizador.trabalhoU.search(ver) >=0)
														{ 
															todosUtilizadoresFiltros.push(singleUtilizador);
															console.log('Go '+element.nomeU);
															//console.log("Ola "+conta);
														}
														//conta = conta + 1;
													
														//console.log("Viu "+conta);
													}

													console.log("Cidade off");


											}
											else
												{
													console.log("Cidade ON");
													if (singleUtilizador.localU.search(provincia)>=0) 
													{
														if (singleUtilizador.experienciaDeTrabalhoU.search(ver) >=0 |
															singleUtilizador.trabalhoU.search(ver) >=0)
														{ 
															todosUtilizadoresFiltros.push(singleUtilizador);
															console.log('Go '+element.nomeU);
															//console.log("Ola "+conta);
														}
														//conta = conta + 1;
													
														//console.log("Viu "+conta);
													}

													
												}
										}
										else if (verProvincia==true && verVer == false)
										{
											const singleUtilizador = element;
											//var s = singleUtilizador.localU+""+singleUtilizador.experienciaDeTrabalhoU+""+singleUtilizador.trabalhoU
											if (verCidade) 
											{
												if (singleUtilizador.localU.search(provincia+", "+cidade)>=0) 
													{
														 
															todosUtilizadoresFiltros.push(singleUtilizador);
															console.log('Go '+element.nomeU);
															//console.log("Ola "+conta);
														
														//conta = conta + 1;
													
														//console.log("Viu "+conta);
													}

													console.log("Cidade off");


											}
											else
												{
													console.log("Cidade ON");
													if (singleUtilizador.localU.search(provincia)>=0) 
													{
														
															todosUtilizadoresFiltros.push(singleUtilizador);
															console.log('Go '+element.nomeU);
															//console.log("Ola "+conta);
														
														//conta = conta + 1;
													
														//console.log("Viu "+conta);
													}

													
												}
										}
										else if (verProvincia == false)
										{
											const singleUtilizador = element;
											if (singleUtilizador.experienciaDeTrabalhoU.includes(ver) |
														singleUtilizador.trabalhoU.search(ver) >=0)
													{ 
														todosUtilizadoresFiltros.push(singleUtilizador);
														console.log('Go '+element.nomeU);
														//console.log("Ola "+conta);
													}
													//conta = conta + 1;
													//console.log("Viu "+conta);
										}



										/*if (provincia =="") {
											const singleUtilizador = element.data();
											var s = singleUtilizador.localU+""+singleUtilizador.experienciaDeTrabalhoU+""+singleUtilizador.trabalhoU
											if (singleUtilizador.experienciaDeTrabalhoU.includes(ver) |
												singleUtilizador.trabalhoU.includes(ver))
											{ 
												todosUtilizadores.push(singleUtilizador);
												console.log('Go '+element.nomeU);
												console.log("Ola "+conta);
											}
											conta = conta + 1;
											console.log("Viu "+conta);
										}*/

										

										
									});

									criarTrabalhadores(todosUtilizadoresFiltros);
								;
										//const singleUtilizador = element.data();
										//console.log("dff " +singleUtilizador.trabalhoU);
										
										
}


criarTrabalhadores = function(todosUtilizadores)
{

	/*

		'<div class="demo-card-image mdl-card mdl-shadow--2dp">'+
  									'<div class="mdl-card__title mdl-card--expand"></div>'+
  									'<div class="mdl-card__actions">'+
    								'<span class="demo-card-image__filename">Image.jpg</span>'+
  								'</div>'+
						'</div>'+
	*/

	let div1; var e0="";
	if (todosUtilizadoresFiltros.length>=1) 
	{
			todosUtilizadoresFiltros.forEach(element =>{

				var pf ;

				if (element.linkPerfil=="") 
				{
					pf = "assets/img/icon/imgAvatar3.png";
				}
				else
				{
					pf = element.linkPerfil;
				}


				let tes = $('<div  class="demo-card-square mdl-card mdl-shadow--2dp mx-auto d-block"><div class="demo-card-image mdl-card mdl-shadow--2dp  mx-auto d-block img-fluid">'+
		  '<div style=" border:1px solid #46B6AC;" class=" mdl-card--expand" ><img src="'+pf+'" alt="Sem foto de perfil" class="bd-placeholder-img  mx-auto d-block img-fluid" style="height: auto; width: 100%;"></div>'+
		  
		'</div>'+
							
						  '<div class="mdl-card__title mdl-card--expand" >'+
				    		'<h2 class="mdl-card__title-text">'+element.nomeU+'</h2>'+
				  		'</div>'+
				  		'<div class="mdl-card__title mdl-card__title-text">'+
				    		''+element.trabalhoU+''+
				  		'</div>'+
				  		'<div class="mdl-card__title mdl-card__title-text">'+
				    		''+element.localU+''+
				  		'</div>'+
				  		
						'</div>');	
				
				//a = element.id;
				/*div1 = $('<div class="col-auto" style="width:180px; height:auto;">');
				let div2 = $('<div class=" no-gutters border  flex-md-row mb-4 shadow-sm h-md-200 position-relative">');
				let div3 = $('<div class="col-auto  d-flex flex-column position-static mx-auto d-block ">');

				let imgU = $('<img src="'+element.linkPerfil+'" alt="Sem foto de perfil" class="bd-placeholder-img  mx-auto d-block img-fluid" style="height: auto; width: 100%;">');

				let div4 = $('<div class="col  d-flex flex-column position-static btn-primary bg-danger" style="padding:1px;">');
				let h6 = $('<h6 style="max-height: 60px;" class="p-2">'+element.nomeU+'</h6>');
				let strong = $('<strong style="font-size: 11px;" class="p-2">'+element.nomeU+'</strong>');
				let p1 = $('<label class="p-2"><b>'+element.trabalhoU+'</b></label>')
				let p2 = $('<label class="p-2">'+element.localU+'</label>');
				//let a = $('<a href="#"  class="stretched-link" style="color: white">Detalhes</a> onclick="clickGo()" id="Go"');*/
				let button_ = $('<button style="border-radius:1px; width:100%; font-size:14px;" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent bg-danger">Ver Perfil</button>');
				

				button_.on('click', () =>
				{
					//alert(element.id);
					clickGo(element.id);
					
				});
				
				/*a.onclick = function()
				{
					console.log('Here');
				}*/

			

				tes.append(button_);
				/*div4.append(imgU).append('</div>');

				div2.append(div3);
				div4.append(h6);
				div4.append(strong);
				div4.append(p1);
				div4.append(p2).append('</div>');
				//div4.append(a);
				div4.append(button_);
				div2.append(div4).append('</div>');
				div1.append(div2).append('</div>');*/
				
				$('#row-write').append(tes);

				document.getElementById('progressWorkers').style.display = 'none';
				document.getElementById('navBarWorkers').style.visibility = 'visible';
				document.getElementById('statusLoadWorkers').innerHTML = "FoundIt";
				closeNavButton();
				//todosUtilizadores = [];

			});

		}else
		{
			document.getElementById('progressWorkers').style.display = 'none';
			document.getElementById('navBarWorkers').style.visibility = 'visible';
			document.getElementById('statusLoadWorkers').innerHTML = "FoundIt";
			alert("Ups!.. Não há resultado para sua busca.")
			closeNavButton();
		}
	



	

}

const clickGo = function(oId){

	/*console.log('Cliked');
	document.getElementById("mySidenaverfil").style.width = "100%";
  		//document.getElementById("mySidenaverfil").style.display = "block";
  
  		document.getElementById("lol").style.overflow = "hidden";
  		document.getElementById("lol").style.height = "10px";
		document.getElementById('id01').style.display='block';*/

		//window.alert("Go "+userId+"");


		//alert("Ola "+oId);
		workerSelecionado = oId;
		//console.log(document.getElementsByTagName("p").value);
		

		let worskImg = $('<div class="row  w3-card  w3-white w3-container "> ');
						testando = '<div class="row w3-white w3-container "> ';
						let button_closePerfil = $('<div class="w3-card w3-container w3-white" style="width:100%;"><button onclick="clickClose()" style="border-radius:30px;width:50%; height:50px; font-size:14px; margin-top:5%; margin-bottom:5%;" class="btn-primary bg-danger mx-auto d-block">Fechar Perfil</button></div>');
						let button_closePerfil1 = $('<div class="container">'+
													  '<span onclick="clickClose()" class="closebtn-galeria">&times;</span>'+
													  '<img id="expandedImg-galeria" style="width:100%">'+
													  '<div id="imgtext-galeria"></div>'+
													'</div>');
						let c = $('');

						var worklink, experiencia;
						let allWorkslinks = [];
						let allExperiencia = [];
						var alo = "";
						var testando="";
			

						

						


		todosUtilizadoresFiltros.forEach(element =>{

			

		if (workerSelecionado == element.id) {

						worklink = element.linkTrabalhoU;
						experiencia = element.experienciaDeTrabalhoU;
						allWorkslinks = worklink.split(";");
						allExperiencia = experiencia.split(";");
						

						//'<img src="'+allWorkslinks[i]+'" alt="John" class="img-fluid mx-auto d-block" style="height: 250px; width: 250px">'+

						console.log(allWorkslinks.length);
						for (var i = 0; i < allWorkslinks.length-1; i++) {
							let setImg = $('<div class="col-md-4">'+
				              '<div class=" no-gutters border  flex-md-row mb-4 shadow-sm h-md-500 position-relative">'+
				                '<div class="col-auto  d-flex flex-column position-static">'+
				                  '<img src="'+allWorkslinks[i]+'" alt="Sem foto de trabalho" class="img-fluid mx-auto d-block" style="height: auto; width: 100%">'+
				                '</div>'+

				                
				              '</div>'+
				            '</div>');

				           /* testando = testando+'<div class="col-md-4">'+
				              '<div class=" no-gutters border  flex-md-row mb-4 shadow-sm h-md-500 position-relative">'+
				                '<div class="col-auto  d-flex flex-column position-static">'+
				                  '<img src="'+allWorkslinks[i]+'" alt="John" class="img-fluid mx-auto d-block" style="height: auto; width: 100%">'+
				                '</div>'+

				                
				              '</div>'+
				            '</div>'*/

				            worskImg.append(setImg);	
						}


						for (var i = 0; i < allExperiencia.length; i++) {
							
							alo = alo+"<br>"+allExperiencia[i];	
						}

						worskImg.append(button_closePerfil);		
						worskImg.append('</div>');
						testando = testando+"</div>";

						//worskImg.append('</div>');
						c.append(worskImg).append('</div>').append('</div>');
						
						//alert(element.nomeU);
						var pf ;

						if (element.linkPerfil=="") 
						{
							pf = "assets/img/icon/imgAvatar3.png";
						}
						else
						{
							pf = element.linkPerfil;
						}

						let perfil= $('<div id="mySidenaverfil" class="sidenaverfil modal-content-l01 animate">'+
				  '<div class="w3-margin-top">'+
				  '<div class="w3-row-padding">'+
				    '<div class="w3-third">'+
				      '<div class="w3-white w3-text-grey w3-card-4">'+
				        '<div class="w3-display-container">'+
				          '<img src="'+pf+'" style="width:100%" alt="Avatar">'+
				          '<div class="w3-display-bottomleft w3-container w3-text-black">'+
				            '<h2>'+element.nomeU+'</h2>'+
				          '</div>'+
				        '</div>'+
				      '</div>'+
				      '<br>'+
				    '</div>'+


				    '<div class="w3-twothird">'+
				      '<div class="w3-container w3-card w3-white w3-margin-bottom">'+
				      '<h2 class="w3-text-grey w3-padding-16 alltext"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Detalhes do Perfil</h2>'+
				      '<div class="w3-container">'+
				          '<p class="alltext"><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>'+element.nomeU+'</p>'+
				          '<p class="alltext"><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>'+element.localU+'</p>'+
				          '<p class="alltext"><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>'+element.emailU+'</p>'+
				          '<p class="alltext"><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+element.numeroU+'</p>'+
				          '<hr>'+  
				          '<br>'+
				          
				        '</div>'+
				        '<h2 class="w3-text-grey w3-padding-16 alltext"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Descrição</h2>'+
				        '<div class="w3-container">'+
				          '<p class="alltext">Trabalhou com :'+alo+'</p>'+
				          '<hr>'+
				        /*'</div> <div class="w3-container w3-card w3-white">'+
				        '<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>'+
				        '<div class="w3-container"> '+testando+''+
				         '<h5 class="w3-opacity"><b>W3Schools.com</b></h5>'+
				          '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>'+
				          '<p>Web Development! All I need to know in one place</p>'+
				          '<hr>'+
				        '</div>'+
				        '<div class="w3-container">'+
				          '<h5 class="w3-opacity"><b>London Business School</b></h5>'+
				          '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>'+
				          '<p>Master Degree</p>'+
				          '<hr>'+
				        '</div>'+
				        '<div class="w3-container">'+
				          '<h5 class="w3-opacity"><b>School of Coding</b></h5>'+
				          '<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>'+
				          '<p>Bachelor Degree</p><br>'+
				        '</div>'+*/
				      '</div>');
				        

						//$('#gridImgWork').append(worskImg);
						perfil.append('<div class=" w3-white w3-card w3-row-padding w3-container" style="margin-left:14px; margin-right:14px;" id="gridImgWork">'+
				        '<h2 class="w3-text-grey w3-padding-16 alltext">'+
				        '<i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Fotos de Trabalhos</h2></div></div></div><div class="w3-twothird">');
						perfil.append(worskImg);
						
						$('#id01').append(perfil);


						//document.getElementById("mySidenaverfil").style.width = "100%";
				  		//document.getElementById("mySidenaverfil").style.display = "block";

				  		//document.getElementById("mySidenaverfil").style.width = "100%";
				  		//document.getElementById("mySidenaverfil").style.display = "block";
				  
				  		//document.getElementById("lol").style.overflow = "hidden";
				  		//document.getElementById("lol").style.height = "10px";
				  		document.getElementById('id01').style.display='block'

				  	}
				  
  		

	});


		//document.getElementById('id01').style.display='block';
		//document.getElementById("mySidenaverfil").style.width = "100%";
}

const clickClose = function()
{
	//document.getElementById('id01').style.display='none';
	
	//document.getElementById("mySidenaverfil").style.display = "block";
   //document.getElementById("lol").style.overflow = "none";
   //document.getElementById("lol").style.height = "100%";

   document.getElementById('id01').style.display='none'
   document.getElementById("lol").style.height = "100%";
   document.getElementById('id01').empty;
   workerSelecionado ="";
}

function ver(see)
{
	var v = see;
	document.getElementById('progressWorkers').style.display = 'block';
	document.getElementById('navBarWorkers').style.visibility = 'hidden';
	document.getElementById('statusLoadWorkers').innerHTML = "Loading . . . Workers "+see;
	$('#row-write').empty();
	todosUtilizadoresFiltros = [];
	if (see.includes("_")) 
	{
		v = see.replace("_"," ");
	}
	renderTrabalhadoresCopia(v);
}


function verP()
{

	var see = $('#pesquisaI').val();
	document.getElementById('progressWorkers').style.display = 'block';
	document.getElementById('navBarWorkers').style.visibility = 'hidden';
	document.getElementById('statusLoadWorkers').innerHTML = "Loading . . . Workers "+see;
	$('#row-write').empty();
	todosUtilizadoresFiltros = [];
	renderPesquisa(see);
}

function verPesquisa()
{
	/*const dialog = document.querySelector('#dialogPesquisa');
    const showDialogButton = document.querySelector('#show-dialogPesquisa');
    dialog.showModal();
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    /*showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });*/
    /*dialog.querySelector('.closePesquisa').addEventListener('click', function() {
      dialog.close();

    });


     dialog.querySelector('.savePesquisa000').addEventListener('click', function() {

     	const pesquisa = $('#Pesquisa1A').val();
     	

     	
     	console.log("Pesquisa Sucesso");
     	
     	
     verP(pesquisa);
     dialog.close();
      
    });*/

}

/*

function verProgramador()
{
	document.getElementById('progressWorkers').style.display = 'block';
	document.getElementById('navBarWorkers').style.visibility = 'hidden';
	document.getElementById('statusLoadWorkers').innerHTML = "Loading . . . Workers Programadores";
	$('#row-write').empty();
	todosUtilizadores = [];
	renderTrabalhadores("Programador");
}

function todasCategorias()
{
	document.getElementById('progressWorkers').style.display = 'block';
	document.getElementById('navBarWorkers').style.visibility = 'hidden';
	document.getElementById('statusLoadWorkers').innerHTML = "Loading . . . Todos Workers";
	$('#row-write').empty();
	todosUtilizadores = [];
	renderTrabalhadores("todos");
}

function verDesginer()
{
	document.getElementById('progressWorkers').style.display = 'block';
	document.getElementById('navBarWorkers').style.visibility = 'hidden';
	document.getElementById('statusLoadWorkers').innerHTML = "Loading . . . Todos Designers";
	$('#row-write').empty();
	todosUtilizadores = [];
	renderTrabalhadores("Designer");
}
*/

$("#show-dialogPesquisa").click(
	function()
	{
		console.log("OKKK ");
		verPesquisa();
	});


$("#Testando").click(
	function()
	{
		var provincia = document.getElementById("Alcaldia").value;
    	var cidade = document.getElementById("colonia").value;


		console.log("OKKK ");
		alert("Pesquisa " +provincia+" "+cidade);
	});


function Testando()
{
		var provincia = document.getElementById("Alcaldia").value;
    	var cidade = document.getElementById("colonia").value;
    	var see = $('#pesquisaI').val();

		console.log("OKKK ");
		//alert("Pesquisa " +provincia+", "+cidade);
		document.getElementById('progressWorkers').style.display = 'block';
		//document.getElementById('navBarWorkers').style.visibility = 'hidden';
		document.getElementById('statusLoadWorkers').innerHTML = "Loading . . . Workers "+see;
		$('#row-write').empty();
		todosUtilizadoresFiltros = [];
		renderPesquisa(see,provincia,cidade);
}

const criaCategorias = function(todosTrabalhos)
{
	let cat ;
	var all ="";
	todosTrabalhos.forEach(element =>{
		var ver = element ;
		if (element.includes(" ")) {
			var n = element.replace(" ", "_");
			ver = n;
		}
		 
		if (!(all.includes(element))) 
		{
			console.log("vv "+element);
		all = all+""+'<button type="button" class="btn btn-primary button-categoria" onclick=ver("'+ver+'")>'+element+'</button>';

		}
	})
	cat= $('<div>'+all+'</div>');
	$('#groupCategorias').append(cat);
}




renderTrabalhadores("todos");

	
