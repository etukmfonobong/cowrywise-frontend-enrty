<template>
  <transition
      enter-active-class="transition ease-out duration-10000 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-10000 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
  />
  <div v-show="modalOpen" class="fixed origin-center inset-0 w-full h-screen z-30 grid place-items-center">
    <!--background overlay-->
    <div class="absolute inset-0 bg-gray-700 opacity-70"></div>
    <!--popup content wrapper-->
    <div class="w-full md:w-5/6 lg:w-4/5 h-full grid place-items-center z-10 relative">
      <!--close button-->
      <div class="absolute top-0 right-0 h-5 w-5 mr-5  mt-10 flex items-center justify-center cursor-pointer"
           @click="closeModal">
        <svg class="h-5 w-5 text-gray-400 fill-current hover:text-red-400" fill="none" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fill-rule="evenodd"/>
        </svg>
      </div>
      <!--popup itself-->
      <div class="bg-gray-500 w-5/6 h-5/6 flex flex-col shadow-lg rounded-md">
        <!--card image-->
        <div class="bg-blue-50 w-full h-4/5 opacity-100 rounded-t-md relative overflow-hidden">
          <!--animated loader when empty-->
          <div class="absolute inset-0 h-full w-full flex items-center justify-center rounded-t-md">
            <svg class="animate-pulse h-1/2 w-1/2 text-gray-600 fill-current hover:text-red-400" fill="none"
                 stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"/>
            </svg>
          </div>
          <img
              :class="['absolute', 'inset-0', 'w-full', 'h-full' ,'object-center','rounded-t-md',zoom ? 'object-cover':'object-contain']"
              :src="currentImg.urls.full"
              alt="random image">
        </div>
        <!--card content-->
        <div
            class="relative bg-gray-100 w-full h-1/5 opacity-100 rounded-b-md pt-8 pl-10 pr-6 pb-6 font-poppins font-semibold text-opacity-70 flex flex-col justify-end">
          <p class="text-lg text-gray-blue ">{{ currentImg.user['first_name'] }} {{ currentImg.user['last_name'] }}</p>
          <p class="text-xs text-gray-500 mt-2 mb-8">{{ currentImg.user.location }}</p>

          <!--zoom in widget-->
          <div
              class="bg-gray-300 absolute top-0 right-0 h-10 w-10  mt-10 mr-16 grid place-items-center cursor-pointer hover:ring-2 hover:ring-blue-300 rounded-md"
              @click="zoom = true">
            <!--zoom in icon-->
            <svg class="h-6 w-6 text-indigo-400 fill-current hover:text-indigo-500" fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"/>
              <path clip-rule="evenodd"
                    d="M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z"
                    fill-rule="evenodd"/>
            </svg>
          </div>
          <!--zoom out widget-->
          <div
              class=" bg-gray-200 absolute top-0 right-0 h-10  w-10 mt-10 mr-5 grid place-items-center cursor-pointer hover:ring-2 hover:ring-blue-300 rounded-md"
              @click="zoom = false">
            <!--zoom out icon-->
            <svg class="h-6 w-6 text-red-300 fill-current hover:text-red-400" fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    fill-rule="evenodd"/>
              <path clip-rule="evenodd" d="M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z" fill-rule="evenodd"/>
            </svg>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import {enableBodyScroll} from "body-scroll-lock"

export default {
  name: "cardPopup",
  data() {
    return {
      empty: {urls: {full: null}, user: {first_name: null, last_name: null, location: null}},
      zoom: true
    }
  },
  computed: {
    ...mapGetters([`modalOpen`, `currentImg`])
  },
  methods: {
    closeModal() {
      const targetElement = document.querySelector('#app')
      enableBodyScroll(targetElement)
      this.$store.dispatch("toggleModal", {open: false, image: this.empty})
      this.zoom = true
    }
  },

}
</script>

<style scoped>

</style>