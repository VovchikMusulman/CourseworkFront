<template>
  <footer class="footer">
    <hr>
    <div class="footerLinks">
      <div>
        <h2>Каталог мебели</h2>
          <nav>
            <ul>
              <li><a href="/catalog" >Кровати ЛОФТ</a></li>
              <li><a href="/catalog" >Прихожие</a></li>
              <li><a href="/catalog" >Тумбы</a></li>
              <li><a href="/catalog" >Комоды</a></li>
              <li><a href="/catalog" >Шкафы</a></li>
            </ul>
          </nav>
      </div>
      <div class="linkBoxNoneH2">
        <nav>
          <ul>
            <li><a href="/catalog" >Стеллажи</a></li>
            <li><a href="/catalog" >Столы</a></li>
            <li><a href="/catalog" >Стулья</a></li>
            <li><a href="/catalog" >Полки</a></li>
          </ul>
        </nav>
      </div >
      <div>
        <h2>Компания</h2>
        <nav>
          <ul>
            <li><a href="/contacts" >О нас</a></li>
            <li><a href="/" @click.prevent="scrollToGallery">Галерея</a></li>
            <li><a href="/reviews">Отзывы</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <h2>Покупателям</h2>
        <nav>
          <ul>
            <li><a href="/delivery" >Доставка</a></li>
            <li><a href="/guarantees" >Гарантии</a></li>
            <li><a href="/services" >Услуги</a></li>
            <li><a href="/" >Новости</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <h2>Всегда на связи</h2>
          <nav>
            <ul>
              <li><img src="../assets/icons/locLink.png" alt="a"><a href="/contacts" >Контакты</a></li>
              <li><img src="../assets/icons/phone.png" alt="a"><a href="tel:8 952 155-38-82">8 952 155-38-82</a></li>
              <li><img src="../assets/icons/mailLink.png" alt="a"><a href="mailto:SibSvarkaPlus@yandex.ru">SibSvarkaPlus@yandex.ru</a></li>
            </ul>
          </nav>
      </div>
      <div class="linkBoxNoneH2">
        <nav>
          <ul>
            <li><img src="../assets/icons/time.png" alt="a"><a href="/contacts" >пн - вс 07:00 - 18:00</a></li>
            <li><img src="../assets/icons/vkLink.png" alt="a"><a href="https://vk.com/SibSvarkaPlus">ВКонтакте</a></li>
            <li><img src="../assets/icons/tgLink.png" alt="a"><a href="https://t.me/SibSvarkaPlus">Telegram</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="footerRights">
      <p>©  SibSvarkaPlus - Все права защищены продукция сертифицирована</p>
      <nav>
        <p><a href="/contacts">Поддержка</a></p>
        <p><a href="/404">Публичная оферта</a></p>
        <p><a href="/404">Обработка персональных</a></p>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const scrollToGallery = async () => {
  await router.push('/'); // Переход на главную страницу
  const galleryElement = document.getElementById('gallery');
  if (galleryElement) {
    galleryElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
hr {
  position: absolute;
  width: 1800px;
  padding-top: 25px;
  border: none;
  border-bottom: 1px solid #696969;
}

.footer {
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 60px;
}

h2 {
  color: #696969;
  font-size: 14px;
  margin-bottom: 22px;
}

li {
  color: #696969;
  display: flex;
  align-items: center;
  list-style: none;
  gap: 8px;
  font-size: 12px;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

p {
  font-size: 12px;
  color: #696969;
  text-transform: uppercase;
}

.footerLinks {
  display: flex;
  justify-content: space-between;
  padding-right: 180px;
}

.footerLinks > div {
  display: flex;
  flex-direction: column;
}

.linkBoxNoneH2 {
  margin-top: 38px;
}

.footerRights {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  border-top: #696969 solid 1px;
  border-bottom: #696969 solid 1px;
}

.footerRights nav {
  display: flex;
  gap: 16px;
}

a {
  text-decoration: none;
  color: #696969;
}
</style>