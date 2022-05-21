<template>
  <div class="input-group rounded">
    <input
      type="search"
      class="form-control rounded input"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
    />
    <span class="input-group-text border-0 text-white" id="search-addon">
      <i class="fas fa-search"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped>
.input {
  border-radius: 60px;
  padding: 20px;
  color: white;
  background-color: black;
  outline-color: black;
}
</style>