

let datos = [];
let categoria = [];
let resultado = '';

function obtenerListaCategorias() {
    //url de la api
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php", {
        method: "get"
    })
        .then(response => response.json())
        .then(
            json => guardarDatosCategorias(json)
        )
        .catch(function (err) {
            //en caso de error
        });
}
function guardarDatosCategorias(data) {
    data.categories.forEach(element => {
        datos.push({
            'id': element.idCategory,
            'categoria': element.strCategory,
            'imagen': element.strCategoryThumb,
            'descripcion': element.strCategoryDescription
        })
    });
    console.log(datos);
    datos.sort(compare);
    carta();
}

function carta() {
    datos.forEach(elemento => {
        resultado +=
            `<div class="col-8 col-md-5 my-3">
    <div class="card" style="height:100%;background-color:coral">
        <img class="card-img-top" src="${elemento.imagen}" alt="Card image cap">
        <div class="card-body text-center">
        <h2 class="card-title titles"> ${elemento.categoria} </h2>
        <p class="card-text">${elemento.descripcion}</p>
        <p class="card-text">${elemento.id}</p>
        </div>
    </div>    
    </div>`
    });
    console.log(resultado);

    var data = (document.getElementById('cartas').innerHTML = resultado);
}

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const categoriaA = a.categoria.toUpperCase();
    const categoriaB = b.categoria.toUpperCase();


    let comparison = 0;
    if (categoriaA > categoriaB) {
        comparison = 1;
    } else if (categoriaA < categoriaB) {
        comparison = -1;
    }
    return comparison * -1;
}

