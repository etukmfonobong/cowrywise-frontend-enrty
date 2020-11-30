<template>
  <search-container/>
  <results-container/>
  <card-popup/>
</template>

<script>
import {mapGetters} from "vuex"
import searchContainer from "@/components/search/searchContainer";
import resultsContainer from "@/components/results/resultsContainer";
import cardPopup from "@/components/results/cardPopup";
import CardPopup from "@/components/results/cardPopup";

export default {
  name: 'Home',
  components: {
    CardPopup,
    searchContainer,
    resultsContainer
  },
  computed: {
    ...mapGetters([])
  }
}
</script>
