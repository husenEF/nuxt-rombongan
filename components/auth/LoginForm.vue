<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PepyIcon } from "@/components/icons";
</script>
<template>
  <Card class="mx-auto min-w-[350px] z-10 p-4 ">
    <CardHeader >
      <CardTitle class="justify-center font-mukta font-bold text-5xl flex gap-2 text-teal-700">
        <PepyIcon />
        PepyHUB
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex flex-col gap-4 items-center">
        <p>Use your Google Account</p>
        <Button variant="outline" class="flex gap-4 w-full">
          <Icon name="logos:google-icon mr-6" />
          Login with Google </Button>
      </div>
    </CardContent>
  </Card>
</template>
