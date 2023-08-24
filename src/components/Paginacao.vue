<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
</script>

<template>
  <h1>{{ msg }}</h1>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li v-for="item in items" :key="item.id" class="page-item">
        <router-link :to="`/pagina${item.id}`" class="page-link">{{
          item.id
        }}</router-link>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
