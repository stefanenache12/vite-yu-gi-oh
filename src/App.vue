<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import axios from "axios";


export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
       cards:[]
        
    };
  },
  methods: {},
  created() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0')
            .then(response => {
                this.cards = response.data.data;
                console.log(this.cards)
            })
}};
</script>

<template>
  <HeaderComponent />
  <MainComponent :cards="cards"/>

</template>

<style lang="scss">
@use "assets/scss/main";
</style>
