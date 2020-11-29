<template>
  <div class="bg-gray-300 h-60 w-full grid place-items-center font-poppins">
    <search-bar/>
  </div>
</template>

<script>
import searchBar from "@/components/search/searchBar";

export default {
  name: "searchContainer",
  components: {
    searchBar
  }
}
</script>

<style scoped>

</style>