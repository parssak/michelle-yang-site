<template>
  <Header title="project" />
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
