<template>
  <div v-for="category in categories" :key="category.id" class="category-section">
    <h2>{{ category.name }}</h2>
    <div class="product-grid">
      <div
          v-for="product in productsByCategory[category.id]"
          :key="product.id"
          class="product-card"
          @click="$router.push(`/products/${product.slug}`)"
      >
        <img
            :src="product.images?.[0] ? `http://localhost:8000/storage/${product.images[0]}` : '/placeholder-product.jpg'"
            alt="Изображение товара"
        />
        <p>{{ product.name }}</p>
        <p class="price">{{ product.price }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      productsByCategory: {}
    };
  },
  async created() {
    const categories = await fetch('http://localhost:8000/api/categories').then(res => res.json());
    this.categories = categories;

    const products = await fetch('http://localhost:8000/api/products').then(res => res.json());
    this.categories.forEach(category => {
      this.productsByCategory[category.id] = products.filter(p => p.category_id === category.id);
    });
  }
};
</script>

<style scoped>
/* Стили остаются без изменений */
.category-section {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-section h2 {
  font-size: 32px;
  text-transform: uppercase;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  width: 344px;
  cursor: pointer;
}

.product-card img {
  width: 344px;
  height: 344px;
  border-radius: 16px;
  object-fit: cover;
}

.price {
  font-weight: bold;
}
</style>