<template>


<div class="home">


    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <div class="container pt-3">
        <tempDisplayer temp="35" water="70" />
        <tempDisplayer temp="30" water="90" />
        <tempDisplayer temp="28" water="70" />
        <tempDisplayer temp="25" water="30" />
        <tempDisplayer temp="20" water="68" />
        <tempDisplayer temp="10" water="70" />
        <tempDisplayer temp="0" water="68" />
    </div>

    <div class="backgroundText">您目前沒有任何裝置<br>請點選右下角的【+】圖標<br>以新增裝置</div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <span class="listButton button" ref="listButton" onclick="this.classList.toggle('active')">
        <i class="fa fa-th-list"></i>
        <i class="fa fa-close closeButton"></i>
    </span>

    <span class="settingButton button" @click="closeList(); gotoPath('/setting')">
        <i class="fa fa-gear"></i>
    </span>

    <span class="addButton button" @click="closeList(); gotoPath('/add')">
        <i class="cross"></i>
    </span>

</div>


</template>

<script setup>
// import HelloWorld from '@/components/HelloWorld.vue'
import tempDisplayer from '@/components/tempDisplayer.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const listButton = ref();
const router = useRouter();

const closeList = ()=>{
    listButton.value.classList.remove("active");
}

const gotoPath = (newPath)=>{
    router.push(newPath);
}

// const client = mqtt.connect("ws://test.mosquitto.org:8080") // you add a ws:// url here
// client.on('connect', ()=>{
//     console.log('connected.');
//     client.subscribe("ghnmwpioefmajqjhidhcwe/ttest")
//     client.on("message", function (topic, payload) {
//         console.log(payload);
//         console.log([topic, payload].join(": "));
//         // client.end()
//     });

//     client.publish("ghnmwpioefmajqjhidhcwe/ttest", "hello");    
// });

</script>

<style>

.container{
    overflow-y: scroll;
}

.backgroundText{
    color: rgb(200, 200, 200);
    font-weight: bold;
    position: absolute;
    left: 50%;
    top: 50%;
    user-select: none;
    z-index: -1;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    width: 100%;
}

.button{
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));
    transition: 0.2s;
    font-size: 2rem;
}

.listButton .closeButton, .listButton.active .fa-th-list{
    display: none !important;
}
.listButton.active .closeButton, .listButton .fa-th-list{
    display: block !important;
}

.addButton{
    bottom: 6rem;
    display: none !important;
}
.settingButton{
    bottom: 11rem;
    display: none !important;
}

.listButton.active ~ .addButton, .listButton.active ~ .settingButton{
    display: block !important;
    animation: floatUp 0.2s ease forwards;
}

@keyframes floatUp{
    0%{
        transform: translate(0, 100%);
    }
    100%{
        transform: translate(0, 0);
    }
}

.button:hover{
    opacity: 0.8;
}

.button .cross, .button .fa{
    border-radius: 50%;
    display: block;
    font-size: 2rem;
    background: white;
    text-align: center;
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    --s: 0.4rem;
    --c: var(--vueColor);
    --l: 45%;
}

.cross::before{
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: var(--l);
    width: var(--s);
    background-color: var(--c);
    display: block;
    border-radius: 4px;
}

.cross::after{
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: var(--s);
    width: var(--l);
    background-color: var(--c);
    display: block;
    border-radius: 4px;

}

</style>