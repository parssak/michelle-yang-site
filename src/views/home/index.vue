<template>
  <Container full>
    <div class="mt-12 md:mt-24 grid gap-12 lg:grid-cols-2">
      <section class="text-center lg:text-left">
        <h1 class="tracking-tighter font-semibold text-4xl sm:text-6xl">
          Hi, I'm Michelle
        </h1>

        <p class="mt-20 max-w-md text-lg text-black mx-auto lg:ml-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non
          debitis vel adipisci quibusdam, corporis fuga animi voluptatum
          distinctio eos.
        </p>

        <div class="mt-16">
          <Button class="capitalize px-3 py-2 md:text-base w-full sm:w-max"
            >get in touch</Button
          >
        </div>
      </section>

      <section>
        <img src="@/assets/hero.png" class="mx-auto" />
      </section>
    </div>
  </Container>

  <Container class="bg-gray-50 -mb-12 md:-mb-24">
    <h2>My Work</h2>
  </Container>

  <Split
    v-for="(experience, index) in experiences"
    class="bg-gray-50"
    :key="experience.id"
    :flip="index % 2 !== 0"
    :title="experience.title"
    :subtitle="experience.subtitle"
    :path="`/projects/${experience.id}`"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget nisl auctor, rhoncus nisl ut, aliquam erat."
  >
    <img :src="`/projects/${experience.id}/banner.jpg`" alt="" />
  </Split>

  <Container class="bg-black py-12">
    <div class="grid gap-x-8 gap-y-12 md:grid-cols-2">
      <div class="text-center md:text-left text-white flex flex-col">
        <h2 class="text-white">About Me</h2>
        <p class="mt-auto pt-4 text-lg max-w-md mx-auto md:ml-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          doloremque, dolore quisquam quidem, quisquam quisquam quisquam Lorem
          <br />
          <br />
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          doloremque, dolore quisquam quidem, quisquam quisquam quisquam
        </p>
      </div>
      <div>
        <div class="max-w-md mx-auto">
          <img src="@/assets/about.png" class="object-fit w-full h-full" />
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Button from "../../components/base/Button.vue";
import BlogThreeColumnCards from "../../components/layouts/blog/BlogThreeColumnCards.vue";
import Banner from "../../components/layouts/banners/Banner.vue";
import Split from "../../components/layouts/Split.vue";
import HeroImageOverlay from "@/components/layouts/hero/HeroImageOverlay.vue";
import Container from "@/components/base/Container";
import Header from "@/components/base/Header";
import { experiences } from "@/data";
export default {
  components: {
    Container,
    Header,
    HeroImageOverlay,
    Split,
    Banner,
    BlogThreeColumnCards,
    Button,
  },
  setup() {
    return { experiences };
  },
};
</script>
