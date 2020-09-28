const IIFE = (()=>{
	let videoMusica = document.getElementById('musica');
	let videoPelicula = document.getElementById('peliculas');
	let videoSerie = document.getElementById('series');
	let miMetodoPrivado;

	musicaPrivate = ( musica ) => {
		//console.log( musica );
		videoMusica.insertAdjacentHTML('afterBegin', musica);

	};

	peliculaPrivate = ( pelicula ) => {
		//console.log( pelicula );
		videoPelicula.insertAdjacentHTML('afterBegin', pelicula);

	};

	seriePrivate = ( serie ) => {
		//console.log( serie );
		videoSerie.insertAdjacentHTML('afterBegin', serie);
	};


	return {
		insertarMusica: ( musica ) => {
			musicaPrivate(musica);
		},

		insertarPelicula: ( pelicula ) => {
			peliculaPrivate(pelicula);
		},

		insertarSerie: ( serie ) => {
			seriePrivate(serie);
		}
	}

})();

//Public variables
let videoMusicaPublic = '<iframe width="560" height="315" src="https://www.youtube.com/embed/MKpCDz0UjW4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
let videoPeliculaPublic = '<iframe width="560" height="315" src="https://www.youtube.com/embed/ru2yzJUbbhY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
let videoSeriePublic = '<iframe width="560" height="315" src="https://www.youtube.com/embed/7DmIrCgCzOA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';


class Video{
	constructor(videoMusica, videoPelicula, videoSerie){
		let _videoMusica = videoMusica;
		let _videoPelicula = videoPelicula;
		let _videoSerie = videoSerie;
		console.log(_videoMusica);
		console.log(_videoPelicula);
		console.log(_videoSerie);
		this.getVideoMusica = _videoMusica;
		this.getVideoPelicula = _videoPelicula;
		this.getVideoSerie = _videoSerie;
	}

	get videoMusica(){
		return this.getVideoMusica;
	}	
	get videoPelicula(){
		return this.getVideoPelicula;
	}	
	get videoSerie(){
		return this.getVideoSerie;
	}

	mostrarMusica(){
		return IIFE.insertarMusica(this.getVideoMusica);
	}

	mostrarPelicula(){
		return IIFE.insertarPelicula(this.getVideoPelicula);
	}

	mostrarSerie(){
		return IIFE.insertarSerie(this.getVideoSerie);
	}
}

class Musica extends Video{
	constructor(videoMusica, videoPelicula, videoSerie){
		super(videoMusica, videoPelicula, videoSerie);
		console.log(videoMusica);
		//console.log(videoPelicula);
	}

	mostrarMusica(){
		return IIFE.insertarMusica(this.getVideoMusica);
	}
}
class Pelicula extends Video{
	constructor(videoMusica, videoPelicula, videoSerie){
		super(videoMusica, videoPelicula, videoSerie);
		//console.log(videoPelicula);
	}

	mostrarPelicula(){
		return IIFE.insertarPelicula(this.getVideoPelicula);
	}
}
class Serie extends Video{
	constructor(videoMusica, videoPelicula, videoSerie){
		super(videoMusica, videoPelicula, videoSerie);
		//console.log(videoSerie);
	}

	mostrarSerie(){
		return IIFE.insertarSerie(this.getVideoSerie);
	}
}

//let video = new Video(videoMusicaPublic, videoPeliculaPublic, videoSeriePublic);
let musica = new Musica(videoMusicaPublic, videoPeliculaPublic, videoSeriePublic);
musica.mostrarMusica();


let pelicula =  new Pelicula(videoMusicaPublic, videoPeliculaPublic, videoSeriePublic); 
pelicula.mostrarPelicula();

let serie = new Serie(videoMusicaPublic, videoPeliculaPublic, videoSeriePublic);
serie.mostrarSerie();

//IIFE.insertarMusica("https://www.youtube.com/embed/MKpCDz0UjW4");