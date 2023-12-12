<template>
  <div>
    <p>{{ name }} - {{ line }}</p>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  line: string;
  name: string;
}

defineProps<Props>();
</script>


