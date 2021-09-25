<template>
  <div
    class="
      bg-accent
      p-2
      flex-row
      text-white
      flex
      items-center
      justify-between
      rounded-full
      text-base
      sm:max-w-sm
    "
  >
    <span class="ml-3 mb-0">
      {{ label }}
    </span>
    <slot></slot>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    label: String,
  },
};
</script>
