<template>
  <list-products />
    <div id="app" class="catalog-page">
      <CategoryList />
    </div>
</template>

<script setup>
import ListProducts from "@/components/ListProducts.vue";
import CategoryList from '@/components/CategoryList.vue';

</script>

<style scoped>
.catalog-page {
  max-width: 1800px;
  margin: 0 auto;
}
</style>