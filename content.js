

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

function expandir(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btn = document.getElementById("exp_btn");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        btn.innerHTML = "Ler Mais";
        maisTexto.style.display = "none";
    }
    else{
            pontos.style.display = "none";
            btn.innerHTML = "Ler menos";
            maisTexto.style.display = "inline";
    }
}
