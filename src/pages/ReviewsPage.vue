<template>
  <div class="reviews-page">
    <div class="header">
      <h1>Отзывы о товарах</h1>
      <p class="subtitle">SibSvarkaPlus - Ваше мнение важно для нас!</p>
      <button v-if="!showAddForm" @click="showAddForm = true" class="add-review-btn">
        Оставить отзыв
      </button>
    </div>

    <div v-if="showAddForm" class="add-review-form">
      <h2>Добавить отзыв</h2>
      <form @submit.prevent="submitReview">
        <div class="form-group">
          <label>Товар:</label>
          <select v-model="newReview.product_id" required>
            <option v-for="product in products" :key="product.id" :value="product.id">
              {{ product.name }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Оценка:</label>
          <div class="rating-select">
            <span v-for="star in 5" :key="star"
                  @click="newReview.rating = star"
                  :class="{ 'filled': star <= newReview.rating }">
              ★
            </span>
          </div>
        </div>

        <div class="form-group">
          <label>Комментарий:</label>
          <textarea v-model="newReview.comment" rows="3" placeholder="Ваше мнение о товаре"></textarea>
        </div>

        <div class="form-actions">
          <button type="button" @click="cancelAddReview" class="cancel-btn">Отмена</button>
          <button type="submit" class="submit-btn">Отправить</button>
        </div>
      </form>
    </div>

    <div v-if="isLoading" class="loading">Загрузка отзывов...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <div v-if="reviews.length === 0" class="no-reviews">
        Пока нет отзывов. Будьте первым!
      </div>

      <div v-for="review in reviews" :key="review.id" class="review-card">
        <div class="review-header">
          <div class="product-info">
            <h3>{{ getProductName(review.product_id) }}</h3>
            <span class="review-date">{{ formatDate(review.created_at) }}</span>
          </div>
          <div class="rating">
            <span v-for="star in 5" :key="star" :class="{ 'filled': star <= review.rating }">
              ★
            </span>
          </div>
        </div>

        <div class="review-comment">
          {{ review.comment || 'Пользователь не оставил комментарий' }}
        </div>

        <div class="review-footer">
          <span class="user-info">Пользователь #{{ review.user_id }}</span>
          <button v-if="canDeleteReview(review.user_id)"
                  @click="deleteReview(review.id)"
                  class="delete-btn">
            Удалить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const reviews = ref([]);
const products = ref([]);
const isLoading = ref(true);
const error = ref(null);
const showAddForm = ref(false);

const newReview = ref({
  product_id: '',
  rating: 0,
  comment: ''
});

const fetchData = async () => {
  try {
    isLoading.value = true;
    error.value = null;

    const [reviewsRes, productsRes] = await Promise.all([
      axios.get('/api/reviews'),
      axios.get('/api/products')
    ]);

    reviews.value = reviewsRes.data;
    products.value = productsRes.data;
  } catch (err) {
    console.error('Ошибка загрузки данных:', err);
    error.value = 'Не удалось загрузить отзывы. Пожалуйста, попробуйте позже.';
  } finally {
    isLoading.value = false;
  }
};

const submitReview = async () => {
  try {
    const reviewData = {
      ...newReview.value,
      user_id: authStore.user?.id
    };

    await axios.post('/api/reviews', reviewData, {
      headers: {
        'Authorization': `Bearer ${authStore.token}`
      }
    });

    await fetchData();
    showAddForm.value = false;
    newReview.value = { product_id: '', rating: 0, comment: '' };
  } catch (err) {
    console.error('Ошибка при отправке отзыва:', err);
    error.value = 'Не удалось отправить отзыв. Пожалуйста, попробуйте снова.';
  }
};

const deleteReview = async (reviewId) => {
  if (!confirm('Вы уверены, что хотите удалить этот отзыв?')) return;

  try {
    await axios.delete(`/api/reviews/${reviewId}`, {
      headers: {
        'Authorization': `Bearer ${authStore.token}`
      }
    });
    await fetchData();
  } catch (err) {
    console.error('Ошибка при удалении отзыва:', err);
    error.value = 'Не удалось удалить отзыв.';
  }
};

const cancelAddReview = () => {
  showAddForm.value = false;
  newReview.value = { product_id: '', rating: 0, comment: '' };
};

const getProductName = (productId) => {
  const product = products.value.find(p => p.id === productId);
  return product ? product.name : `Товар #${productId}`;
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const canDeleteReview = (userId) => {
  return authStore.user && (authStore.user.id === userId || authStore.user.is_admin);
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.reviews-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.subtitle {
  color: #666;
  margin-bottom: 20px;
}

.add-review-btn {
  background-color: #222;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.add-review-btn:hover {
  background-color: #444;
}

.add-review-form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group select,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group textarea {
  resize: vertical;
}

.rating-select {
  font-size: 24px;
  color: #ccc;
  cursor: pointer;
}

.rating-select .filled {
  color: #ffc107;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.submit-btn, .cancel-btn {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: black;
}

.submit-btn {
  background-color: #222;
  color: white;
  border: none;
}

.cancel-btn {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
}

.loading, .error, .no-reviews {
  text-align: center;
  padding: 30px;
  font-size: 1.1rem;
  color: #666;
}

.error {
  color: #d32f2f;
}

.review-card {
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #fff;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.product-info h3 {
  margin: 0;
  color: #333;
}

.review-date {
  font-size: 0.9rem;
  color: #666;
}

.rating {
  color: #ccc;
  font-size: 1.2rem;
}

.rating .filled {
  color: #ffc107;
}

.review-comment {
  margin: 15px 0;
  line-height: 1.6;
  color: #424242;
  font-style: italic;
}

.review-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #757575;
}

.user-info {
  font-style: italic;
}

.delete-btn {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}
</style>