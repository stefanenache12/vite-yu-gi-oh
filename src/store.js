import { reactive } from 'vue'

export const store = reactive({
    cards:[],
    searchArchetype:'',
    loadind: true,
    archetypes:[]
})