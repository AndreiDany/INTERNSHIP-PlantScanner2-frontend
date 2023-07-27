<template>
  <f7-app v-bind="f7params">
    <!-- Left panel with cover effect-->
    <f7-panel left cover dark>
      <f7-page>
        <f7-navbar title="Plant Scanner"></f7-navbar>
        <f7-block>
          <f7-link
            class="button button-outline margin-bottom-half"
            href="//"
            panel-close="left"
            >Logout</f7-link
          >
          <f7-link
            class="button button-outline"
            href="/history/"
            panel-close="left"
            >History</f7-link
          >
        </f7-block>
      </f7-page>
    </f7-panel>

    <!-- Your main view, should have "view-main" class -->
    <f7-view main url="/"></f7-view>

    <!-- Popup -->
    <!-- <f7-popup id="my-popup">
      <f7-page>
        <f7-navbar title="Save the picture">
          <f7-nav-right>
            <f7-link popup-close>Close</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <f7-input
            type="text"
            name="pictureName"
            placeholder="Picture name"
            v-model:value="pictureName"
            class="margin"
          ></f7-input>
          <f7-button outline>Save the picture</f7-button>
        </f7-block>
      </f7-page>
    </f7-popup> -->
  </f7-app>
</template>
<script>
import { ref, onMounted } from "vue";
import { f7, f7ready } from "framework7-vue";

import routes from "../js/routes.js";
import store from "../js/store";

export default {
  setup() {
    // Framework7 Parameters
    const f7params = {
      name: "Plant Scanner", // App name
      theme: "auto", // Automatic theme detection

      // App store
      store: store,
      // App routes
      routes: routes,
    };
    // data
    const pictureName = ref("");

    onMounted(() => {
      f7ready(() => {
        // Call F7 APIs here
      });
    });

    return {
      f7params,
      pictureName,
    };
  },
};
</script>
