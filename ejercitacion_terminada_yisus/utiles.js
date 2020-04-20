let secciones = {
   // Genera un listado de elementos en formato html
   // Se mostrarán todos los atributos del elemento especificados en el parámetro Rest
   // (...atributos)
   ListadoEnFormatoHtml: function(arr, ...atributos){
      let i = 0;
      let objeto = arr[i];
      let html ="";
      do { // itero por el array de objetos
         for (var a = 0; a < atributos.length; a++) { // itero por los atributos que viene por parametro
            for (var name in objeto) { // itero por los atributos del objeto
               if (objeto.hasOwnProperty(name) && atributos[a] == name) { // si ambos coinciden
                  objeto = arr[i];
                  html = html + '<p>' + objeto[name] + '<p>'; // armamos el html
               }
            }
         }
         html = html + "<br>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br>"
         i++;
      } while (i < arr.length);
      return html;
   },
   // Creamos el listado en html para la sección "Más Votadas" (puntaje >= 7)
	cantidadMasVotadas: 0,
	listarMasVotadas: function(arr){
		let listaFiltrada = arr.filter(objeto => objeto.vote_average >= 7); // filtramos
		this.cantidadMasVotadas = listaFiltrada.length;
		let html="";
		for (var i = 0; i < listaFiltrada.length; i++) {
			if(html != ""){
				html = `${html} <br>
				<h5> ${listaFiltrada[i].title} (Rating ${listaFiltrada[i].vote_average}):</h5>
				<p>${listaFiltrada[i].overview}</p>`;
				html = html + "<br>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br>"
			}else{
				html = `<h5>${listaFiltrada[i].title} (Rating ${listaFiltrada[i].vote_average}):</h5>
				<p>${listaFiltrada[i].overview}</p>`;
				html = html + "<br>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br>"
			}
		}
		return html;
	},
   // Creamos el listado en html para la sección "Sucursales"
	listadoSucursalesHtml: function(theaters){
		let html ="";
		let i = 0;
		do {
			html = html + '<h5>' + theaters[i].name + '</h5>';
			html = html + `<p>Dirección: ${theaters[i].address}</p>`;
			html = html + `<p>Descripción: ${theaters[i].description}</p>`;
			html = html + `<p>Cantidad de Salas: ${theaters[i].total_rooms}</p>`;
			i++;
		} while (i < theaters.length);
		return html;
	},
   // Obtenemos la cantidad total de salas que hay entre todas las sucursales
	totalSalas: function(theaters) {
		let total = theaters.reduce(function (accumulator, objetoActual) {
	    		return accumulator + objetoActual.total_rooms;
		},0);
		return total;
	},
   // Armamos un footer en HTML
   footer: `<p>
   <a href="/"> >Home</a><br>
   <a href="/en-cartelera"> >En Cartelera</a><br>
   <a href="/mas-votadas"> >Más Votadas</a><br>
   <a href="/sucursales"> >Sucursales</a><br>
   <a href="/contacto"> >Contacto</a><br>
   <a href="/preguntas-frecuentes"> >Preguntas Frecuentes</a></p>`
};
module.exports = secciones;

// Funciones que fueron reemplazadas por la función ListadoEnFormatoHtml()
// Creamos el listado de peliculas en html (sólo nombres), para la sección Home
/*function listar(array){
   let list="";
   for (var i = 0; i < array.length; i++) {
      list != "" ? list = list + "<br>" + array[i].title : list = "\n" + array[i].title;
   }
   return list;
}*/
// Creamos el listado en html para la sección "En Cartelera" (nombre y reseña)
/*function listarEnCartelera(array){
   let list="";
   for (var i = 0; i < array.length; i++) {
      if(list != ""){
         list = `${list} <br> <h5>${array[i].title}:</h5><p>${array[i].overview}</p>`;
      }else{
         list = `<h5>${array[i].title}:</h5><p>${array[i].overview}</p>`;
      }
   }
   return list;
}*/
// Creamos el listado en html de Faqs
/*function listadoFaqsHtml(){
   let html ="";
   let i = 0;
   do {
      html = html + '<h5>' + faqs[i].faq_title + '</h5>';
      html = html + `<p>${faqs[i].faq_answer}</p>`;
      i++;
   } while (i < faqs.length);
   return html;
}*/
