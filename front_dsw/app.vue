<template>
  <nav>
    <router-link to="/"> Home </router-link> |
    <router-link to="/status"> Status </router-link> |
    <router-link to="/register"> Register </router-link> |
    <router-link to="/sign-in"> Login </router-link> |
    <button @click="handleSignOut">Sign out</button>
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

const is LoggedIn = ref(false);

const handleSignOut = () => {

};

</script>