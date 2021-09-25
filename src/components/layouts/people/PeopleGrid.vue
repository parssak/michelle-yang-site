<template>
  <Container>
    <div class="space-y-12">
      <div
        v-if="showHeading"
        class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
      >
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {{ title }}
        </h2>
        <p class="text-xl text-gray-500">
          {{ description }}
        </p>
      </div>
      <div
        class="
          grid
          gap-y-6
          sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12
          lg:grid-cols-3 lg:gap-x-8
        "
      >
        <router-link
          v-for="person in people"
          :key="person.name"
          :to="person.href"
        >
          <div class="space-y-4">
            <div class="aspect-w-3 aspect-h-2">
              <img
                class="object-cover shadow-lg rounded-lg"
                :src="person.imageUrl"
                alt=""
              />
            </div>

            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1 mb-4">
                <h3
                  class="
                    text-lg
                    leading-4
                    font-medium
                    normal-case
                    tracking-normal
                    text-black
                    mb-0
                  "
                >
                  {{ person.name }}
                </h3>
                <p class="text-accent text-lg">{{ person.role }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/base/Container.vue";

const defaultPeople = [
  {
    name: "Person Name",
    role: "Role",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "lorem ipsum dolor sit amet, con",
    href: "/",
  },
  {
    name: "Person Name",
    role: "Role",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "lorem ipsum dolor sit amet, con",
    href: "/",
  },
  {
    name: "Person Name",
    role: "Role",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "lorem ipsum dolor sit amet, con",
    href: "/",
  },
];

export default {
  components: { Container },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default:
        "Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.",
    },
    people: {
      type: Array,
      default: () => defaultPeople,
    },
    showHeading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
