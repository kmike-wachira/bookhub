<template>
  <div class="col-md-2 m-1" v-for="(genre, index) in genres" :key="index">
    <div class="category-holder p-3 shadow text-capitalize text-center">
      <p>{{ genre }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genres: [
        "Fiction",
        "Mystery",
        "literary Fiction",
        "Horror",
        "Historical",
        "Romance",
        "Speculative Fiction",
        "Science Fiction",
        "Fantasy",
        "Magical Realism",
      ],
    };
  },
};
</script>

<style scoped>
.category-holder {
  background-color: black;
  color: white;
  border-radius: 23px;
  cursor: pointer;
}
.category-holder:hover {
  box-shadow: 0px 0px 10px orange !important;
  /* border: 3px solid white;; */
}
</style>