<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <HeaderComponent/>
    <div class="container mb-5">
        <table class="table table-hover">
            <thead>
              <tr>
                <th v-for="patientKey in patientKeys" :key="patientKey.id" scope="col">
                    {{ patientKey}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="patient in patientList" :key="patient.PacienteId" v-on:click="editar(patient.PacienteId)" id="tr-patientList">
                <th scope="row">{{ patient.PacienteId}}</th>
                <td>{{ patient.Nombre }}</td>
                <td>{{ patient.DNI }}</td>
                <td>{{ patient.Telefono }}</td>
                <td>{{ patient.Correo }}</td>


              </tr>
            </tbody>
          </table>
    </div>
    <FooterComponent/>


</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'; 
import FooterComponent from '@/components/FooterComponent.vue'; 
import axios from 'axios';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Dashboard",
    data(){
        return{
            patientList:null,
            page:1,
            patientKeys:""
        }
    },
    components:{
        HeaderComponent,
        FooterComponent,
    },
    methods:{
        editar(id){
            this.$router.push('/edit/' + id)
        }
    },


    mounted:function() {
        let direccion = "https://api.solodata.es/pacientes?page=$1";
        axios
        .get(direccion)
        .then( response => {
            this.patientKeys = Object.keys(response.data[0]);
            this.patientList = response.data;
        
    })
        .catch(error =>
        console.error(error)
        );
    }
}
</script>

<style  scoped>
#tr-patientList{
    cursor:pointer;
}
</style>