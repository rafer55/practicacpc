Vue.component('componente-padre',{
    template:
    `<div>
        <h5 class="text-primary">{{titulo}}</h5>{{frutaactual.nombre}} - {{frutaactual.cantidad}}
        <div v-if="!frutaactual.nombre">
            <input type="text" v-model="fruta.nombre" class="form-control" v-on:keyup.enter="agregarFruta">
            <button class="btn btn-block btn-success" @click="agregarFruta">Agregar Fruta</button><br>
        </div>
        <div v-else>
            <input type="text" v-model="frutaactual.nombre" :value="frutaactual.nombre" class="form-control" v-on:keyup.enter="editarFruta">
            <button class="btn btn-block btn-success" @click="editarFruta">Editar Fruta</button><br>
        </div>
        <div class="alert alert-success" v-for="(frut, index) in frutas">
        {{frut.nombre}} - {{frut.cantidad}}
        <button class="btn btn-info" @click="frut.cantidad++">+</button>
        <button class="btn btn-info" @click="frut.cantidad--">-</button>
        <button class="btn btn-info" @click="eliminarFruta(index)">Eliminar</button>
        <button class="btn btn-info" @click="cargaEditaFruta(index)">Editar</button>
        </div>
    </div>`,
    data(){
        return{
            titulo:'Ejemplo de componentes',
            frutas:[],
            fruta:{
                nombre:'',
                cantidad:0
            },
            frutaactual:{
                nombre:'',
                cantidad:0,
                index:0
            },
        }
    },
    methods:{
        agregarFruta: function(){
            this.frutas.push({
                nombre: this.fruta.nombre,
                cantidad: this.fruta.cantidad
            });
            this.fruta.nombre='';
        },
        eliminarFruta: function(index){
            this.frutas.splice(index,1);
        },
        cargaEditaFruta: function(index){
            //carga la fruta seleccionada
            this.frutaactual = this.frutas[index];
            this.frutaactual.index = index;
            console.log(this.frutaactual);
        },
        editarFruta: function(){
            //elimina la data
            this.frutas.splice(this.frutaactual.index,1,this.frutaactual);

            
            this.frutaactual=[];
        }
    }
});

const app = new Vue({
    el: '#app',
    data:{

    }
});