<template>
  <h1 class="m-6">{{ author }}</h1>
  <div>
    <quote-text
      v-for="quote in quotesFromAuthor"
      :key="quote.id"
      :quoteText="quote.quoteText"
    />
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import QuoteText from "@/components/QuoteText.vue";
export default {
  name: "AuthorView",
  components: {
    QuoteText,
  },
  setup() {
    const route = useRoute();
    const quotesFromAuthor = ref([]);
    const author = route.params.author;

    const getQuotesFromAuthor = async () => {
      const response = await axios.get(
        `https://quote-garden.herokuapp.com/api/v3/quotes/?author=${author}&limit=30`
      );
      const data = response.data.data;
      quotesFromAuthor.value = data;
    };
    onMounted(getQuotesFromAuthor);
    return { author, quotesFromAuthor };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
h1 {
  font-family: "Poppins";
}
</style>
