const app = new Vue({
    el: '#app',
    data:{
        titulo: "mi primer componente de vue",
        actividades:[],
        nuevaActividad:'',
        actividadActual:'',
        actividadactualizada:''
    },
    methods:{
        agregarActividad: function(){
            this.actividades.push(this.nuevaActividad);
            this.nuevaActividad='';
            localStorage.setItem('actividades',JSON.stringify(this.actividades));
        },
        eliminarActividad: function(index){
           let datos = JSON.parse(localStorage.getItem('actividades'));
           datos.splice(index,1);
           localStorage.setItem('actividades',JSON.stringify(datos));
           this.actividades.splice(index,1);
        },
        actualizarActividad: function(index){
            //carga la actividad seleccionada al form
            let datos = JSON.parse(localStorage.getItem('actividades'));
            this.actividadActual = datos[index];
         },
         actualizaActividad: function(index){
             //actualizar la actividad en local storage y data
            let datos = JSON.parse(localStorage.getItem('actividades'));
            //datos[index]= this.actividadactualizada;
            //console.log(datos[index]);

         }
    },
    create: function(){
        let datos = JSON.parse(localStorage.getItem('actividades'));        
    }
});