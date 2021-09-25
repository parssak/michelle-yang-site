<template>
  <router-link
    class="
      bg-white
      flex
      items-center
      justify-between
      rounded-md
      border border-gray-300
      p-7
      card
      transition
      hover:bg-gray-50
    "
    :to="href"
  >
    <h3 class="mb-0 font-light">
      <slot></slot>
    </h3>
    <svg
      width="12"
      height="21"
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="card-chevron"
    >
      <path d="M1 1L10.5 10.5L1 20" stroke="#194F90" stroke-width="2" />
    </svg>
  </router-link>
</template>

<script>
export default {
  props: {
    href: String,
  },
};
</script>
