<script lang="ts" setup>
import { PepyIcon } from "@/components/icons";
</script>
<template>
  <header class="h-24 border-b border-grey-500">
    <div class="container mx-auto flex items-center justify-center h-full">
      <NuxtLink
        to="/"
        class="flex items-center gap-1 text-teal-700 text-5xl font-bold"
      >
        <PepyIcon class="h-10 w-10" />
        pepy
      </NuxtLink>
    </div>
  </header>
  <slot />
</template>
