<script setup lang="ts">
import { reactive } from "vue";
import { VerticalStepper } from "@/components/stepper/index";
import { Input } from "@/components/ui/input";

definePageMeta({
  layout: "with-header",
});

const steps = reactive([
  {
    id: 1,
    title: "Onboarding",
    description: "",
    active: true,
    finish: true,
  },
  {
    id: 2,
    title: "Set up Workspace",
    description: "",
    active: true,
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
const handleSubmit = (data) => {
  console.log({ handleSubmit: data });
};
</script>

<template>
  <div class="flex w-full flex-col md:flex-row relative">
    <div class="bg-green-50 justify-center p-4 flex flex-col basis-1/1 md:basis-2/3 md:h-[calc(100vh-96px)]">
      <div class="max-w-3xl mx-auto flex flex-col gap-4">
        <div>
          <h1 class="text-teal-700 font-bold font-mukta text-4xl font-mukta">
            Name Your Workspace
          </h1>
          <h3 class="text-gray-300 font-mukta text-xl">
            Interdum enim at arcu volutpat sit ac sit ultrices. Sodales dui
            semper quis mi.
          </h3>
        </div>
        <form class="clearfix flex gap-4 flex-col" @submit.prevent="handleSubmit">
          <div class="w-1/2">
            <label>Workspace Name <em class="text-red-500">*</em></label>
            <Input placeholder="Workspace name" class="bg-white" />
          </div>
          <div>
            <Button variant="primary">Next: Choose Module
              <Icon name="hugeicons:arrow-right-02" class="w-6 h-6" />
            </Button>
          </div>
        </form>
      </div>
    </div>
    <div class="basis-1/1 md:basis-1/3 h-full flex items-center justify-center md:h-[calc(100vh-96px)]">
      <VerticalStepper :steps="steps" />
    </div>
  </div>
</template>
