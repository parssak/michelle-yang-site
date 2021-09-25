<template>
  <router-link :to="path" :class="getTheme()" class="base-btn no-show-active">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: false,
      default: "/",
    },
    theme: {
      type: String, // black, or white if none
      required: false,
    },
  },
  methods: {
    getTheme() {
      let classList = "";
      switch (this.theme) {
        case "light":
          classList = "btn-light";
          break;
        default:
          classList = "btn-dark";
      }
      return classList;
    },
  },
};
</script>
