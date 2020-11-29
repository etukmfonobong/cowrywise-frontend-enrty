<template>
  <!--card wrapper empty-->
  <div :class="`bg-gray-100 h-full w-full row-span-${Math.floor(Math.random() * 3) + 5} rounded-md relative`">
    <!--card description-->
    <div class="animate-pulse absolute z-20 bottom-0 p-6 w-full">
      <div class="bg-gray-300 w-3/5 h-4 mb-2"></div>
      <div class="bg-gray-300 w-2/5 h-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardLoading"
}
</script>

<style scoped>

</style>