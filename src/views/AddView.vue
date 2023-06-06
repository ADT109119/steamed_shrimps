<template>
    <div class="pt-5">
        <div class="container">
            <button class="btn btn-primary" @click="blueTooth()"><i class="fa fa-bluetooth"></i>連接藍牙</button>
            <p>目前連接裝置: <span id="displayDevice">尚未連接裝置</span></p>
            <!-- <input type="text" v-model="tempData" /> -->

            <div class="form-floating mb-3 mt-3">
                <input type="text" class="form-control" id="ssid" placeholder="Enter WiFi SSID" name="ssid" ref="wifi_ssid" :disabled="!blueToothConnected">
                <label for="email">WiFi SSID</label>
            </div>

            <div class="form-floating mt-3 mb-3">
                <input type="text" class="form-control" id="pwd" placeholder="Enter password" name="pwd" ref="wifi_pwd" :disabled="!blueToothConnected">
                <label for="pwd">Password</label>
            </div>

            <div class="form-floating mt-3 mb-3">
                <input type="text" class="form-control" id="deviceName" placeholder="Enter device name" ref="device_name" name="User ID" disabled>
                <label for="deviceName">User ID</label>
            </div>

            <div>
                <button class="btn btn-success" :disabled="!blueToothConnected" @click="sendWifiData()">送出並連接</button>
                <button class="btn btn-danger" onclick="history.go(-1)">取消</button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
// import mqtt from 'mqtt/dist/mqtt.js';

// const tempData = ref();
const user_id = ref();
var interval;
onMounted(()=>{
    interval = setInterval(() => {
        // console.log(tempData.value);
        // var appInventorInput = window.AppInventor.getWebViewString();
        // if (appInventorInput.length > 0) {
        //     let data = JSON.parse(appInventorInput);
        //     deviceName.value = data['name'];
        // }
    }, 1000);

    
    if(localStorage.getItem("user") == null){
        let str = "";
        crypto.getRandomValues(new Uint8Array(64)).forEach(item=>{
            str += String.fromCharCode(Math.floor(item % 127));
        })
        user_id.value = str;
        localStorage.setItem("user", str);
        console.log(localStorage.getItem("user"))
    }else{
        device_name.value.value = localStorage.getItem("user");
    }
    

    // const client = mqtt.connect("wss://test.mosquitto.org:8081") // you add a ws:// url here
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

})

onBeforeUnmount(()=>{
    clearInterval(interval);
})

const blueToothConnected = ref(true);
// const deviceName = ref("尚未連接裝置");

const wifi_ssid = ref();
const wifi_pwd = ref();
const device_name = ref();

console.log(blueToothConnected.value);

const blueTooth = ()=>{
    window.AppInventor.setWebViewString(
        JSON.stringify({
            function_name: "scanBluetooth"
        })
    );
}

const sendWifiData = ()=>{
    let data = String.fromCharCode(wifi_ssid.value.value.length) + wifi_ssid.value.value + String.fromCharCode(wifi_pwd.value.value.length) + wifi_pwd.value.value + String.fromCharCode(device_name.value.value.length) + device_name.value.value;
    console.log(data);
    console.log(data.length)

    window.AppInventor.setWebViewString(
        JSON.stringify({
            function_name: "sendWiFi",
            wifi_data: data
        })
    );
}
</script>

<style>
.btn{
    margin: 0 0.5rem;
}
</style>