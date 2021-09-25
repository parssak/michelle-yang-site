<template>
  <Header title="contact" />
  <Container>
    <h2>Content</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur eget nisl auctor, rhoncus nisl ut, aliquam erat.
    </p>
  </Container>
</template>

<script>
import Container from '@/components/base/Container';
import Header from '@/components/base/Header';
import * as data from '@/data';

export default {
  components: {
    Container,
    Header
  },
  setup() {
    return {
      data
    };
  }
};

</script>
