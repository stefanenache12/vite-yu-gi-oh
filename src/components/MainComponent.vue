<script>
import CardComponent from './CardComponent.vue';
import { store } from '../store.js';

export default {
    name: "MainComponent",
    data() {
        return {
            store
        }
    },
    methods: {

    },
    components: {
        CardComponent,
    }
}
</script>

<template>
    <main>
        <div class="container pt-4 pb-4">
            <div> 
                <form action="" @submit.prevent="$emit('search')">
                    <select v-model="store.searchArchetype" class="form-select w-25 text-center" aria-label="Select archetype">
                        <option value="" selected>Select Archetype...</option>
                        <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
                    </select>
                    <button type="submit" class="btn btn-light">Search Archetype</button>
                </form>
            </div>
            <div class="cards-container p-4 mt-3">
                <div class="result">
                    <h4 class="p-4">Found {{ this.store.cards.length }} cards</h4>
                </div>
                <div class="row">
                    <div class="col-3" v-for="(card,i) in store.cards" :key="i">
                        <CardComponent :card="card"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

main {
    background-color: #D48F38;

    .cards-container {
        background-color: white;

        .result {
            background-color: #1D0E13;
            color: white;
        }
    }
}

</style>