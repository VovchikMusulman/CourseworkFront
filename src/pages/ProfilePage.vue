<template>
  <div class="profile-page">
    <navigation-img />
    <div class="card">
      <div class="profile-header">
        <h1 class="title">ПРОФИЛЬ</h1>
        <button @click="handleLogout" class="logout-btn">ВЫЙТИ</button>
      </div>

      <div v-if="loading" class="loading">Загрузка данных...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else class="profile-info">
        <div class="input-group">
          <label>Имя</label>
          <div class="info-value">{{ userData.name || 'Не указано' }}</div>
        </div>

        <div class="input-group">
          <label>Почта</label>
          <div class="info-value">{{ userData.email || 'Не указано' }}</div>
        </div>

        <div class="input-group">
          <label>Телефон</label>
          <div class="info-value">{{ userData.phone || 'Не указано' }}</div>
        </div>

        <div class="input-group">
          <label>Город</label>
          <div class="info-value">{{ userData.city || 'Не указано' }}</div>
        </div>

        <div class="input-group">
          <label>Адрес</label>
          <div class="info-value">{{ userData.address || 'Не указано' }}</div>
        </div>

        <div class="registration-date">
          <span>Дата регистрации: {{ formatDate(userData.created_at) }}</span>
        </div>
      </div>
    </div>
    <navigation />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import NavigationImg from "@/components/NavigationImg.vue";
import Navigation from "@/components/Navigation.vue";

const router = useRouter()
const userData = ref({
  name: '',
  email: '',
  phone: '',
  city: '',
  address: '',
  created_at: ''
})
const loading = ref(true)
const error = ref(null)

const fetchUserData = async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('Токен отсутствует')
    }

    const response = await axios.get('http://localhost:8000/api/user', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })

    userData.value = response.data
    localStorage.setItem('user', JSON.stringify(userData.value))

  } catch (err) {
    console.error('Ошибка при получении данных:', err)
    error.value = err.response?.data?.message || err.message || 'Ошибка при загрузке данных'

    if (err.response?.status === 401) {
      router.push('/login')
    }
  } finally {
    loading.value = false
  }
}

const formatDate = (dateString) => {
  if (!dateString) return 'Не указана'
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU')
  } catch {
    return 'Не указана'
  }
}

const handleLogout = async () => {
  try {
    const token = localStorage.getItem('token')
    if (token) {
      await axios.post('http://localhost:8000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    }
  } catch (err) {
    console.error('Ошибка при выходе:', err)
  } finally {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/login')
  }
}

onMounted(() => {
  const savedUser = localStorage.getItem('user')
  if (savedUser) {
    try {
      userData.value = JSON.parse(savedUser)
    } catch {
      localStorage.removeItem('user')
    }
  }

  fetchUserData()
})
</script>

<style scoped>
.profile-page {
  display: flex;
  justify-content: space-between;
}

.card {
  margin: 100px 0;
  width: 500px;
  padding: 30px;
  justify-content: center;
}

.title {
  text-align: center;
  color: #333;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.info-value {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #333;
}

.registration-date {
  margin-top: 30px;
  text-align: center;
  font-size: 14px;
  color: #696969;
}

.loading, .error {
  text-align: center;
  padding: 20px;
  font-size: 18px;
}

.error {
  color: red;
  margin-bottom: 15px;
}

h1 {
  margin-bottom: 0;
}
</style>