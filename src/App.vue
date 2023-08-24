<script setup>
import { RouterLink, RouterView } from "vue-router";
import Paginacao from "./components/Paginacao.vue";
</script>

<template>
  <Paginacao msg="Paginação Vue" />

  <router-view></router-view>
</template>

<style scoped></style>
