<script>
export default {
    name: "HeaderComponent",
    data() {
        return {
            logo:'https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg',
        }
    },
    methods: {

    }
}
</script>

<template>
    <header>
        <div class="container p-5 d-flex">
            <img :src="logo" alt="Yu-Gi-Oh Logo">
            <h1>Yu-Gi-Oh Api</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    img {
        width: 120px;
    }
</style>