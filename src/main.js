import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from '@meforma/vue-toaster';
import './assets/tailwind.css'
import '../public/css/fontawesome/css/all.min.css'

createApp(App)
    .use(Toaster, {
        position: 'bottom-right'
    })
    .use(router)
    .mount('#app')
