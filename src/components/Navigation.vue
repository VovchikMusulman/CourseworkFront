<script setup>

</script>

<template>
<div class="navigation">
  <h2>SIBSVARKAPLUS</h2>
  <nav>
    <router-link to="/services">О нас</router-link>
    <router-link to="/contacts">Контакты</router-link>
    <router-link to="/services">Услуги</router-link>
    <router-link to="/">Оставить отзыв</router-link>
    <router-link to="/reviews">Отзывы</router-link>
  </nav>
  <h2>ПОКУПАТЕЛЯМ</h2>
  <nav>
    <router-link to="/delivery">Доставка</router-link>
    <router-link to="/guarantees">Гарантии</router-link>
    <router-link to="/404">Обработка персональных данных</router-link>
    <router-link to="/404">Публичная оферта</router-link>
  </nav>
</div>
</template>

<style scoped>
.navigation {
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  width: 480px;
  padding: 35px 48px;
  min-height: 683px;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 19px;
  margin-left: 16px;
}

nav a {
  color: white;
  text-decoration: none;
}

h2 {
  color: white;
  margin: 30px 0;
}
</style>