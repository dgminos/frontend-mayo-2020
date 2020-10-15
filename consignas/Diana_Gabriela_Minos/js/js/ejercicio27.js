
let tragos = [];

function obtenerDrinks() {
    var letter = document.getElementById('letra').value;
    console.log("letra a buscar: " + letter)
    //url de la api
    url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letter
    fetch(url, {
        method: "get"
    })
        .then(response => response.json())
        .then(
            json => {
                guardarDatosDrinks(json)
            })
        .catch(function (err) {
            //en caso de error
        });
}

//defino funcion constructor para construir objetos del mismo tipo con los mismos atributos o propiedades c/u(receta con ingredientes para generar el trago)
function Trago(id, nombre, imagen, video, categoria, instrucciones, tipo_de_vaso, tags, ingredientes) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.video = video;
    this.categoria = categoria;
    this.instrucciones = instrucciones;
    this.tipo_de_vaso = tipo_de_vaso;
    this.tags = tags;
    this.ingredientes = ingredientes;
}

function guardarDatosDrinks(json) {
    console.log("resultado_busqueda a guardar: " + JSON.stringify(json));

    var drinks = json.drinks;

    drinks.forEach(element => {
        console.log("creando objeto para: " + JSON.stringify(element.strDrink));
        var id = element.idDrink;
        var nombre = element.strDrink;
        var imagen = element.strDrinkThumb;
        var video = element.strVideo;
        var categoria = element.strCategory;
        var instrucciones = element.strInstructions;
        var tipo_de_vaso = element.strGlass;
        var tags = element.strTags;
        var ingredientes = [];

        for (let i = 1; i <= 15; i++) {

            if (element["strIngredient" + i] != null)
                ingredientes.push(element["strIngredient" + i]);

        }
        console.log("ingredientes :" + ingredientes);

        //invoco al constructor para crear o instanciar un objeto de tipo trago
        let trago = new Trago(id, nombre, imagen, video, categoria, instrucciones, tipo_de_vaso, tags, ingredientes);
        console.log("nuevo trago: " + JSON.stringify(trago))
        tragos.push(trago);

    });

    console.log("tragos encontrados: " + JSON.stringify(tragos));

    order(tragos);
    crearCards(tragos)
}

function order(tragos) {
    tragos.sort(function (a, b) {
        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1;
        }
        return 0;
    });
}

function crearCards(tragos) {
    var resultado = '';
    tragos.forEach(elemento => {
        resultado = resultado +
            `<div class="col-md-4 my-3">
    <div class="card" style="height:100%;background-color: #ffe6ff">
        <img class="card-img-top" src="${elemento.imagen}" alt="Card image cap">
        <div class="card-body text-center">
        <h2 class="card-title titles"> Name: ${elemento.nombre} </h2>
        <h4 class="card-title titles"> Category: ${elemento.categoria} </h4>
        <h4 class="card-title titles"> <i class="fas fa-glass-cheers"></i> Glass: ${elemento.tipo_de_vaso} <i class="fas fa-glass-cheers"></i> </h4>
        <p class="card-text">ID: ${elemento.id}</p>
        <h5 class="card-text">Ingredients: ${elemento.ingredientes}</h5>
        <h5 class="card-text">Instructions: ${elemento.instrucciones}</h5>
        <p class="card-text">Tags: ${elemento.tags}</p>
        <p class="card-text center">Video: <br><button type="button" class="btn btn-dark video-btn mt-3" data-toggle="modal" data-src="${elemento.video}"data-target="#myModal">
         Ver video
      </button></p>
        </div>
    </div>    
    </div>`
    });

    console.log("html generado : " + resultado);

    document.getElementById('cartas').innerHTML = resultado;

    $(document).ready(function () {

        // Gets the video src from the data-src on each button

        var $videoSrc;
        $('.video-btn').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#myModal').on('shown.bs.modal', function (e) {

            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })



        // stop playing the youtube video when I close the modal
        $('#myModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            $("#video").attr('src', $videoSrc);
        })






        // document ready  
    });
}
        //document.getElementById('video').insertAdjacentHTML("beforeend").innerHTML = resultado;

        //crearParrafoTagsCardsHtml(objeto)




