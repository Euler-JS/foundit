let todosTrabalhos = [];
let todosUtilizadores = [];
let todosComentarios = [];
var idPublicacao= "";
var idP = "";
var arrayComentario2 ="";
var months = ['Janeiro','Fevereio','Marco','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novevembro','Dezembro'];



const renderTrabalhos  = function () {

	db.collection("trabalhos").get().then(data =>
	{
		data.docs.forEach(element =>
		{
			//console.log("todosUtilizadores.length");
			const singleTrabalho = element.data();
			todosTrabalhos.push(singleTrabalho);
			console.log(todosTrabalhos.length);
			//console.log('Go '+element.nomeU);
			//$('#progress').show();

		});

		//clickGo();
		//console.log("DFC "+idUser);
		
		
		criaTrabalhos();
	});
}

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
		
		
		//clickGo(idUser);
	});
}

const renderComentarios  = function () {

	db.collection("comentarios").get().then(data =>
	{
		data.docs.forEach(element =>
		{
			//console.log("todosUtilizadores.length");
			const singleComentario = element.data();
			todosComentarios.push(singleComentario);
			console.log(todosComentarios.length);
			//console.log('Go '+element.nomeU);
			//$('#progress').show();

		});

		//clickGo();
		//console.log("DFC "+idUser);
		
		
		//clickGo(idUser);
	});
}


const criaTrabalhos = function(){

		
		//console.log("F "+workerSelecionado+" "+todosUtilizadores.length);
		todosTrabalhos.forEach(element =>{
			//console.log("EL "+element.id);
			//console.log("F "+workerSelecionado);

			const newEl = element;
			const coment = element.comentarioTrabalho;
			const cmtId = element.id_trabalho;

			var user = postAutor(element.id_user);

			console.log("Alo "+element.comentarioTrabalho+" "+element.textoTrabalho);
			//(new Date("2012-02-26")).getTime();


			//const t = element.diaTrabalho.fromDate(new Date());

			// Timestamp to Date
			//const d = t.toDate();

			const d1 = new Date(now());
			//var d= "7000";

			var d = new Date();

			var date = new Date(element.diaTrabalho * 1000);
			var ano = date.getFullYear() - 1969;
			var mes = date.getMonth();
			var dia = date.getDate();
			var hours = date.getHours();
			var minutes = "0" + date.getMinutes();
			var seconds = "0" + date.getSeconds();

			var formattedTime = dia +' '+ months[mes] +' de '+ ano+  ' ' +hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

			//'<span class="w3-right w3-opacity" id="dia">'+d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()+'</span>'+
  			

			let tr = $('<div class="w3-container w3-card w3-white w3-round w3-margin"><br>'+
        '<img src="'+user.foto+'" alt="Avatar" class="w3-left  w3-margin-right" style="width:40px;">'+
        '<span class="w3-right w3-opacity" id="dia">'+formattedTime+'</span>'+
        '<h4 id="nomePublicado">'+user.nome+'</h4><br>'+
        '<hr class="w3-clear">'+
        '<p id="textoPublicado">'+element.textoTrabalho+'</p>'+
          '<div class="w3-row-padding" style="margin:0 -16px">'+
            /*<!--<div class="w3-half">
              <img src="./W3.CSS Template_files/lights.jpg" style="width:100%" alt="Northern Lights" class="w3-margin-bottom">
            </div>
            <div class="w3-half">
              <img src="./W3.CSS Template_files/nature.jpg" style="width:100%" alt="Nature" class="w3-margin-bottom">
          </div>-->*/
        '</div>'+
        '<div id="comentarios" style="display:none;"><label>'+postComentario(element.comentarioTrabalho)+'</label></div>'+
        
      '</div>');

			let f1 		= $('<label id="mostraComentarios" type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i> &nbsp;Like</label>');

        	//let f2 		= $('<button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i> &nbsp;Comment</button>');

        	//let fullF	= $('');
        	var status = false;

        	f1.on('click', ()=>
            {
                //console.log('event triggered', element);
                
                new verComentarios(newEl,coment,cmtId);
                //idPublicacao = 
                
                
            })

			tr.append(f1);

			$('#trabalhosList').append(tr);
		  		

	});


		//document.getElementById('id01').style.display='block';
		//document.getElementById("mySidenaverfil").style.width = "100%";
}

const postAutor = function(a)
{

	console.log("#1 "+a)

	var nome,fotoLink, user;


	todosUtilizadores.forEach(element =>
	{
		if (element.id == a ) 
		{

			const newUser =
			    {
			    	
			        nome : element.nomeU,
			        foto : element.linkPerfil
			       
			    }

			    user = newUser;

			console.log("#2 "+element.nomeU)
			nome 		= element.nomeU;
			fotoLink 	= element.linkPerfil;
		}
	});

	return user;
}

const postComentario = function(oComentario)
{
	var comentario ="";
	todosComentarios.forEach(element =>
	{
		if (element.idComentario == oComentario ) 
		{
			comentario = element.textoComentario

			/*const newUser =
			    {
			    	
			        nome : element.nomeU,
			        foto : element.linkPerfil
			       
			    }

			    user = newUser;

			console.log("#2 "+element.nomeU)
			nome 		= element.nomeU;
			fotoLink 	= element.linkPerfil;*/
		}
		
	});

	return comentario;
}

renderComentarios();
renderTrabalhadores();
renderTrabalhos();

var now = (function () {
    var year = new Date(new Date().getFullYear().toString()).getTime();
    return function () {
        return Date.now() - year
    }
})();


