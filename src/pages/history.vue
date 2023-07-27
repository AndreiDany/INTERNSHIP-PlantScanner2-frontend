<script>
import axios from "axios";
import store from "../js/store.js";

export default {
  data() {
    return {
      pictures: [],
    };
  },
  mounted() {
    const backendURL =
      "http://PlantScanner.test/pictures/" + store.state.userId;

    axios
      .get(backendURL)
      .then((response) => {
        this.pictures = response.data;
      })
      .catch((error) => {
        console.error(error);
        alert("A apărut o eroare.");
      });
  },
  methods: {},
};
</script>
<template>
  <f7-page name="history">
    <f7-navbar title="History" back-link="Back"></f7-navbar>
    <f7-block>
      <f7-card
        v-for="picture in pictures"
        :key="picture.id"
        outline-md
        class="demo-card-header-pic"
      >
        <f7-card-content>
          <div class="display-flex justify-content-center">
            <img
              :src="'http://PlantScanner.test/' + picture?.name"
              alt="plant"
              style="width: 15rem"
              class="block block-strong block-outline inset "
            />
          </div>

          <p class="display-flex justify-content-center">
            Posted on {{ picture.created_at }}
          </p>
        </f7-card-content>
      </f7-card>
    </f7-block>
  </f7-page>
</template>
