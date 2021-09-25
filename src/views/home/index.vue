<template>
  <Container full class="bg-accent-lightest">
    <div class="mt-12 md:mt-24">
      <h1 class="tracking-tight font-bold text-4xl sm:text-6xl">
        Hi, I'm Michelle
      </h1>
      <p class="mt-2 text-lg sm:text-2xl tracking-tight">
        Lorem ipsum dolor sit amet
      </p>

      <p class="mt-12 max-w-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non debitis
        vel adipisci quibusdam, corporis fuga animi voluptatum distinctio eos.
      </p>

      <div class="mt-6 grid place-items-center sm:place-items-start">
        <Button class="capitalize px-3 py-2 md:text-base">get in touch</Button>
      </div>
    </div>
  </Container>

  <Container>
    <h2>Content</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
      nisl auctor, rhoncus nisl ut, aliquam erat.
    </p>
  </Container>

  <!-- bob -->
  <Split
    title="bob"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget nisl auctor, rhoncus nisl ut, aliquam erat."
    ><img src="http://placehold.it/600x400" alt=""
  /></Split>

  <!-- jeremy -->
  <Split
    :flip="true"
    title="jeremy"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget nisl auctor, rhoncus nisl ut, aliquam erat."
    ><img src="http://placehold.it/600x400" alt=""
  /></Split>

  <!-- jilly -->
  <Banner
    title="jilly"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget nisl auctor, rhoncus nisl ut, aliquam erat."
  >
    <img src="http://placehold.it/600x400" alt=""
  /></Banner>

  <BlogThreeColumnCards />
</template>

<script>
import Button from "../../components/base/Button.vue";
import BlogThreeColumnCards from "../../components/layouts/blog/BlogThreeColumnCards.vue";
import Banner from "../../components/layouts/banners/Banner.vue";
import Split from "../../components/layouts/Split.vue";
import HeroImageOverlay from "@/components/layouts/hero/HeroImageOverlay.vue";
import Container from "@/components/base/Container";
import Header from "@/components/base/Header";

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
};
</script>
