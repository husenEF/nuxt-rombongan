<script lang="ts" setup>
import { VerticalStepper } from "~/components/stepper";
definePageMeta({
  layout: "with-header",
});
</script>

<template>
  <div class="flex w-full flex-col md:flex-row relative">
    <div
      class="bg-green-50 justify-center p-4 flex flex-col basis-1/1 md:basis-2/3 md:h-[calc(100vh-96px)]"
    >
      <div class="max-w-3xl mx-auto flex flex-col gap-4">
        <div>
          <h1 class="text-teal-700 font-bold font-mukta text-4xl font-mukta">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <h3 class="text-gray-300 font-mukta text-xl">
            Interdum enim at arcu volutpat sit ac sit ultrices. Sodales dui
            semper quis mi.
          </h3>
        </div>
        <div class="clearfix">
          <p class="font-mukta text-teal-700 font-medium mb-4">
            Consequat a senectus et at lacus sapien eu. Eget sollicitudin orci
            urna nam pellentesque aliquam. Ligula dapibus vitae sed imperdiet
            eget a ut sit phasellus. Pellentesque vitae mollis auctor eleifend
            feugiat egestas tempus.
          </p>
          <Button variant="primary"
            >Next: Name your Workspace
            <Icon name="hugeicons:arrow-right-02" class="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
    <div class="basis-1/1 md:basis-1/3 h-full flex items-center justify-center">
      <VerticalStepper />
    </div>
  </div>
</template>
