<template>
  <!--wrapper-->
  <div class="bg-white h-14 w-4/5 relative rounded-md shadow-lg flex items-center fhd:w-3/5">
    <!--search icon-->
    <div class="absolute left-0 h-full w-14 flex items-center justify-center">
      <svg class="h-5 w-5 stroke-current text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2"/>
      </svg>
    </div>
    <!--search label and input-->
    <label class="sr-only" for="search"></label>
    <input id="search"
           class="w-full h-full pl-14 rounded-md focus:outline-none focus:ring-3 focus:ring-blue-100 text-lg"
           placeholder="Search For Photo" type="text">
  </div>
</template>

<script>
export default {
  name: "searchBar"
}
</script>

<style scoped>

</style>