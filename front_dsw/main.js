import { createApp } from "vue";
import App from './app.vue'
import router from "./router"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrBdhNJODCS9IFu8IXLgRPIgiVdEbwS6w",
  authDomain: "automatizacao-de-irrigacao.firebaseapp.com",
  projectId: "automatizacao-de-irrigacao",
  storageBucket: "automatizacao-de-irrigacao.appspot.com",
  messagingSenderId: "749505291047",
  appId: "1:749505291047:web:60aeb63bc2731410fe7f02",
  measurementId: "G-15PZJPM1WB"
};

initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const app = createApp(App)

app.use(router)

app.mount('#app')