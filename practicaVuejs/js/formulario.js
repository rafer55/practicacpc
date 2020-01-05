Vue.component ('formulario',{
    template:
    `<div>
        <h5>Registrar personas con Vuex</h5>
        <div v-if="!actualizar.nombre">
        <input type="text" v-model="nombre" @keyup.enter="agregar">
        <button @click="agregar">Agregar</button>
        </div>
        <div v-else>
            <input type="text" v-model="actualizar.nombre" @keyup.enter="actualizarennombres">
            <button @click="actualizarennombres">Actualizar</button>
        </div>
        <p>
            <lista></lista>
        </p>
    </div>`,
    data(){
        return{
            nombre:'',
        }
    },
    computed:{
        ...Vuex.mapState(['nombres']),
        ...Vuex.mapState(['actualizar'])
    },
    methods:{
        ...Vuex.mapMutations(['guardar']),
        agregar(){
            this.guardar(this.nombre)
            this.nombre=''
        },
        ...Vuex.mapMutations(['actualizando']),
        actualizarennombres(){
            this.actualizando()
        }
    }
})