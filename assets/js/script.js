const IIFE = (()=>{
	let videoMusica = document.getElementById('musica');
	let videoPelicula = document.getElementById('peliculas');
	let videoSerie = document.getElementById('series');

	return {
		insertarMusica: () => {
				videoMusica.insertAdjacentHTML('afterBegin','<iframe width="560" height="315" src="https://www.youtube.com/embed/MKpCDz0UjW4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
		},

		insertarPelicula: () => {
				videoPelicula.insertAdjacentHTML('afterBegin','<iframe width="560" height="315" src="https://www.youtube.com/embed/ru2yzJUbbhY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
		},

		insertarSerie: () => {
				videoSerie.insertAdjacentHTML('afterBegin','<iframe width="560" height="315" src="https://www.youtube.com/embed/7DmIrCgCzOA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
		}
	}

})();

class Video{
	constructor(videoMusica, videoPelicula, videoSerie){
		let _videoMusica = videoMusica;
		let _videoPelicula = videoPelicula;
		let _videoSerie = videoSerie;
		this.getVideoMusica = () => _videoMusica;
		this.getVideoPelicula = () => _videoPelicula;
		this.getVideoSerie = () => _videoSerie;
	}

	get videoMusica(){
		return IIFE.insertarMusica();
	}	
	get videoPelicula(){
		return this.getVideoPelicula;
	}	
	get videoSerie(){
		return this.getVideoSerie;
	}

	mostrarMusica(){
		return videoMusica();
	}

	mostrarPelicula(){
		return videoPelicula();
	}

	mostrarSerie(){
		return videoSerie();
	}
}

class Musica extends Video{
	constructor(videoMusica, videoPelicula, videoSerie){
		super(videoMusica, videoPelicula, videoSerie);
	}

	mostrarMusica(){
		return videoMusica();
	}
}
class Pelicula extends Video{
	constructor(videoMusica, videoPelicula, videoSerie){
		super(videoMusica, videoPelicula, videoSerie);
	}

	mostrarPelicula(){
		return videoPelicula();
	}
}
class Serie extends Video{
	constructor(videoMusica, videoPelicula, videoSerie){
		super(videoMusica, videoPelicula, videoSerie);
	}

	mostrarSerie(){
		return videoSerie();
	}
}