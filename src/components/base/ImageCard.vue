<template>
  <div class="flex flex-col rounded-md shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img
        v-if="imageUrl"
        class="h-48 w-full object-cover"
        :src="imageUrl"
        alt=""
      />
      <div class="h-48 w-full bg-accent"></div>
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <router-link :to="href" class="block">
          <p class="text-xl font-semibold text-gray-900">
            <slot> </slot>
          </p>
        </router-link>
      </div>
      <div class="mt-2 flex items-center">
        <router-link :to="href" class="with-underline">
          {{ linkText }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    href: String,
    linkText: String,
    imageUrl: {
      required: false,
      type: String,
    },
  },
};
</script>
