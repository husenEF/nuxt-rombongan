<script lang="ts">
export const description = "A simple login form.";
</script>
<script setup lang="ts">
import LoginAnimation from "~/components/animation/login-animation.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
definePageMeta({
  layout: "auth",
});
</script>
<template>
  <div class="flex flex-col h-screen">
    <div class="flex flex-1 w-full items-center justify-center relative">
      <div class="w-full h-1/2 bg-green-50 absolute top-0">
        <LoginAnimation />
      </div>
      <LoginForm />
    </div>
    <footer class="bg-teal-600 p-12">
      <div
        class="container mx-auto flex flex-col md:flex-row items-center justify-between"
      >
        <div class="flex gap-4">
          <a href="#" class="text-white">Terms and Conditions</a>
          <a href="#" class="text-white">Privacy Policy</a>
        </div>
        <span class="text-white">© Pepy 2020 | website by Softwareseni</span>
      </div>
    </footer>
  </div>
</template>
