//Função que executa a parte dos albuns do codigo
function Album(){

  //usado para pegar apenas o id do album
	var id = window.location.href.replace('https://www.deezer.com/br/album/','');

	//pega a classe que está abaixo do titulo do album
	var dir = window.document.getElementsByClassName("_2kEwD ellipsis");

  //Procura no repositorio do github um desc.txt na pasta com o id do album
	var url = 'https://raw.githubusercontent.com/LucasPB710/BetterDeezer/master/albuns/'+id+'/desc.txt';
	var text = "a";

  //Coloca o texto no site
	fetch(url).then(function(response){
		response.text().then(function(_text){
			text = _text;
			dir[0].insertAdjacentHTML('afterend',"<p>"+text+"</p>");
		});
	});

}

function Artist(){

  //usado para pegar apenas o id d artist
	var id = window.location.href.replace('https://www.deezer.com/br/artist/','');

	//pega a classe que está abaixo da quantidade de seguidores
	var dir = window.document.getElementsByClassName("_2kEwD ellipsis");

  //Procura no repositorio do github um desc.txt na pasta com o id d artist
	var url = 'https://raw.githubusercontent.com/LucasPB710/BetterDeezer/master/artistas/'+id+'/desc.txt';
	var text = "a";

  //Coloca o texto no site
	fetch(url).then(function(response){
		response.text().then(function(_text){
			text = _text;
			dir[0].insertAdjacentHTML('afterend',"<p>"+text+"</p>");
		});
	});

}

//Quando a pagina tiver carregado, inicia as funções
window.onload = function(){
  if(window.location.href.includes("album"))
    setTimeout(Album,2000);
  else if(window.location.href.includes("artist"))
    setTimeout(Artist,2000);
  else {
    setTimeout(alert(1),2000);
  }
  setTimeout(declarar,200);
}

//Coloca a função expandir dentro de um <script> no site
function declarar(){
	var script = document.createElement('script');
	script.innerHTML = `
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
	`
	document.head.appendChild(script);
}
