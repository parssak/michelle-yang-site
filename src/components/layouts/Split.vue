<template>
  <Container :class="dark && 'bg-accent-dark'">
    <div class="grid gap-x-8 gap-y-12 md:grid-cols-2">
      <section :class="flip && `md:order-1`" class="md:py-12">
        <h2
          :class="dark && 'text-white'"
          class="mb-0 font-medium tracking-tighter"
        >
          {{ title }}
        </h2>
        <h2 :class="dark && 'text-white'" class="text-xl font-light">
          {{ subtitle }}
        </h2>
        <p :class="dark && 'text-white'" class="max-w-md mb-5">
          {{ description }}
        </p>
        <router-link
          :to="path"
          class="
            inline-flex
            items-center
            px-3
            py-2
            border border-transparent
            text-sm
            leading-4
            font-medium
            rounded-md
            shadow-sm
            text-white
            bg-accent
            transition
            hover:bg-accent-light
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-accent
          "
        >
        See More
        </router-link>
      </section>
      <section>
        <div class="split-img-wrapper w-full h-full rounded-md overflow-hidden">
          <slot></slot>
        </div>
      </section>
    </div>
  </Container>
</template>

<script>
import Button from "../base/Button.vue";
import Container from "@/components/base/Container.vue";
export default {
  components: { Container, Button },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    subtitle: {
      type: String,
      default: "Subtitle",
    },
    description: {
      type: String,
      default: "Description",
    },
    path: {
      type: String,
      default: "/",
    },
    flip: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.split-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
