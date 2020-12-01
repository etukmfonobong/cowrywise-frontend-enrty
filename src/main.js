import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueHeadful from 'vue-headful';

import "tailwindcss/tailwind.css"

createApp(App).component('vue-headful', vueHeadful).use(store).use(router).mount('#app')
