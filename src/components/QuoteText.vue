<template>
  <div class="p-6 max-w-sm mx-auto my-6 flex items-center space-x-4">
    <h1 class="text-2xl">"{{ quoteText }}"</h1>
  </div>
</template>

<script>
export default {
  name: "QuoteText",
  props: {
    quoteText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap");
h1 {
  font-family: "Lato", "Courier New", Courier, monospace;
}
div {
  border-left-style: solid;
  border-left-color: #f7df94;
  border-left-width: 8px;
}
</style>
