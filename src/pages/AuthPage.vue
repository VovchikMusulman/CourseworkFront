<template>
  <div class="auth-container">
    <navigation-img />
    <div class="card">
      <h1 class="title">АВТОРИЗАЦИЯ</h1>

      <div class="tabs">
        <button :class="{ active: mode === 'login' }" @click="mode = 'login'">ВХОД</button>
        <button :class="{ active: mode === 'register' }" @click="mode = 'register'">РЕГИСТРАЦИЯ</button>
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="input-group" v-if="mode === 'register'">
          <label for="name">Имя</label>
          <input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Ваше имя"
          />
        </div>

        <div class="input-group">
          <label for="email">Email</label>
          <input
              id="email"
              v-model="form.email"
              type="email"
              required
              autocomplete="email"
              placeholder="Ваш email"
          />
        </div>

        <div class="input-group" v-if="mode === 'register'">
          <label for="phone">Телефон</label>
          <input
              id="phone"
              v-model="form.phone"
              type="tel"
              required
              placeholder="Ваш номер телефона"
          />
        </div>

        <div class="input-group" v-if="mode === 'register'">
          <label for="city">Город</label>
          <input
              id="city"
              v-model="form.city"
              type="text"
              required
              placeholder="Ваш город"
          />
        </div>

        <div class="input-group" v-if="mode === 'register'">
          <label for="address">Адрес (улица, дом, квартира)</label>
          <input
              id="address"
              v-model="form.address"
              type="text"
              required
              placeholder="Улица, дом, квартира"
          />
        </div>

        <div class="input-group">
          <label for="password">Пароль</label>
          <input
              id="password"
              v-model="form.password"
              type="password"
              required
              :autocomplete="mode === 'login' ? 'current-password' : 'new-password'"
              placeholder="Ваш пароль"
          />
        </div>

        <div class="input-group" v-if="mode === 'register'">
          <label for="password_confirmation">Подтвердите пароль</label>
          <input
              id="password_confirmation"
              v-model="form.password_confirmation"
              type="password"
              required
              autocomplete="new-password"
          />
        </div>

        <p v-if="error" class="error">{{ error }}</p>
        <button type="submit" class="submit-btn">
          {{ mode === 'login' ? 'ВХОД' : 'РЕГИСТРАЦИЯ' }}
        </button>
      </form>
    </div>
    <navigation />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import NavigationImg from "@/components/NavigationImg.vue";
import Navigation from "@/components/Navigation.vue";

const router = useRouter()
const mode = ref('login')
const error = ref(null)

const form = ref({
  name: '',
  email: '',
  phone: '',
  city: '',
  address: '',
  password: '',
  password_confirmation: ''
})

const handleSubmit = async () => {
  error.value = null

  const endpoint = mode.value === 'login' ? '/api/login' : '/api/register'

  try {
    const response = await axios.post(endpoint, form.value, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    localStorage.setItem('token', response.data.access_token)
    localStorage.setItem('user', JSON.stringify(response.data.user))

    router.push('/profile')

  } catch (err) {
    console.error('Ошибка запроса:', err.response)
    error.value = err.response?.data?.message || 'Ошибка при отправке формы'
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: space-between;
}

.card {
  margin: 100px 0;
  width: 500px;
  padding: 30px;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: white;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.tabs button {
  padding: 12px 24px;
  border: none;
  background: none;
  color: #222222;
  border-radius: 8px;
  font-weight: bold;
  text-transform: uppercase;
}

.tabs .active {
  background: #222222;
  color: white;
}

.description {
  margin-bottom: 20px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 8px;
  font-size: 14px;
  color: #555;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.input-group input::placeholder {
  color: #aaa;
  font-size: 14px;
}

.error {
  color: red;
  margin-bottom: 15px;
  text-align: center;
}

.submit-btn {
  width: 100%;
  background: #222222;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s;
}
</style>