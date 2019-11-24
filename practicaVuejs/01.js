const app = new Vue({
    el: '#app',
    data:{
        titulo: "mi primer componente de vue",
        actividades:[],
        nuevaActividad:''
    },
    methods:{
        agregarActividad: function(){
            this.actividades.push(this.nuevaActividad);
            this.nuevaActividad='';
        },
        eliminarActividad: function(index){
            this.actividades.splice(index,1);
        }
    }
});