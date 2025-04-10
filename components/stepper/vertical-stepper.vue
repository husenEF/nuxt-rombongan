<script lang="ts" setup>
import type { IStep } from "@/type/IStep";

const { steps = [] } = defineProps<{ steps?: Array<IStep> }>();
</script>
<template>
  <ol class="relative w-[70%]">
    <li
      v-for="(list, index) in steps"
      :key="list.id"
      :class="[
        'pl-6',
        'relative',
        'pt-2',
        'mb-2',
        {
          'pb-10': index !== steps.length - 1,
          'text-teal-700 before:border-l-2 font-bold': list.active,
          'text-teal-400 before:border-l': !list.active,
          'font-bold': list.finish,
        },
        ' before:-left-1 before:absolute before:bottom-0 before:h-7 before:border-l-teal-700',
      ]"
    >
      <Icon
        v-if="list.finish"
        name="lets-icons:check-fill"
        :class="[
          'absolute flex items-center justify-center w-10 h-10 -left-6 top-0 border rounded-full',
          'bg-teal-700',
        ]"
      />
      <span
        v-else
        :class="[
          'absolute flex items-center justify-center w-10 h-10 bg-[#ffffff] text-teal-700 rounded-full -left-6 top-0',
          {
            'border-2 border-teal-900 ': list.active,
            'border !border-teal-400': !list.active,
          },
        ]"
      >
        {{ list.id }}
      </span>
      {{ list.title }}
    </li>
  </ol>
</template>
