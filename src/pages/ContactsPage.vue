<template>
  <div class="contacts-page">
    <img src="../assets/img/ContactsPage/ContactsImg.png" alt="ContactsImg">
    <div class="contacts-info">
      <h2>Контакты</h2>
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
          <li>
            <a href="kontaktyi/">
              <img src="../assets/icons/ContactsPage/time.png" alt="">
              <span>пн - пт 09:00 - 20:00 сб - вс 10:00 - 20:00</span></a>
          </li>
        </ul>
      </nav>
      <hr>
      <p class="headlines">Адрес в г. Томск</p>
      <p>ул. Герцена, 18<br>
        Тел: +7 (3822) 97-71-39</p>
      <hr>
      <p class="headlines">Юридический адрес</p>
      <p>916108, РФ, обл. Томская, г. Томск,<br>
        ул. Герцена, 18</p>
      <p class="headlines">Фактический адрес</p>
      <p>916108, РФ, обл. Томская, г. Томск,<br>
        ул. Герцена, 18, ТТИТ, Главный корпус, SibSvarkaPlus.</p>
      <p class="headlines">Директор</p>
      <p>Атаманенко Вячеслав Николаевичь<br>
        Тел: 8 952 155-38-82<br>
        Электронная почта: SibSvarkaPlus@yandex.ru</p>
      <hr>
      <p>Полное наименование организации:<br>
        Сибирская Сварка Плюс «SibSvarkaPlus» </p>
      <p>ИНН 1234567890<br>
        ОГРН 1234567890123<br>
        КПП 123456789 </p>
    </div>
    <navigation />
  </div>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
</script>

<style scoped>
.contacts-page {
  display: flex;
  justify-content: space-between;
}

.contacts-info {
  padding-top: 100px;
  width: 790px;
}

.contacts-info a {
  text-decoration: none;
  color: black;
  display: flex;
  gap: 8px;
  text-align: center;
  align-items: center;
  height: 32px;
}

.headlines {
  font-weight: bold;
}

h2 {
  font-size: 40px;
  margin-bottom: 28px;
}

ul {
  list-style: none;
  margin-bottom: 19px;
}

p {
  line-height: 21px;
  margin: 19px 0;
}

</style>