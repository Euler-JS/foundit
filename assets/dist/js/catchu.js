let todosItems = [];
let todosItemsFiltros = [];
let todosTrabalhos = [];
var workerSelecionado;
//var a='JS';

const renderTrabalhadores  = function (ver) {

	console.log("ver todos "+ver);

	if (ver == "todos") {
						      // User doesn't have permission to access the object
						      console.log("ver todos");
						      db.collection("itensPerdidos")
							  .orderBy('timestamp', 'desc') 
							  .get().then(data =>
								{
									data.docs.forEach(element =>
									{
										const singleItem = element.data();
										todosItems.push(singleItem);
										todosItemsFiltros.push(singleItem);
										todosTrabalhos.push(singleItem.itemName);
										console.log('Go '+element.itemName);
									});

									criarTrabalhadores(todosItemsFiltros);
									criaCategorias(todosTrabalhos);
								});
						      }
	else {
					
						       console.log("ver " +ver);
						      db.collection("utilizadores").get().then(data =>
								{
									data.docs.forEach(element =>
									{
										const singleItem = element.data();
										//console.log("dff " +singleItem.district);
										//| singleItem.experienciaDedistrict.search(ver)>=0
										if (singleItem.district.search(ver)>=0)
										{ 
											todosItems.push(singleItem);
											todosItemsFiltros.push(singleItem);
											console.log('Go '+element.itemName);
										}
									});

									criarTrabalhadores(todosItemsFiltros);
								});
						     

						    //...
		}
}

const renderTrabalhadoresCopia  = function (ver) {

	console.log("ver todos "+ver);
	//alert(" V "+todosItems.length);

	if (ver == "todos") {
						      // User doesn't have permission to access the object
						      console.log("ver todos");
						      
									todosItems.forEach(element =>
									{
										//const singleItem = element.data();
										//todosItems.push(singleItem);
										todosItemsFiltros.push(element);
										console.log('Go '+element.itemName);
									});

									criarTrabalhadores(todosItemsFiltros);
								
						      }
	else {
									todosItems.forEach(element =>
									{
										if (element.itemName.search(ver)>=0)
										{ 
											todosItemsFiltros.push(element);
										}
									});
									criarTrabalhadores(todosItemsFiltros);
		}

	

	
}

const renderPesquisa = function(ver, provincia, cidade)
{


	
									todosItems.forEach(element =>
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
											const singleItem = element;
											//var s = singleItem.itemLocation+""+singleItem.experienciaDedistrict+""+singleItem.district
											if (verCidade) 
											{
												if (singleItem.itemLocation.search(provincia+", "+cidade)>=0) 
													{
														if (singleItem.experienciaDedistrict.search(ver) >=0 |
															singleItem.district.search(ver) >=0)
														{ 
															todosItemsFiltros.push(singleItem);
															console.log('Go '+element.itemName);
														}
													}
											}
											else
												{
													console.log("Cidade ON");
													if (singleItem.itemLocation.search(provincia)>=0) 
													{
														if (singleItem.experienciaDedistrict.search(ver) >=0 |
															singleItem.district.search(ver) >=0)
														{ 
															todosItemsFiltros.push(singleItem);
															console.log('Go '+element.itemName);
															//console.log("Ola "+conta);
														}
														//conta = conta + 1;
													
														//console.log("Viu "+conta);
													}

													
												}
										}
										else if (verProvincia==true && verVer == false)
										{
											const singleItem = element;
											//var s = singleItem.itemLocation+""+singleItem.experienciaDedistrict+""+singleItem.district
											if (verCidade) 
											{
												if (singleItem.itemLocation.search(provincia+", "+cidade)>=0) 
													{
														 
															todosItemsFiltros.push(singleItem);
															console.log('Go '+element.itemName);
															//console.log("Ola "+conta);
														
														//conta = conta + 1;
													
														//console.log("Viu "+conta);
													}

													console.log("Cidade off");


											}
											else
												{
													console.log("Cidade ON");
													if (singleItem.itemLocation.search(provincia)>=0) 
													{
														
															todosItemsFiltros.push(singleItem);
															console.log('Go '+element.itemName);
															//console.log("Ola "+conta);
														
														//conta = conta + 1;
													
														//console.log("Viu "+conta);
													}

													
												}
										}
										else if (verProvincia == false)
										{
											const singleItem = element;
											if (singleItem.experienciaDedistrict.includes(ver) |
														singleItem.district.search(ver) >=0)
													{ 
														todosItemsFiltros.push(singleItem);
														console.log('Go '+element.itemName);
														//console.log("Ola "+conta);
													}
													//conta = conta + 1;
													//console.log("Viu "+conta);
										}



										/*if (provincia =="") {
											const singleItem = element.data();
											var s = singleItem.itemLocation+""+singleItem.experienciaDedistrict+""+singleItem.district
											if (singleItem.experienciaDedistrict.includes(ver) |
												singleItem.district.includes(ver))
											{ 
												todosItems.push(singleItem);
												console.log('Go '+element.itemName);
												console.log("Ola "+conta);
											}
											conta = conta + 1;
											console.log("Viu "+conta);
										}*/

										

										
									});

									criarTrabalhadores(todosItemsFiltros);
								;
										//const singleItem = element.data();
										//console.log("dff " +singleItem.district);
										
										
}


