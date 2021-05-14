import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

window.addEventListener('scroll', function() {
  let btn = document.getElementById("back-to-top")
  if (window.scrollY > 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
})
