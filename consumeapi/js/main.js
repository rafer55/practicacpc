window.addEventListener("load", loadEvents);
function loadEvents(){
    let url = 'http://localhost:8000/clientes';
    fetch(url, {
        method: 'GET'
    }).then(res=> res.json())
    .then(response =>{
        mapear(response);
        sendPost();
    })
}
function mapear(res){
    res.map(registro =>{
        datos.innerHTML += `<tr>
        <td>${registro.nombre}</td>
        <td>${registro.apellido}</td>
        <td>${registro.email}</td>
        <td>${registro.telefono}</td>
        <td><button class="btn btn-secondary" value="${registro.id}">Editar</button></td>
        <td><button class="btn btn-danger" value="${registro.id}">Editar</button></td>
        </tr>`;
    })
}

/* ----- POST section----- */
function sendPost(){
    
    var formulario = document.getElementById('form');
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        let data = new FormData(formulario);
        let url = 'http://localhost:8000/clientes';
        console.log(data);
        fetch(url, {
            method: 'POST',
            body: data
        }).then(res =>res.text())
        .then(response =>{
            console.log(response);
            formulario.reset();
        })
})}
/* ----- End POST section----- */