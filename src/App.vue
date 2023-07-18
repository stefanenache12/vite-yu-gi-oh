<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import axios from "axios";
import { store } from './store.js';

export default {
name: "App",
components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
       store
        
    };
  },
methods: {  
    
    getResults() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0')
            .then(response => {
                this.store.cards = response.data.data;
            })
    },

    getArchetypes(){
        axios
            .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
                .then(response => {
                    this.store.archetypes = response.data;
                })
    },
    performSearch() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0',{
                params: {
                    archetype: this.store.searchArchetype
                }
            })
            .then(response => {
                this.store.cards = response.data.data;
                
            })
    }
},
created() {
    this.getResults(),
    this.getArchetypes()
}

};
</script>

<template>
  <HeaderComponent/>
  <MainComponent @search="performSearch()"/>

</template>

<style lang="scss">
@use "assets/scss/main";
</style>
