<template>
  <div class="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* Глобальные стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
}

h1, h2, h3 {
  color: #333;
}

button {
  background-color: #222222;
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>