const login = function()
{
	//alert(firebase.auth.currentUser.email);
	//firebase.auth().signInWithEmailAndPassword("joaoalbertojose96@gmail.com","joaojoao");
}

const verComentarios = function(element,arrayComentario, idPost)
{
	var arrayComentario1 = arrayComentario.split(";"); 
	arrayComentario2 = arrayComentario;
	idP = idPost;
	const idP1 = idPost;
	openNaverfil()
	let tr,coments, allComents;
	const user = postAutor(element.id_user);
	allComents = $('<div class="w3-container w3-card w3-white"</div>');
	var c ="";

	for (var i=0; i< arrayComentario1.length-1; i++)
	{

		c =postComentario(arrayComentario1[i]);

		coments = $('<div class="w3-container w3-card w3-deep-orange w3-round w3-margin"><br>'+
        '<img src="'+user.foto+'" alt="Avatar" class="w3-left  w3-margin-right" style="width:40px;">'+
        
        '<h4 id="nomePublicado">'+user.nome+'</h4><br>'+
        '<hr class="w3-clear">'+
        '<p id="textoPublicado">'+c+'</p>'+
          '<div class="w3-row-padding" style="margin:0 -16px">'+
            /*<!--<div class="w3-half">
              <img src="./W3.CSS Template_files/lights.jpg" style="width:100%" alt="Northern Lights" class="w3-margin-bottom">
            </div>
            <div class="w3-half">
              <img src="./W3.CSS Template_files/nature.jpg" style="width:100%" alt="Nature" class="w3-margin-bottom">
          </div>-->*/
        '</div>');
		allComents.append(coments);
		console.log("CM "+c);
		
		
		
	}
	

	

	const d = new Date();

			var date = new Date(element.diaTrabalho * 1000);
			var ano = date.getFullYear() - 1969;
			var mes = date.getMonth();
			var dia = date.getDate();
			var hours = date.getHours();
			var minutes = "0" + date.getMinutes();
			var seconds = "0" + date.getSeconds();

			var formattedTime = dia +' '+ months[mes] +' de '+ ano+  ' ' +hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


	tr = $('<div id="mySidenaverfil" class="sidenaverfil modal-content-l01 animate"> <div class="w3-container w3-card w3-white w3-round w3-margin"><br>'+
        '<img src="'+user.foto+'" alt="Avatar" class="w3-left  w3-margin-right" style="width:40px;">'+
        '<span class="w3-right w3-opacity" id="dia">'+formattedTime+'</span>'+
        '<h4 id="nomePublicado">'+user.nome+'</h4><br>'+
        '<hr class="w3-clear">'+
        '<p id="textoPublicado">'+element.textoTrabalho+'</p>'+
          '<div class="w3-row-padding" style="margin:0 -16px">'+
            /*<!--<div class="w3-half">
              <img src="./W3.CSS Template_files/lights.jpg" style="width:100%" alt="Northern Lights" class="w3-margin-bottom">
            </div>
            <div class="w3-half">
              <img src="./W3.CSS Template_files/nature.jpg" style="width:100%" alt="Nature" class="w3-margin-bottom">
          </div>-->*/
        '</div>'+
        
        '<hr>'+
        
      '</div></div>');

	//tr.append(coments);

	
	

	





		

	
	let comentar 	= $('<div class="w3-card w3-round w3-white">'+
            '<div class="w3-container w3-padding">'+
              '<h6 class="w3-opacity">Comentar</h6>'+
              '<input type="text" id="cmtId" name="" contenteditable="true" class="w3-border w3-padding" placeholder="Digite o teu comentário ?" style="width: 100%;" />'+
              
            '</div>'+
          '</div>');
	let btnComentar = $('<button  type="button" class="w3-button w3-theme"> <i class="fa fa-comment"></i> Comentar</button>');
	let fechar 		= $('<div class="w3-card w3-round w3-white" style="text-align:center;"><button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"> Fechar</button><div>');
	
	comentar.append(btnComentar);
	tr.append(allComents);
	tr.append(comentar);
	tr.append(fechar);

	btnComentar.on('click', ()=>
            {
                //console.log('event triggered', element);
                
                guardarComentario(idP1,$('#cmtId').val());
                
                
            })

	fechar.on('click', ()=>
            {
                //console.log('event triggered', element);
                
                closeNaverfil();
                
                
            })

	$('#id01').append(tr);



	
	



}


const guardarComentario = function(idP1,cm)
{

	const cmt = cm;
	var finalCmts ="";
	console.log("gfdg "+cmt);
	if (cmt != "") 
	{
		var idC = ""+Math.floor(Date.now() / 1000);
		console.log("00$$ "+idC);

		newComent = 
		{
			idComentario 	: idC,
			idPublicacao	: idP1,
			textoComentario : cmt
		}

		finalCmts = arrayComentario2 + idC+";";
		alert(idP1);

	db.collection('comentarios').doc(idC).set(newComent).then(() => 
			    {
			        console.log('User Added');
			        //document.getElementById('beWorker').style.display='none';
			        //renderTrabalhadores();
			        
			    
			    }).catch(error =>{
			        console.log('Ocorreu um erro', e);
			    })


	db.collection('trabalhos').doc(idP1).update({comentarioTrabalho:finalCmts}).then(()=>
     		{
     			console.log("Numero Actualizado");
     			//document.getElementById("editLNumero").innerHTML = numero;
     			
     			
     		}).catch(error=>
     		{
     			console.log("Ocorreu um erro" +error);
     			//dialog.close();
     		})

	alert("Guardar comentário");

	}
	else
	{
		alert("O Comentário nao pode ser vazio");
	}
}



//login();