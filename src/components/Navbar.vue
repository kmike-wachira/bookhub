<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-black fixed-top">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="
            navbar-nav
            justify-content-center
            align-items-center
            mb-2 mb-lg-0
          "
        >
          <!-- Link -->
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">My Books</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">All Books</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
export default {};
</script>

<style>
</style>