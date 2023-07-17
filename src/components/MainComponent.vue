<script>
import CardComponent from './CardComponent.vue';

export default {
    name: "MainComponent",
    data() {
        return {
        }
    },
    props: {
        cards: {
            type: Array,
            default: [],
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
                <select class="form-select w-25 text-center" aria-label="Select archetype">
                    <option value="1">Alien</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="cards-container p-4 mt-3">
                <div class="result">
                    <h4 class="p-4">Found {{ this.cards.length }} cards</h4>
                </div>
                <div class="row">
                    <div class="col-3" v-for="(card,i) in cards" :key="i">
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