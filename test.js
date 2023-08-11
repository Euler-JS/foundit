function alo(){

	let allWorkslinks = ["a","b","c"]; 

for (var i = 0; i < allWorkslinks.length; i++) 
	{
		var tb = allWorkslinks[i];
		
		let a = $('<h2 id="'+tb+'">'+allWorkslinks[i]+'</h2>');
		

		a.on('click', () =>
							{
								//alert(element.id);
								//alert("0 "+tb);
								hy(tb);
								
							});
		

		$("#op").append(a);

		/*let e = $('<label onclick="hy()">A</label>')
		$("#op").append(e);*/					
	}

}


const hy = function(g)
{
	alert(g)
}
alo();