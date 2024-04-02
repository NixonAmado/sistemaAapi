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
                  <input type="text" class="form-control" id="inputEditName" aria-describedby="editName" v-model="form.name">
                </div>
                <div class="mb-3 col-sm-3">
                    <label for="inputEditAddress" class="form-label"> Address </label>
                    <input type="text" class="form-control" id="inputEditAddress" aria-describedby="editAddress" v-model="form.address">
                  </div>
                <div class="mb-3  col-sm-3">
                  <label for="InputEditDNI" class="form-label">DNI</label>
                  <input type="text" class="form-control" id="InputEditDNI" v-model="form.dni">
                </div>
                <div class="mb-3  col-sm-4">
                    <label for="InputEditPostalCode" class="form-label">PostalCode</label>
                    <input type="number" class="form-control" id="InputEditPostalCode" v-model="form.postalCode">
                </div>
                <div class="mb-3  col-sm-4">
                    <label for="InputEditTelefono" class="form-label">Phone Number</label>
                    <input type="number" class="form-control" id="InputEditTelefono" v-model="form.phone_number">
                </div>
                <div class="mb-3  col-sm-4">
                    <label for="InputEditGenero" class="form-label">Gender</label>
                    <input type="text" class="form-control" id="InputEditGenero" v-model="form.gender">
                </div>  
                <div class="mb-3  col-sm-6">
                    <label for="InputEditFechaNacimiento" class="form-label">Birth Date</label>
                    <input type="date" class="form-control" id="InputEditFechaNacimiento" v-model="form.birth_date">
                </div>              
                <div class="mb-3  col-sm-6">
                    <label for="InputEditCorreo" class="form-label">Email</label>
                    <input type="email" class="form-control" id="InputEditCorreo" v-model="form.email">
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
                "token":""
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
            axios.delete(`http://localhost:5077/API/patient/${this.patientId}`, {
                headers: {
                    'Authorization': `Bearer ${this.form.token}`
                }
            })
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
        axios.get(`http://localhost:5077/API/patient/${this.patientId}`) 
        .then(response => {
            this.form = {...response.data};
            this.form.token = localStorage.getItem("token");
            console.log("form",this.form);
            console.log("token",this.form.token);

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