<template>
  <div class="product-page">
    <div v-if="loading" class="loading">Загрузка...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="product" class="product-container">
      <div class="product-gallery">
        <div class="main-image">
          <img
              :src="product.images?.[0] ? `http://localhost:8000/storage/${product.images[0]}` : '/placeholder-product.jpg'"
              :alt="product.name"
          />
        </div>
      </div>

      <div class="product-details">
        <h1>{{ product.name }}</h1>
        <div class="price">{{ product.price }} ₽</div>
        <p>{{ product.description }}</p>
        <button class="add-to-cart-btn" @click="addToCart">Добавить в корзину</button>
      </div>
    </div>
  </div>
  <new-loft />
</template>

<script>
import NewLoft from "@/components/NewLoft.vue";

export default {
  components: {NewLoft},
  data() {
    return {
      product: null,
      loading: false,
      error: null
    };
  },
  async created() {
    this.loading = true;
    try {
      const response = await fetch(`http://localhost:8000/api/products/search/${this.$route.params.slug}`);
      this.product = (await response.json())[0];
    } catch (err) {
      this.error = 'Ошибка загрузки';
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async addToCart() {
      if (!this.product) return;

      try {
        const response = await fetch('http://localhost:8000/api/cart/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            product_id: this.product.id,
            quantity: 1
          })
        });

        if (!response.ok) {
          if (response.status === 401) {
            this.$router.push('/login');
          }
          throw new Error('Ошибка сервера');
        }

        alert('Товар успешно добавлен в корзину');
        if (window.updateCartCount) {
          window.updateCartCount();
        }
      } catch (error) {
        console.error('Ошибка:', error);
        alert(error.message || 'Не удалось добавить товар');
      }
    }
  }
};
</script>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: 100px auto;
}

.product-container {
  display: flex;
  gap: 3rem;
}

.product-gallery {
  min-width: 500px;
  min-height: 500px;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 16px;
  border: 1px solid black;
  box-shadow: 10px 10px 10px 10px black inset;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.add-to-cart-btn {
  background: #333;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>