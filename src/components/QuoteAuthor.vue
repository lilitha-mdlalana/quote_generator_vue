<template>
  <router-link :to="route" class="hover:bg-black hover:text-white w-96 p-6">
    <p class="hover:text-white mx-16">{{ quoteAuthor }}</p>
    <p class="p-3">{{ quoteGenre }}</p>
  </router-link>
</template>

<script>
import { computed } from "vue";
export default {
  name: "QuoteAuthor",
  props: {
    quoteAuthor: {
      type: String,
      required: true,
    },
    quoteGenre: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const route = computed(() => `/author/${props.quoteAuthor}`);
    return { route };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
p {
  font-family: "Poppins";
}
</style>
