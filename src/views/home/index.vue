<template>
  <HeroImageOverlay>
    <div class="mt-24">
      <h1 class="text-white">Lorem ipsum dolor sit amet</h1>
      <p class="mt-2">Consect Edipis dolis</p>
    </div>
  </HeroImageOverlay>

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
  },
};
</script>
