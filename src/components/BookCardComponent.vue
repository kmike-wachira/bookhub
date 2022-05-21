<template>
  <div class="row">
    <div class="col-md-4" v-for="(book, index) in books" :key="index">
      <div class="card">
        <div
          class="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            class="img-fluid"
          />
          <a href="#!">
            <div class="mask"></div>
          </a>
        </div>

        <div class="card-body">
          <h5 class="card-title">{{ book.title}}</h5>
          <p class="card-text"> Author {{ book.author}}
           
          </p>
          <button type="button" class="btn btn-outline-warning">Borrow Book</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["books"],
};
</script>

<style scoped>
.card {
  color: white;
  background-color: #000000;
}
.mask {
  background-color: rgba(251, 251, 251, 0.15);
}
</style>