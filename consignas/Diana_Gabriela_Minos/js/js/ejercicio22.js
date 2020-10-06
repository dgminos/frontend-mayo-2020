
//MÉTODO BÁSICO PARA OBTENER DATOS DE API.
function obtenerData() {
    //url(required), options(opcional)
    fetch('https://apis.datos.gob.ar/georef/api/ubicacion?lat=27.2741&lon=66.7529', {
        method: 'get' // metodos disponibles: GET(obtener), POST(agregar), PUT/PATCH(actualizar), DELETE(eliminar), HEAD
    }).then(function (response) {
        let data = response
    }).catch(function (err) {
        //error
    });
}

//MÉTODO BÁSICO PARA OBTENER DATOS DE API CON AUTORIZACIÓN.
function obtenerData_basico_con_autorizacion() {
    userAccessToken = "" //lo que me diga la api de spotify que es el token
    //url(required), options(opcional)
    fetch('https://api.spotity.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb', {
        method: 'get',
        headers: {
            Authorization: `Bearer ${userAccessToken} `
        }
    }).then(response => response.json())
        .then * ({ beats }()) => {
        beats.forEach((beat, index) => {
            console.log(`Beat ${index} starts at ${beat.start}`);
        });
    }
}

function obt() {
    userAccessToken = 'curl -X "GET" https://api.spotify.com/v1/me/playlists" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAw7tTwIugr1Hrm9xGTzDTyftjX0Vlwq9mANyHUHSVeb8pEbs-SxBifoQg9m7ayytIebyA0NG9dXbU2Ji3-xLvabO6dK1lkSvy18WvkmtmCr-kh_6kJIIwlHjz1TkdPNMmsW576IhGD1t6zYkof3jEJhpWsjo_up7KWysnxKuCFOl2C4g8onjcMoE4USBkm6BpLEncGvWPje9YAJ_7eKocJyIPXyIJtIbbXo_Ve6eg_ZDdgL396Ze2fxWKfElCEQ2WVga6bgBFgrGeSYJQeAw"'
    //url(required), options(opcional)
    fetch('https://api.spotify.com/v1/me/playlists', {
        method: 'get',
        headers: {
            Authorization: `Bearer ${userAccessToken} `
        }
    })
        .then(function (response) {
            let data = response
            console.log(data)
        }).catch(function (err) {
            //error
        })
}

