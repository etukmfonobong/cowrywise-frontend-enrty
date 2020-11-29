<template>
  <search-container/>
  <div class="cc-grid w-3/6 h-auto mx-auto -mt-10 place-items-center">
    <!--card wrapper-->
    <div class="bg-green-400 h-full w-full row-span-6 rounded-md relative">
      <!--image overlay-->
      <div class="w-full h-3/5 bg-gradient-to-t from-black z-10 absolute bottom-0 opacity-70 rounded-md"></div>
      <!--image itself-->
      <img alt="random image" class="absolute inset-0 w-full h-full object-cover object-center rounded-md"
           src="https://source.unsplash.com/random">
      <!--card description-->
      <div class="absolute z-20 bottom-0 p-6 font-poppins text-white font-light text-opacity-80">
        <p class="text-sm">photo name</p>
        <p class="text-xs">photo description</p>
      </div>
    </div>
    <div class="bg-green-400 h-full w-full row-span-5 relative">
      <div class="w-full h-full absolute bg-gradient-to-t from-black"></div>
    </div>
    <div class="bg-green-400 h-full w-full row-span-7"></div>
    <div class="bg-red-400 h-full w-full row-span-7"></div>
    <div class="bg-blue-400 h-full w-full row-span-5"></div>
    <div class="bg-blue-400 h-full w-full row-span-6"></div>
    <div class="bg-blue-400 h-full w-full row-span-5"></div>
    <div class="bg-blue-400 h-full w-full row-span-5"></div>
    <div class="bg-blue-400 h-full w-full row-span-5"></div>
    <div class="bg-blue-400 h-full w-full row-span-5"></div>
  </div>
</template>

<script>
import searchContainer from "@/components/search/searchContainer";

export default {
  name: 'Home',
  components: {
    searchContainer
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
