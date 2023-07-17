<script>
export default {
    name: "",
    data() {
        return {
            
        }
    },
    methods: {

    },
    props: {
        card: {
            type: Object,
            default: {
                name: '',
                archetype: '',
                card_images: [{
                    image_url: '',
                    id:'',
                }]
        
            }
        }
    }
}
</script>

<template>
    <div class="card-container mb-3 text-center">
        <div>
            <img :src="card.card_images[0].image_url" :alt="card.name">
        </div>
        <div>
            <h5 class="p-2">
                {{card.name}}
            </h5>
        </div>
        <div>
            <h6>
                {{card.archetype}}
            </h6>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .card-container {
        background-color: #D48F38;
        min-height: 520px;
        
        img {
            width: 100%;
        }

        h5 {
            color: white;
        }
    }
</style>