<template>
  <div>
      <Header/>
      <div class="container">
      <h1>Editar Paciente</h1>
        <div class="container">
                <form action="" class="form-horizontal">
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Nombre</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="nombre" id="nombre" v-model="pacientesform.nombre">
                       </div>
                    </div>
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Direccion</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="direccion" id="direccion" v-model="pacientesform.direccion">
                       </div>
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Correo</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="correo" id="correo" v-model="pacientesform.correo">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">codigo Postal</label>
                          <div class="col-sm-7">
                              <input type="text" class="form-control" name="codigopostal" id="codigopostal" v-model="pacientesform.codigoPostal">
                          </div>
                        </div> 
                    </div>
                    <div class="form-group left row">
                         <div class="col">
                            <label for="" class="control-label col-sm-2">Genero</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="genero" id="genero" v-model="pacientesform.genero">
                            </div>
                          </div>
                         <div class="col">
                              <label for="" class="control-label col-sm-2">Telefono</label>
                              <div class="col-sm-7">
                                  <input type="text" class="form-control" name="telefono" id="telefono" v-model="pacientesform.telefono">
                              </div>
                        </div>
                    </div>
                    <div class="form-group left">
                        <label for="" class="control-label col-sm-2">Fecha nacimiento</label>
                       <div class="col-sm-4">
                          <input type="text" class="form-control" name="fechanacimineto" id="telefono" v-model="pacientesform.fechaNacimiento">
                       </div>
                    </div>


                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click="editar()" >Editar</button>
                      <button type="button" class="btn btn-danger margen" v-on:click="eliminar()" >Eliminar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>
            </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
export default {
name:"editar",
components:{
            Header,
            Footer
        },
        data:function(){
            return{
                pacienteId:null,
                pacientesform:{
                    "pacienteId" : "",
                    "nombre" : "",
                    "direccion" : "",
                    "dni" : "",
                    "correo":"",
                    "codigoPostal" :"",
                    "genero" : "",
                    "telefono" : "",
                    "fechaNacimiento" : "",
                    "token" : ""
                }
            }
        },
         methods:{
      editar(){
          axios.put("http://localhost/APIPHPMYSQL/pacientes",this.pacientesform)
          .then( data =>{
              console.log(data);
          })
      },
      salir(){
        this.$router.push("/dashboard");
      },
      eliminar(){
        var enviar = {
            "pacienteId" : this.pacientesform.pacienteId,
            "token" : this.pacientesform.token
        };
        axios.delete("http://localhost/APIPHPMYSQL/pacientes", { headers : enviar})
        .then( datos => {
            console.log(datos);
           this.$router.push("/dashboard");
        });
      }
  },
        mounted:function(){
                this.pacientesform.pacienteId = this.$route.params.id;
                axios.get("http://localhost/APIPHPMYSQL/pacientes?id=" + this.pacientesform.pacienteId)
                .then(datos =>{
                    this.pacientesform.nombre = datos.data[0].Nombre;
                    this.pacientesform.direccion = datos.data[0].Direccion;
                    this.pacientesform.dni = datos.data[0].DNI;
                    this.pacientesform.correo = datos.data[0].Correo,
                    this.pacientesform.codigoPostal = datos.data[0].CodigoPostal;
                    this.pacientesform.genero = datos.data[0].Genero;
                    this.pacientesform.telefono = datos.data[0].Telefono;
                    this.pacientesform.fechaNacimiento = datos.data[0].FechaNacimiento;
                    this.pacientesform.token = localStorage.getItem("token");
                    console.log(this.pacientesform);
                })
        }

}
</script>

<style scoped>
.left{
   text-align: left;
 };
 .margen{
   margin-left: 15px;
   margin-right: 15px;;
 }
</style>