<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="bg-image hover-overlay ripple w-100">
          <!-- <iframe :src="book.cover" frameborder="0"></iframe> -->
          <img
            :src="book.thumbnailUrl"
            class="img-fluid w-100"
            :alt="book.title"
          />
          <a href="#!">
            <div
              class="mask"
              style="background-color: rgba(57, 192, 237, 0.2)"
            ></div>
          </a>
        </div>
      </div>
      <div class="col-md-7">
        <h1 class="mb-3 h2">{{ book.title }}</h1>
        <h4 class="mb-3 h5 text-muted">Authors >> {{ book.authors[0] }}</h4>
        <hr class="my-4" />
        <h3 class="mb-3 h4">Description</h3>
        <p class="">
          {{ book.longDescription }}
        </p>
        <hr class="my-4" />
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4">
            <h5 class="mb-3 h5">Authors</h5>
            <p class="text-muted">Written by</p>
            <p class="" v-for="(author, index) in book.authors" :key="index">
              {{ index + 1 }} > {{ author }}
            </p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <h5 class="mb-3 h5">Book Category</h5>
            <p class="text-muted">The book fall under the following category</p>
            <div>
              <span
                class="badge bg-primary m-2"
                v-for="(category, index) in book.categories"
                :key="index"
                >{{ category }}</span
              >
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <h5 class="mb-3 h5 btn btn-outline-warning">Borrow Now</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookDescription",
  data() {
    return {
      book: {
        _id: 1,
        title: "Unlocking Android",
        isbn: "1933988673",
        pageCount: 416,
        publishedDate: {
          $date: "2009-04-01T00:00:00.000-0700",
        },
        thumbnailUrl:
          "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
        shortDescription:
          "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
        longDescription:
          "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
        status: "PUBLISH",
        authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
        categories: ["Open Source", "Mobile"],
      },
    };
  },
};
</script>

<style>
</style>