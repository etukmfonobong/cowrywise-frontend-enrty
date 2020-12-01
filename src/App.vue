<template>
  <vue-headful
      :title="`etuk mfon | unSplash Test`"
      description="cowry wise frontend test"
  />
  <div :class="[modalOpen ? ccBody : '']">
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  data() {
    return {
      ccBody: "cc-body"
    }
  },
  computed: {
    ...mapGetters([`modalOpen`])
  }
}

</script>

<style lang="sass" scoped>
.cc-body
  //position: fixed
  //height: 100vh
  //width: 100vw
  //overflow: hidden

</style>

