<script setup>
</script>

<template>
  <header>
    <div class="header">
      <router-link to="/" class="logo">SIBSVARKAPLUS</router-link>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/catalog">Каталог</router-link>
        <router-link to="/services">Услуги</router-link>
        <router-link to="/contacts">Контакты</router-link>
      </nav>
      <nav>
        <router-link to="/contacts"><img src="../assets/icons/contacts.png" alt="contacts"></router-link>
        <router-link to="/404"><img src="../assets/icons/favourites.png" alt="favourites"></router-link>
        <router-link to="/cart"><img src="../assets/icons/cart.png" alt="cart"></router-link>
        <router-link to="/login"><img src="../assets/icons/profile.png" alt="profile"></router-link>
      </nav>
    </div>
    <div class="headerDown">
      <p style="color: white">>>></p>
      <p class="headerDownText">10% Скидка от 3х товаров!</p>
      <p style="color: white">+</p>
      <p class="headerDownText">Бесплатная доставка по России *</p>
      <p style="color: white"><<<</p>
    </div>
  </header>
</template>

<style scoped>

.header {
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  color: white;
  padding: 6px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.headerDown {
  margin-top: 45px;
  padding: 5px;
  justify-content: center;
  gap: 8px;
  display: flex;
  align-items: center;
  background-color: black;
}

.headerDownText{
  color: yellow;
}

nav {
  font-size: 12px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 16px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

.logo {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 22px;
}
</style>