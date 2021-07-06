<template>
  <template v-if="['login', 'signup'].includes($route.name)">
    <router-view />
  </template>
  <div v-show="!['login', 'signup'].includes($route.name)">
    <AppTopBar @menu-toggle="onMenuToggle" @logout="logout" />

    <router-view />

    <mackdock />
  </div>
</template>
<script>
import AppTopBar from "./AppTopBar.vue";
import mackdock from "../src/components/MacDock.vue";

export default {
  components: { AppTopBar, mackdock },

  data() {
    return {
      authenticated: false,
      user: false,
    };
  },

  methods: {
    logout() {
      alert("logout");
      this.$router.push("/login");
    },
  },
};
</script>
<style></style>
