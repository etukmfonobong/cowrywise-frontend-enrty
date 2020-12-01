<template>
  <vue-headful
      :title="`etuk mfon | unSplash Test`"
      description="cowry wise frontend test"
  />
  <search-container/>
  <results-container/>
  <card-popup/>
</template>

<script>
import {mapGetters} from "vuex"
import searchContainer from "@/components/search/searchContainer";
import resultsContainer from "@/components/results/resultsContainer";
import cardPopup from "@/components/results/cardPopup";

export default {
  name: 'Home',
  components: {
    cardPopup,
    searchContainer,
    resultsContainer
  },
  computed: {
    ...mapGetters([])
  }
}
</script>
