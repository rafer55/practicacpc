Vue.component ('lista',{
    template:
    `<div>
        <ul>
            <li v-for="(nombre, index) in nombres">{{nombre}} <button @click="borrar(index)" >Eliminar</button> <button @click="editarform(index)" >Editar</button> </li> 
        </ul>
    </div>`,
    computed:{
        ...Vuex.mapState(['nombres'])
    },
    methods:{
        ...Vuex.mapMutations(['eliminar']),
        borrar(index){
            this.eliminar(index)
        },
        ...Vuex.mapMutations(['actualiza']),
        editarform(index){
            this.actualiza(index)
        }
    }
})