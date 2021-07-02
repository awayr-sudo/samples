<template>
  <h1>This is {{ this.$route.query.dialog }} page</h1>
  {{ this.$route.query.dialog }}
  {{currentTabComponent}}
 <keep-alive>
  <component :is="currentTabComponent">
  </component>
 </keep-alive>
</template>

<script>

// import Comp from '../views/comp2.vue'


// import comp2Vue from './comp2.vue'

// const comp2Vue = defineAsyncComponent(
//   () => import("@/views/comp2.vue")
// );

export default {
 
data(){
  
  return{
      gems: {
    dashboard: true,
    accounts: 'comp2Vue',
    payroll: 'comp2Vue',
    payable: 'comp1Vue',
  },  
      // scurrentTabComponent: gems[this.$route.query.domain]
    
  }
}
,
    computed:{
      currentTabComponent(){
       return this.$route.query.dialog;
        // return this.gems[this.$route.query.dialog]
      
      }
    }
}
</script>

<style>

</style>