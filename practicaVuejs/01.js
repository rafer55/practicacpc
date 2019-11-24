const app = new Vue({
    el: '#app',
    data:{
        titulo: "mi primer componente de vue",
        actividades:[],
        nuevaActividad:'',
        actividadActual:''
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
            let datos = JSON.parse(localStorage.getItem('actividades'));
            this.actividadActual = datos[index];
            //datos.splice(index,1);
            //localStorage.setItem('actividades',JSON.stringify(datos));
            //this.actividades.splice(index,1);
         }
    },
    create: function(){
        let datos = JSON.parse(localStorage.getItem('actividades'));        
    }
});