criarTrabalhadores = function(todosItems)
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
	if (todosItemsFiltros.length>=1) 
	{
			todosItemsFiltros.forEach(element =>{

				var pf ;

				if (element.mainPhoto=="") 
				{
					pf = "assets/img/icon/imgAvatar3.png";
				}
				else
				{
					pf = element.mainPhoto;
				}


				let tes = $('<div  class="demo-card-square mdl-card mdl-shadow--2dp mx-auto d-block"><div class="demo-card-image mdl-card mdl-shadow--2dp  mx-auto d-block img-fluid">'+
		  '<div style=" border:1px solid #46B6AC;" class=" mdl-card--expand" ><img src="'+pf+'" alt="Sem foto de perfil" class="bd-placeholder-img  mx-auto d-block img-fluid" style="height: auto; width: 100%;"></div>'+
		  
		'</div>'+
							
						  '<div class="mdl-card__title mdl-card--expand" >'+
				    		'<h2 class="mdl-card__title-text">'+element.itemName+'</h2>'+
				  		'</div>'+
				  		'<div class="mdl-card__title mdl-card__title-text">'+
				    		''+element.district+''+
				  		'</div>'+
				  		'<div class="mdl-card__title mdl-card__title-text">'+
				    		''+element.itemLocation+''+
				  		'</div>'+
				  		
						'</div>');	
				
				let button_ = $('<button style="border-radius:1px; width:100%; font-size:14px;" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Ver Detalhes</button>');
				

				button_.on('click', () =>
				{
					clickGo(element.id);
				});
				tes.append(button_);
				
				$('#row-write').append(tes);

				document.getElementById('progressWorkers').style.display = 'none';
				document.getElementById('navBarWorkers').style.visibility = 'visible';
				document.getElementById('statusLoadWorkers').innerHTML = "AS Pub";
				closeNavButton();
			});

		}else
		{
			document.getElementById('progressWorkers').style.display = 'none';
			document.getElementById('navBarWorkers').style.visibility = 'visible';
			document.getElementById('statusLoadWorkers').innerHTML = "AS Pub";
			alert("Ups!.. Não há resultado para sua busca.")
			closeNavButton();
		}
	



	

}

