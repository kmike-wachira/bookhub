<template>
  <div class="container pt-4">
    <search />
  </div>
  <div class="container mt-4">
    <h5 class="my-3">Pick from available genres</h5>
    <div class="row">
      <Categories />
    </div>
  </div>
  <div class="container p-4">
    <p>Available Books</p>
    <BookCard :books="books" />
  </div>
  
</template>

<script>
import BookCard from "../BookCardComponent.vue";
import Categories from "../Categories.vue";
import Search from "../SearchComponent.vue";
import mybooks from "../../assets/data.json";

export default {
  components: {
    BookCard,
    Categories,
    Search,
  },
  data() {
    return {
      name: "Book Hub",
      books: mybooks,
    };
  },
  methods: {},
};
</script>

