<script setup>

import NavigationImg from "@/components/NavigationImg.vue";
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <div class="guarantees-page">
    <navigation-img />
    <div class="content">
      <h2>404</h2>
      <p><b>Ой! Кажется, мы потерялись...</b></p>
      <p>Вы попали на страницу, которой не существует. Возможно, она была перемещена или удалена. Но не переживайте, у нас есть несколько идей, что вы можете сделать дальше:</p>
      <ul>
        <li><b>Вернитесь на главную страницу</b>и начните с начала.</li>
        <li><b>Свяжитесь с нами</b>, если вам нужна помощь.</li>
      </ul>
      <p>Спасибо за понимание, и давайте найдем правильный путь вместе!</p>
    </div>
    <navigation />
  </div>

</template>

<style scoped>
.guarantees-page {
  display: flex;
  justify-content: space-between;
}

.content {
  width: 770px;
  margin: 100px 0;
}

ul {
  margin: 20px 25px;
}

h2 {
  font-size: 40px;
}

p {
  margin: 16px 0;
  font-size: 14px;
  line-height: 21px;
  color: #212529;
}
</style>