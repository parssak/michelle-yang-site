<template>
  <Container :class="dark && 'bg-accent-dark'">
    <div class="grid gap-x-8 gap-y-12 md:grid-cols-2">
      <section :class="flip && `md:order-1`" class="md:py-12">
        <h2 :class="dark && 'text-white'">{{ title }}</h2>
        <p :class="dark && 'text-white'">{{ description }}</p>
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
import Container from "@/components/base/Container.vue";
export default {
  components: { Container },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
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
