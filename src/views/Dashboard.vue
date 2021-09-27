<template>
  <div>
      <Header/>
      <h1>Lista de Pacientes</h1>
      <div class="container izquierda">
        <button class="btn btn-primary" v-on:click="nuevo()" >Nuevo paciente</button>
                <br><br>

          <div class="row">
          <table class="table table-bordered">
    <thead>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>DNI</th>
        <th>Telefono</th>
        <th>Correo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="paciente in listapacientes" :key="paciente.PacienteId" v-on:click="editar(paciente.PacienteId)">
        <td>{{paciente.PacienteId}}</td>
        <td>{{paciente.Nombre}}</td>
        <td>{{paciente.DNI}}</td>
        <td>{{paciente.Telefono}}</td>
        <td>{{paciente.Correo}}</td>
      </tr>
    </tbody>
  </table> 
  </div>
      </div>
      
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios';
export default {
    name:"Dashboard",
    data(){
        return{
            listapacientes: null,
            paginas:1
        }
    },
        components:{
            Header,
            Footer
        },
    methods:{
        editar(id){
            this.$router.push('/editar/' + id)
        },
        nuevo(){
                this.$router.push('/nuevo');
            }
    },
    mounted: function(){
        let direccion = "http://localhost/APIPHPMYSQL/pacientes?page=" + this.paginas;
        axios.get(direccion).then( data =>{
            this.listapacientes = data.data;
            // console.log(data)
        })
    }
}
</script>

<style scoped>
.izquierda{
        text-align: left;
    }
</style>