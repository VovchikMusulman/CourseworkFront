<template>
  <div class="cart-page">
    <navigation-img />
    <div class="content">
      <h1>Корзина</h1>

      <div v-if="cartItems.length === 0" class="empty-cart">
        Ваша корзина пуста
      </div>
      <div v-else class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <div>
            <div class="item-image">
              <img :src="item.product.images?.[0] ? `http://localhost:8000/storage/${item.product.images[0]}` : '/placeholder-product.jpg'" />
            </div>
            <div class="cart-item-img">
              <h3>{{ item.product.name }}</h3>
              <div>
                <input
                  type="number"
                  v-model.number="item.quantity"
                  min="1"
                  class="quantity-input"
                />
              </div>
              <p>В наличии: {{ item.product.quantity }}</p>
            </div>
          </div>
          <div class="cart-item-details">
            <div class="price"><b>{{ item.price }} ₽</b></div>
            <button class="remove-btn" @click="removeItem(item.id)">
              <img src="../assets/icons/delete.png" alt="Удалить">
            </button>
          </div>
        </div>

        <div class="cart-summary">
          <div class="total-price">
            Итого: {{ totalPrice }} ₽
          </div>
          <button>
            <a class="checkout-btn" href="/404">Оформить заказ</a>
          </button>
        </div>
      </div>
    </div>
    <navigation />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import NavigationImg from "@/components/NavigationImg.vue";

export default {
  components: {NavigationImg, Navigation},
  data() {
    return {
      cartItems: []
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  },
  async created() {
    const response = await fetch('/api/cart', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    this.cartItems = await response.json();
  },
  methods: {
    async removeItem(itemId) {
      await fetch(`/api/cart/remove/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    }
  }
};
</script>

<style scoped>
.cart-page {
  display: flex;
  justify-content: space-between;
}

.content {
  width: 700px;
  margin: 100px 0;
}

.empty-cart {
  text-align: center;
  padding: 2rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.cart-item > div{
  display: flex;
  gap: 25px;
}

.cart-item-img {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cart-item-details {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-image {
  width: 100px;
  height: 100px;
}

.item-image img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.quantity-input {
  width: 50px;
  padding: 5px;
  text-align: center;
}

.remove-btn {
  background: none;
  padding: 0;
  display: flex;
  justify-content: end;
}

.cart-summary {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
}

.checkout-btn {
  color: white;
  text-decoration: none;
}
</style>