<template>
  <nav>
    <router-link to="/"> Home </router-link> |
    <router-link to="/status"> Status </router-link> |
    <router-link to="/register"> Register </router-link> |
    <router-link to="/sign-in"> Login </router-link> |
    <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </nav>
  <router-view />
  <!-- <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div> -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

</script>