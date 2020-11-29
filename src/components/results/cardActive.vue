<template>
  <!--card wrapper active-->
  <div
      :class="`h-full w-full col-span-1 row-span-${Math.floor(Math.random() * 3) + 5} rounded-md relative shadow`">
    <!--image overlay-->
    <div class="w-full h-3/5 bg-gradient-to-t from-black z-10 absolute bottom-0 opacity-70 rounded-md"></div>
    <!--image itself-->
    <img :src="results.urls['regular']" alt="random image"
         class="absolute inset-0 w-full h-full object-cover object-center rounded-md">
    <!--card description-->
    <div class="absolute z-20 bottom-0 p-6 font-poppins text-white font-light text-opacity-80">
      <p class="text-sm">{{ results.user['first_name'] }} {{ results.user['last_name'] }}</p>
      <p class="text-xs"><span v-if="results.location.city">{{
          results.location.city
        }} ,</span> {{ results.location.country }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardActive",
  props: ['results']
}
</script>

<style scoped>

</style>