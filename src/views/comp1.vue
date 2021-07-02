<template>
  <h1>This is sdd{{ this.$route.query.dialogs }} page</h1>
  {{ this.$route.query.domain }}
  {{currentTabComponent}}
  <component :is="currentTabComponent" class="tab">
  </component>
</template>

<script>
export default {
computed:{
      currentTabComponent(){
        console.log("gems",this.gems)
        return this.gems[this.$route.query.domain]
      }
    }
}
</script>

<style>

</style>