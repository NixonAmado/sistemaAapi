import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import axios from 'axios';
import Edit from '@/components/FooterComponent.vue';
<template>
    <HeaderComponent/>
        <div class="container w-75 min-vh-100">
            <form class="row">
                <div class="mb-3 col-sm-6">
                  <label for="inputEditName" class="form-label"> Name </label>
                  <input type="text" class="form-control" id="inputEditName" aria-describedby="editName" v-model="form.nombre">
                </div>
                <div class="mb-3 col-sm-3">
                    <label for="inputEditAddress" class="form-label"> Address </label>
                    <input type="text" class="form-control" id="inputEditAddress" aria-describedby="editAddress" v-model="form.direccion">
                  </div>
                <div class="mb-3  col-sm-3">
                  <label for="InputEditDNI" class="form-label">DNI</label>
                  <input type="text" class="form-control" id="InputEditDNI" v-model="form.dni">
                </div>
                <div class="mb-3  col-sm-4">
                    <label for="InputEditPostalCode" class="form-label">PostalCode</label>
                    <input type="number" class="form-control" id="InputEditPostalCode" v-model="form.codigoPostal">
                </div>
                <div class="mb-3  col-sm-4">
                    <label for="InputEditTelefono" class="form-label">Phone Number</label>
                    <input type="number" class="form-control" id="InputEditTelefono" v-model="form.telefono">
                </div>
                <div class="mb-3  col-sm-4">
                    <label for="InputEditGenero" class="form-label">Gender</label>
                    <input type="text" class="form-control" id="InputEditGenero" v-model="form.genero">
                </div>  
                <div class="mb-3  col-sm-6">
                    <label for="InputEditFechaNacimiento" class="form-label">BirthDate</label>
                    <input type="date" class="form-control" id="InputEditFechaNacimiento" v-model="form.fechaNacimiento">
                </div>              
                <div class="mb-3  col-sm-6">
                    <label for="InputEditCorreo" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="InputEditCorreo" v-model="form.Correo">
                </div>                
                <div class="form-group">
                    <button type="button" class="btn btn-outline-primary" v-on:click="Edit()" >Edit</button>
                    <button type="button" class="btn btn-outline-danger margen" v-on:click="Delete() ">Delete</button>
                    <button type="button" class="btn btn-outline-success margen" v-on:click="GetOut() ">Get Out</button>
                </div>
            </form>
        </div>
        <br>

        <br>

    <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'; 
import FooterComponent from '@/components/FooterComponent.vue'; 
import axios from 'axios';
export default {
    name:"EditView",
    components: {
        HeaderComponent,
        FooterComponent
    },
    data:function() {
        return {
            patientId:null,
            form:{
                "pacienteId":"",
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
    methods:{
        Edit(){
          axios.put("http://solodata.es/pacientes",this.form)
          .then( data =>{
              console.log(data);
          })
      },
        Delete(){
            var enviar = {
                "pacienteId" : this.form.pacienteId,
                "token" : this.form.token
            }
            console.log(enviar)
            axios.delete("https://api.solodata.es/pacientes/", { headers : enviar })
            .then(data => {
               console.log(data); 
                this.$router.push("/dashboard");
            });
        },
        GetOut(){
            this.$router.push("/dashboard");
        },
    },

    mounted:function() {
        this.patientId = this.$route.params.id;
        axios.get(`https://api.solodata.es/pacientes?id=${this.patientId}`) 
        .then(response => {
            // no fué posible hacer la inicialización con spreed ya que los nombres de las key que entran no son los mismos que salen(problemas de camelCase), y por ende el servidor lanza error
            //this.form = {...response.data[0]};
        this.form.nombre = response.data[0].Nombre;
        this.form.direccion = response.data[0].Direccion;
        this.form.dni = response.data[0].DNI;
        this.form.correo = response.data[0].Correo;
        this.form.codigoPostal = response.data[0].CodigoPostal;
        this.form.genero = response.data[0].Genero;
        this.form.telefono = response.data[0].Telefono;
        this.form.fechaNacimiento = response.data[0].FechaNacimiento;
        this.form.token = localStorage.getItem("token");
        console.log(this.form);

            this.form.token = localStorage.getItem("token") || "";
            console.log("form nombre: " + this.form.nombre)
        })
    }
}
</script>
<!-- "nombre" : "", 
"dni" : "", 
"correo":"", 
"codigoPostal" :"",
"genero" : "",
"telefono" : "",
"fechaNacimiento" : "",
"token" : ""  -->

<style scoped>
</style>