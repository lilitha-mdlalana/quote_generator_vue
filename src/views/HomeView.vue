<template>
  <div class="flex">
    <button @click="getRandomQuote" class="ml-auto mt-3 mr-6">
      Random <font-awesome-icon icon="rotate" />
    </button>
  </div>

  <div
    class="flex flex-col h-screen items-center justify-center w-screen click:outline-none"
  >
    <quote-text :quoteText="quote" />
    <quote-author
      :quoteAuthor="quoteAuthor"
      :quoteGenre="quoteGenre"
      class="mt-8"
      @click="navigateToAuthor"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import QuoteText from "@/components/QuoteText.vue";
import QuoteAuthor from "@/components/QuoteAuthor.vue";
export default {
  name: "HomeView",
  components: {
    QuoteText,
    QuoteAuthor,
  },
  setup() {
    const router = useRouter();

    const quote = ref(
      "The first rule of any technology used in a business is that automation applied to an effecient operation will magnify the efficiency. That second is that automation applied to an inefficient operation will magnify the inefficiency"
    );
    const quoteAuthor = ref("Bill Gates");
    const quoteGenre = ref("business");

    const getRandomQuote = async () => {
      const response = await axios.get(
        "https://quote-garden.herokuapp.com/api/v3/quotes/random"
      );
      const data = response.data["data"][0];
      quote.value = data.quoteText;
      quoteAuthor.value = data.quoteAuthor;
      quoteGenre.value = data.quoteGenre;
    };
    const navigateToAuthor = () => {
      router.push({ name: "AuthorView", params: quoteAuthor.value });
    };
    return { quote, quoteAuthor, quoteGenre, getRandomQuote, navigateToAuthor };
  },
};
</script>
