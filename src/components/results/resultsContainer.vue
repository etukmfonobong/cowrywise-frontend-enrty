<template>
  <div class="cc-grid w-3/6 h-auto mx-auto -mt-10 place-items-center mb-5">
    <!--render active cards-->
    <div v-for="result in results" v-if="!searching && results.length > 1"
         :class="`h-full w-full col-span-1 row-span-${Math.floor(Math.random() * 3) + 5}`">
      <card-active :results="result"/>
    </div>
    <!--render "no results found"-->
    <div v-if="!searching && results.length < 1"
         class="text-gray-blue leading-8 md:leading-10 text-2xl md:text-3xl lg:text-5xl font-semibold mt-32">
      Sorry Nothing found on
      <span class="text-gray-500">
        "{{ searchTerm }}"
      </span>
    </div>
    <!--render "Api errors"-->
    <div v-if="!searching && results.errors"
         class="text-gray-blue leading-8 md:leading-10 text-2xl md:text-3xl lg:text-5xl font-semibold mt-28">
      <span class="text-gray-500">
        "{{ results.errors[0] }}"
      </span>
    </div>
    <!--render loading cards-->
    <div v-for="results in 9" v-if="searching"
         :class="`h-full w-full col-span-1 row-span-${Math.floor(Math.random() * 3) + 5}`">
      <card-loading/>
    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex"
import cardActive from "@/components/results/cardActive";
import CardLoading from "@/components/results/cardLoading";

export default {
  name: "resultsContainer",
  components: {
    CardLoading,
    cardActive
  },
  data() {
    return {
      loading: this.searching
    }
  },
  computed: {
    ...mapGetters([`results`, `searching`, `searchTerm`])
  },
  created() {
    this.$store.dispatch("getRandom").then(() => {
      return console.log(this.random)
    })
  }
}
</script>

<style lang="sass" scoped>
.cc-grid
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
  row-gap: 1.5rem
  column-gap: 2.5rem
  //grid-auto-flow: dense
  grid-auto-rows: 30px

</style>