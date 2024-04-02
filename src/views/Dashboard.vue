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
              <tr v-for="patient in patientList" :key="patient.id" v-on:click="editar(patient.id)" id="tr-patientList">
                <th scope="row">{{ patient.id}}</th>
                <td>{{ patient.name }}</td>
                <td>{{ patient.address }}</td>
                <td>{{ patient.dni }}</td>
                <td>{{ patient.email }}</td>
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
            patientList:[],
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
        let direccion = "http://localhost:5077/API/patient";

        axios
        .get(direccion)
        .then( response => {
            this.patientList = response.data;
            this.patientKeys = Object.keys(this.patientList[0]).slice(0,5);
             //   .map(keys => keys.replace("_"," "));
            console.log(this.patientKeys);
        
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