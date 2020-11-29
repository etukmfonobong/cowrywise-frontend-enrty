<template>
  <search-container/>
  <results-container/>
</template>

<script>
import searchContainer from "@/components/search/searchContainer";
import resultsContainer from "@/components/results/resultsContainer";

export default {
  name: 'Home',
  components: {
    searchContainer,
    resultsContainer
  }
}
</script>
