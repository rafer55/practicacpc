Vue.component('profiles',{
    template:
    `<div>
        <div class="alert alert-info mt-2 mb-2" role="dialog" v-for="(perfil, index) in profiles">
            {{perfil.nombre}} {{perfil.apellido}} {{perfil.telefono}} <button class=" btn-danger btn" @click="deleteProfile(index)" @keyup.enter="deleteProfile(index)">borrar</button>
        </div>
     </div>
    `,
    props:['profiles'],
    methods:{
            deleteProfile: function(index){                
            let datos = JSON.parse(localStorage.getItem('usuarios'));
            datos.splice(index,1);
            localStorage.setItem('usuarios',JSON.stringify(datos));
            this.$parent.actualizado(index);
            
        }
    }
})