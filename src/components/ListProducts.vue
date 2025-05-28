<template>
  <nav class="ListProducts">
    <div
        v-for="category in categories"
        :key="category.id"
        @click="$router.push(`/categories/${category.slug || category.id}`)"
    >
      <img
          :src="category.image ? `http://localhost:8000/storage/${category.image}` : '/placeholder-category.jpg'"
          :alt="category.name"
      >
      <p>{{ category.name }}</p>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      categories: []
    };
  },
  async created() {
    this.categories = await fetch('http://localhost:8000/api/categories').then(res => res.json());
  }
};
</script>

<style scoped>
.ListProducts {
  padding: 32px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.ListProducts div {
  height: 130px;
  width: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.ListProducts img {
  height: 80px;
  width: auto;
  object-fit: contain;
}

.ListProducts p {
  color: #696969;
  margin: 16px 0 0 0;
  text-align: center;
}
</style>