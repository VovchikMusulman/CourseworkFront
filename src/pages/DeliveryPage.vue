<script setup>

import Navigation from "@/components/Navigation.vue";
import NavigationImg from "@/components/NavigationImg.vue";
</script>

<template>
  <div class="delivery-page">
    <navigation-img />
    <div class="content">
      <div>
        <h2>Доставка</h2>
        <p class="subtitle">до 3х дней со склада в вашем городе</p>
        <hr>
        <p>Доставка мебели на территории России производиться транспортной компанией. Покупая мебель на
          сайте SibSvarkaPlus.ru, при стоимости товара от 80000 рублей, вы получаете доставку до склада вашего
          города в подарок, при условии, что ваш адрес доставки находится в черте города. Для удалённых от
          города районов мы берём на себя доставку только до ближайшего терминала транспортной компании
          КИТ.</p>
        <p>При покупке продукта на сайте SibSvarkaPlus.ru стоимостью ниже 80000 рублей, клиент оплачивает доставку самостоятельно.</p>
        <p>При оформлении заказа в рассрочку, стоимость доставки оплачивается клиентом.</p>
        <p>При возникновении вопросов, связывайтесь с нашими менеджерами в онлайн-чате или других
          удобных для вас каналах коммуникации, указанных на сайте (виджет для связи с компанией находится
          внизу справа).</p>
      </div>
      <div>
        <h2>Остались воросы?</h2>
        <p class="subtitle">Быстрая Консультация</p>
        <hr>
        <nav>
          <ul>
            <li>
              <a href="tel:8 952 155-38-82">
                <img src="../assets/icons/ContactsPage/phone.png" alt="">
                <span>8 952 155-38-82</span></a>
            </li>
            <li>
              <a href="mailto:SibSvarkaPlus@yandex.ru">
                <img src="../assets/icons/ContactsPage/mail.png" alt="">
                <span>SibSvarkaPlus@yandex.ru</span></a>
            </li>
            <li>
              <a href="https://t.me/SibSvarkaPlus">
                <img src="../assets/icons/ContactsPage/tg.png" alt="">
                <span>Telegram</span></a>
            </li>
            <li>
              <a href="https://vk.com/SibSvarkaPlus">
                <img src="../assets/icons/ContactsPage/vk.png" alt="">
                <span>ВКонтакте</span></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <navigation />
  </div>
</template>

<style scoped>
.delivery-page {
  display: flex;
  justify-content: space-between;
}

.content {
  display: flex;
  flex-direction: column;
  width: 770px;
  margin: 100px 0;
}

.subtitle {
  font-size: 18px;
  color: black;
}

nav {
  margin-top: 16px;
}

a {
  text-decoration: none;
  color: black;
  display: flex;
  gap: 8px;
  text-align: center;
  align-items: center;
  height: 32px;
}

p {
  margin: 16px 0;
  font-size: 14px;
  line-height: 21px;
}

ul {
  list-style: none;
}

.content h2:nth-child(1) {
  font-size: 40px;
}

.content h2:nth-child(2) {
  font-size: 24px;
}
</style>