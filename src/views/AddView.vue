<template>
    <div class="pt-5">
        <div class="container">
            <button class="btn btn-primary">連接藍芽</button>
            <p>目前連接裝置: {{ deviceName }}</p>

            <div class="form-floating mb-3 mt-3">
                <input type="text" class="form-control" id="ssid" placeholder="Enter WiFi SSID" name="ssid" :disabled="!blueToothConnected">
                <label for="email">WiFi SSID</label>
            </div>

            <div class="form-floating mt-3 mb-3">
                <input type="text" class="form-control" id="pwd" placeholder="Enter password" name="pwd" :disabled="!blueToothConnected">
                <label for="pwd">Password</label>
            </div>

            <div class="form-floating mt-3 mb-3">
                <input type="text" class="form-control" id="deviceName" placeholder="Enter device name" name="deviceName" :disabled="!blueToothConnected">
                <label for="deviceName">裝置名稱(顯示在APP的名稱)</label>
            </div>

            <div>
                <button class="btn btn-success" :disabled="!blueToothConnected">送出並連接</button>
                <button class="btn btn-danger" onclick="history.go(-1)">取消</button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

onMounted(()=>{
    var appInventorInput = window.AppInventor.getWebViewString();
    if (appInventorInput.length > 0) {
        let data = JSON.parse(appInventorInput);
        deviceName.value = data['name'];
    }
})

const blueToothConnected = ref(false);
const deviceName = ref("尚未連接裝置");

console.log(blueToothConnected.value);
</script>

<style>
</style>