<script lang="ts" setup>
import { reactive } from "vue";

const lists = reactive([
  {
    id: 1,
    title: "Onboarding",
    description: "",
    active: true,
  },
  {
    id: 2,
    title: "Set up Workspace",
    description: "",
    active: false,
  },
  {
    id: 3,
    title: "Choose Module",
    description: "",
    active: false,
  },
  {
    id: 4,
    title: "Finish",
    description: "",
    active: false,
  },
]);
</script>
<template>
  <ol class="relative border-s border-blue-700 text-teal-400 w-[70%]">
    <li
      v-for="(list, index) in lists"
      :key="list.id"
      :class="[
        'ms-6',
        ,
        'relative',
        'pt-2',
        { 'mb-10': index !== lists.length - 1, 'text-teal-700': list.active },
      ]"
    >
      <span
        class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-green-900 -left-10 top-0"
      >
        {{ list.id }}
      </span>
      <h3 class="font-medium leading-tight">{{ list.title }}</h3>
      <p v-if="list.description" class="text-sm">{{ list.description }}</p>
    </li>
  </ol>
</template>
