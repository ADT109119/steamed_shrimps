<template>

<div class="displayer">
    <span class="name">asdasdasd</span>
    <donutChart max="40" min="0" :value="temp" color-change-mode="true">{{ props.temp + "℃" }}</donutChart>
    <donutChart max="100" min="0" :value="water">{{ props.water + "%" }}</donutChart>
</div>

</template>

<script setup>
import donutChart from './donutChart.vue';
import { defineProps } from 'vue';

const props = defineProps({
    temp:{
        type: Number,
        default: 20
    },
    water:{
        type: Number,
        default: 50
    }
})

</script>

<style>

.displayer{
    /* background: rgb(241, 245, 248); */
    background: white;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    padding: 1rem;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    transition: 0.2s;
    margin-bottom: 1rem;
}

.displayer:hover{
    opacity: 0.8;
}

.displayer .name{
    color: rgb(60, 60, 60);
    font-size: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

</style>