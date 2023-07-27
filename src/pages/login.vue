<script setup>
import { ref } from "vue";
import axios from "axios";
import { f7ready } from "framework7-vue";
import store from "../js/store.js";

const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const pin = ref("");

function addToPin(number) {
  pin.value = pin.value + String(number);
}

async function login() {
  await axios
    .post("http://PlantScanner.test/verify-pin", {
      pin: pin.value,
    })
    .then(function (response) {
      f7ready(($f7) => {
        $f7.views.main.router.navigate("/home/");
      });

      store.dispatch("setUser", { id: response.data.userId });
    })
    .catch(function (error) {
      console.log(error);
    });
  pin.value = "";
}
</script>
<template>
  <f7-page name="login">
    <h2 class="display-flex justify-content-center">Plant Scanner</h2>
    <f7-block class="">
      <h2 class="display-flex justify-content-center">{{ pin }}</h2>
      <div class="grid grid-cols-3 grid-gap">
        <div
          v-for="number in numbers"
          class="display-flex justify-content-center"
        >
          <f7-button
            small
            fill
            round
            style="width: 3rem"
            @click="addToPin(number)"
          >
            {{ number }}
          </f7-button>
        </div>
      </div>
      <div class="grid-gap display-flex justify-content-center margin-top">
        <f7-link class="button button-outline" @click="login()">Login</f7-link>
      </div>
    </f7-block>
  </f7-page>
</template>
