<template>
  <div class="bg-gray-300 h-60 w-full grid place-items-center font-poppins">
    <div v-if="searching" class="w-4/5">
      <h1 class="text-gray-blue leading-6 text-2xl md:text-4xl font-semibold">Searching for
        <span class="text-gray-500">"{{ searchTerm }}"</span>
      </h1>
    </div>

    <search-bar v-if="!searching"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import searchBar from "@/components/search/searchBar";

export default {
  name: "searchContainer",
  components: {
    searchBar
  },
  computed: {
    ...mapGetters([`searching`, `searchTerm`])
  }
}
</script>

<style scoped>

</style>