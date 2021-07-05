<template>
  <template v-if="['login', 'signup'].includes($route.name)">
    <router-view />
  </template>
  <div v-show="!['login', 'signup'].includes($route.name)">
    <AppTopBar @menu-toggle="onMenuToggle" @logout="logout" />

    <Home />

    <mackdock />
  </div>
</template>
<script>
import Home from "./views/Home";
import AppTopBar from "./AppTopBar.vue";
import mackdock from "../src/components/MacDock.vue";
import { provide } from 'vue'
export default {
  components: { Home, AppTopBar, mackdock },
//provide 
 provide: {
userName: 'epicai'
 },
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
<style>
.panel-footer {
  position: absolute;
  bottom: 30px;
  width: 99%;
}
.navbar {
  background-color: #333;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}

/* Style the links inside the navigation bar */
.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.navbar a.active {
  background-color: #04aa6d;
  color: white;
}
</style>