const clickGo = function(oId){
		workerSelecionado = oId;
		let worskImg = $('<div class="row  w3-card  w3-white w3-container "> ');
						testando = '<div class="row w3-white w3-container "> ';
						let button_closePerfil = $('<div class="w3-card w3-container w3-white" style="width:100%;"><button onclick="clickClose()" style="border-radius:30px;width:50%; height:50px; font-size:14px; margin-top:5%; margin-bottom:5%;" class="btn-primary bg-danger mx-auto d-block">Fechar</button></div>');
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
		todosItemsFiltros.forEach(element =>{
		if (workerSelecionado == element.id) {
						console.log('Selecionado ', workerSelecionado);
						
						worklink = element.linkdistrict;
						experiencia = element.experienciaDedistrict;
						// allWorkslinks = worklink.split(";");
						// allExperiencia = experiencia.split(";");

						for (var i = 0; i < element.otherPhotos.length; i++) {
							let setImg = $('<div class="col-md-4">'+
				              '<div class=" no-gutters border  flex-md-row mb-4 shadow-sm h-md-500 position-relative">'+
				                '<div class="col-auto  d-flex flex-column position-static">'+
				                  '<img src="'+element.otherPhotos[i]+'" alt="Sem foto de trabalho" class="img-fluid mx-auto d-block" style="height: auto; width: 100%">'+
				                '</div>'+

				                
				              '</div>'+
				            '</div>');
				            worskImg.append(setImg);	
						}

						// for (var i = 0; i < allExperiencia.length; i++) {
							
						// 	alo = alo+"<br>"+allExperiencia[i];	
						// }

						worskImg.append(button_closePerfil);		
						worskImg.append('</div>');
						testando = testando+"</div>";

						//worskImg.append('</div>');
						c.append(worskImg).append('</div>').append('</div>');
						
						//alert(element.itemName);
						var pf ;

						if (element.mainPhoto=="") 
						{
							pf = "assets/img/icon/imgAvatar3.png";
						}
						else
						{
							pf = element.mainPhoto;
						}

						let perfil= $('<div id="mySidenaverfil" class="sidenaverfil modal-content-l01 animate">'+
				  '<div class="w3-margin-top">'+
				  '<div class="w3-row-padding">'+
				    '<div class="w3-third">'+
				      '<div class="w3-white w3-text-grey w3-card-4">'+
				        '<div class="w3-display-container">'+
				          '<img src="'+pf+'" style="width:100%" alt="Avatar">'+
				          '<div class="w3-display-bottomleft w3-container w3-text-black">'+
				            '<h2>'+element.itemName+'</h2>'+
				          '</div>'+
				        '</div>'+
				      '</div>'+
				      '<br>'+
				    '</div>'+


				    '<div class="w3-twothird">'+
				      '<div class="w3-container w3-card w3-white w3-margin-bottom">'+
				      '<h2 class="w3-text-grey w3-padding-16 alltext"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Detalhes</h2>'+
				      '<div class="w3-container">'+
				          '<p class="alltext"><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>'+element.itemName+'</p>'+
				          '<p class="alltext"><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>'+element.itemLocation+'</p>'+
				          '<p class="alltext"><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>'+element.province+'</p>'+
				          '<p class="alltext"><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+element.district+'</p>'+
				          '<hr>'+  
				          '<br>'+
				          
				        '</div>'+
				        '<h2 class="w3-text-grey w3-padding-16 alltext"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Descrição</h2>'+
				        '<div class="w3-container">'+
				          '<p class="alltext">district com :'+alo+'</p>'+
				          '<hr>'+
				      '</div>');
				        

						//$('#gridImgWork').append(worskImg);
						perfil.append('<div class=" w3-white w3-card w3-row-padding w3-container" style="margin-left:14px; margin-right:14px;" id="gridImgWork">'+
				        '<h2 class="w3-text-grey w3-padding-16 alltext">'+
				        '<i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Fotos</h2></div></div></div><div class="w3-twothird">');
						perfil.append(worskImg);
						
						$('#id01').append(perfil);
				  		document.getElementById('id01').style.display='block'

				  	}

	});
}

const clickClose = function()
{
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
	todosItemsFiltros = [];
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
	todosItemsFiltros = [];
	renderPesquisa(see);
}

function verPesquisa()
{

}

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
		todosItemsFiltros = [];
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

	
