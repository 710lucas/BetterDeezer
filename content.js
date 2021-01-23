

function teste(){

	var id = window.location.href.replace('https://www.deezer.com/br/album/','');
	var dir = window.document.getElementsByClassName("_2kEwD ellipsis");

	var url = 'https://raw.githubusercontent.com/LucasPB710/BetterDeezer/master/'+id+'/desc.txt';
	var text = "a";

	fetch(url).then(function(response){
		response.text().then(function(_text){
			text = _text;
			dir[0].insertAdjacentHTML('afterend',"<p>"+text+"</p>");
		});
	});

}
window.onload = function(){
//alert("DEEZER");
//alert(url);

setTimeout(teste,2000);

}
