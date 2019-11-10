window.addEventListener("load", cargarevento);
function cargarevento(){  
   fetch("http://localhost:8000/clientes",{
        method:"GET",
      //  header: cabecera
    }).catch(error=>console.error(error))
    .then(rest=>rest.json())
    .then(response=>{
        console.log(response);
        //ingresarapi();
       // mapear(response);
        var respuesta = response.map(function(reg){
            return reg.nombre;
        });
        console.log(respuesta);
        mapear(respuesta);
        
    });    
}
// function ingresarapi(){
//     var fomulario = document.getElementById("mainform");
//     formulario.addEventListener("submit")
// }

function mapear(respuesta){
    var registros= respuesta;
    var tabla = document.getElementById("regis");
    Map(registros=>function(registro){
        tabla.nombre.innerHTML=registro.nombre;
        tabla.apellido.innerHTML=registro.apellido;
        tabla.email.innerHTML=registro.email;
        tabla.telefono.innerHTML=registro.telefono;
    });
    //console.log(response.legth);
}