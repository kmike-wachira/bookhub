
<template>
  <div class="d-flex justify-content-center mt-3">
    <router-link to="/">Home</router-link> |
    <router-link to="/books">Books</router-link>
  </div>
  <div class="page-container my-5">
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import BooksPage from "./components/views/HomePage.vue";
import BookDescription from "./components/views/BookDescComponent.vue";

export default {
  components: {
    BooksPage,
    BookDescription,
    Navbar,
  },
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #0a1322;
  color: wheat;
}
</style>
