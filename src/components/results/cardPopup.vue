<template>
  <transition
      enter-active-class="transition ease-out duration-2000 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
  />
  <div v-show="modalOpen" class="fixed origin-center inset-0 w-full h-screen z-30 grid place-items-center">
    <!--background overlay-->
    <div class="absolute inset-0 bg-gray-700 opacity-70"></div>
    <!--popup content wrapper-->
    <div class="w-4/5 h-full grid place-items-center z-10 relative">
      <!--close button-->
      <div class="absolute top-0 right-0 h-5 w-5 mr-52 mt-10 flex items-center justify-center cursor-pointer"
           @click="closeModal">
        <svg class="h-5 w-5 text-gray-400 fill-current hover:text-red-400" fill="none" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fill-rule="evenodd"/>
        </svg>
      </div>
      <!--popup itself-->
      <div class="bg-gray-500 w-3/5 h-5/6 flex flex-col shadow-lg rounded-md">
        <!--card image-->
        <div class="bg-pink-200 w-full h-4/5 opacity-100 rounded-t-md relative">
          <img :src="currentImg.urls.full" alt="random image"
               class="absolute inset-0 w-full h-full object-cover object-center rounded-t-md">
        </div>
        <!--card content-->
        <div
            class="bg-gray-100 w-full h-1/5 opacity-100 rounded-b-md pt-6 pl-10 pr-6 pb-6 font-poppins font-semibold text-opacity-70 flex flex-col justify-end">
          <p class="text-lg text-gray-blue ">{{ currentImg.user['first_name'] }} {{ currentImg.user['last_name'] }}</p>
          <p class="text-xs text-gray-500 mt-2 mb-8">{{ currentImg.user.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "cardPopup",
  data() {
    return {
      empty: {urls: {full: null}, user: {first_name: null, last_name: null, location: null}}
    }
  },
  computed: {
    ...mapGetters([`modalOpen`, `currentImg`])
  },
  methods: {
    closeModal() {
      this.$store.dispatch("toggleModal", {open: false, image: this.empty})
    }
  }
}
</script>

<style scoped>

</style>