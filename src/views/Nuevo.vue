<template>
    <div>
        <Header />
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
                    <div class="form-group left row ">
                        <div class="col">
                              <label for="" class="control-label col-sm-2">Fecha nacimiento</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="fechanacimineto" id="telefono" v-model="pacientesform.fechaNacimiento">
                            </div>
                        </div>
                        <div class="col">
                               <label for="" class="control-label col-sm-2">DNI</label>
                                <div class="col-sm-7">
                                    <input type="text" class="form-control" name="dni" id="dni" v-model="pacientesform.dni">
                                </div>
                        </div>
                    </div>


                    <div class="form-group m-2">
                      <button type="button" class="btn btn-primary" v-on:click="guardar()" >Guardar</button>
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                    </div> 
                </form>


            </div>
        <Footer/>

    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios';
export default {
    name:"Nuevo",
    data:function(){
        return {
            pacientesform:{
                "nombre" : "",
                "direccion": "", 
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
    components:{
        Header,
        Footer
    },
    methods:{
        guardar(){
            this.pacientesform.token = localStorage.getItem("token");
            axios.post("http://localhost/APIPHPMYSQL/pacientes",this.pacientesform)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","Paciente creado","primary");
                this.$router.push("/dashboard");
            }).catch( e =>{
                console.log(e);
                 this.makeToast("Error","Error al guardar","danger");
            })
        },
        salir(){
            this.$router.push("/dashboard");
        },
        makeToast(titulo,texto,tipo) {
            this.toastCount++
            this.$bvToast.toast(texto, {
            title: titulo,
            variant: tipo,
            autoHideDelay: 5000,
            appendToast: true
            })
        }
        
    }
}
</script>
<style scoped>
.left{
    text-align:  left;
}
</style>