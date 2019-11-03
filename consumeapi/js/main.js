window.addEventListener("load", cargarevento);
function cargarevento(){
    var cabecera = new Headers();
    cabecera.append('Host','localhost:8000');
    cabecera.append('Date','Sun, 03 Nov 2019 15:10:29 +0000');
    cabecera.append('Date','Sun, 03 Nov 2019 15:10:29 GMT');
    cabecera.append('Connection','close');
    cabecera.append('X-Powered-By','PHP/7.3.2');
    cabecera.append('Cache-Control','no-cache, private');
    cabecera.append('Content-Type','application/json');
    cabecera.append('Set-Cookie','XSRF-TOKEN=eyJpdiI6ImVzSkZtbys0Z1g1SW1rbVF3WU1CcGc9PSIsInZhbHVlIjoiaDU4SE91MFRVVmlhTUx2RUIrZWtucFFLSmRnbUJ0blMyN1RadzYwM2pTTjQxYjVOdkthWFBIU21WOTRCejVnbyIsIm1hYyI6Ijg4YTIyNjFlOGY4YjA2MjA0YjJkMDJlMzAyZjJlZWQwY2U2YjVmYTlmMjExMWIzZDdmNGNkM2FlZDRkNzM2MzgifQ%3D%3D; expires=Sun, 03-Nov-2019 17:10:29 GMT; Max-Age=7200; path=/');
    cabecera.append('Set-Cookie','laravel_session=eyJpdiI6InNQS1NNKzNDK0F1YllNTExBck9IeUE9PSIsInZhbHVlIjoiRHNGcnNiWFhlQVY0SGhTSTNDT3hXWmRuOGdaQ3MyNzd4dWUyWng4MHNjUVpjTldZbmV0cmdMZ0xVRkhlUUpXNyIsIm1hYyI6IjAzMGRkNjhjMmIyZTVlYWMzODdkMjg4MmIyODNmZWQ3OTEyMzlhYTI5NzQxMDE4ZTcyODExYTEyMTQxMjVmZDQifQ%3D%3D; expires=Sun, 03-Nov-2019 17:10:29 GMT; Max-Age=7200; path=/; httponly');
    fetch("http://localhost:8000/clientes",{
        method:"GET",
        header: cabecera
    }).catch(error=>console.error(error))
    .then(rest=>rest.json())
    .then(response=>{
        console.log(response);
        ingresarapi();
    })    
}
function ingresarapi(){
    var fomulario = document.getElementById("mainform");
    formulario.addEventListener("submit")
}