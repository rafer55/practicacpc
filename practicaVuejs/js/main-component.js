Vue.component('main-component',{
    template:
    `<div class="container mt-3">
            <div class="row">
                <div class="col-8">
                    <h5>Profile Creator</h5>
                    <input type="text" v-model="usuario.nombre" class="form-control mb-3" placeholder="juan">
                    <input type="text" v-model="usuario.apellido" class="form-control mb-3" placeholder="Gomez">
                    <span>Telefono</span>
                    <input type="number" v-model="usuario.telefono" class="form-control mb-3" @keyup.enter="createProfile()">
                    <button class="btn-block btn-outline-primary btn" @click="createProfile()" @keyup.enter="createProfile()">
                        Create
                    </button>
                </div>
                <div class="col-4">  
                    <profiles :profiles="usuarios">                  
                    </profiles>
                </div>
            </div>
    </div>`,
    data: function(){
        return{
            usuario:{
                nombre:'',
                apellido:'',
                telefono:0
            },
            usuarios:[]
        }
    },
    methods:{
        createProfile: function(){
            this.usuarios.push({
                nombre:  this.usuario.nombre,
                apellido:this.usuario.apellido,
                telefono:this.usuario.telefono
            })
            this.usuario.nombre='';
            this.usuario.apellido='';
            this.usuario.telefono=0;
            localStorage.setItem('usuarios',JSON.stringify(this.usuarios));

        },
        actualizado: function(index){
            this.usuarios.splice(index,1);
        }
        
    },
})