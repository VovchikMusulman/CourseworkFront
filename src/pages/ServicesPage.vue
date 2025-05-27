<template>
  <div class="unified-loft-hous">
    <img src="../assets/img/ServicesPage/UnifiedLoftHouse.png" alt="UnifiedLoftHouse">
    <div class="furniture-making">
      <h2>Изготовление мебели в<br>
        стиле LOFT для вашего<br>
        бизнеса и дома</h2>
      <p>Изготавливаем мебель и сложные конструкции в стиле лофт под<br>
        заказ из металла, дерева и текстиля. Мы создаем проекты от<br>
        индивидуальных решений до серийной продукции. Реализуем<br>
        комплексную меблировку коммерческого и жилового пространства</p>
      <section>
        <article>
          <img src="" alt="">
          <h2>Культура работы</h2>
          <p>Команда SibSvarkaPlus состоит из профессионалов,<br>
            любящих и понимающих свою работу в деталях!</p>
        </article>
        <article>
          <img src="" alt="">
          <h2>Мастерство</h2>
          <p>Высокая квалификация специалистов на<br>
            каждом этапе производства</p>
        </article>
        <article>
          <img src="" alt="">
          <h2>Гарантия качества</h2>
          <p>Заключаем договора и соблюдаем<br>
            гарантийные обязательства</p>
        </article>
      </section>
    </div>
  </div>
  <div class="service">
    <h2>УСЛУГИ SibSvarkaPlus</h2>
    <p>Добро пожаловать! Мы предлагаем широкий ассортимент мебели в стиле LOFT как для<br>
      жилых, так и для коммерческих помещений. Мы также предлагаем услуги по<br>
      изготовлению мебели на заказ соответствующий вашим потребностям.</p>
    <section>
      <article style="background-image: url('src/assets/img/ServicesPage/ServiceImg1.png');">
        <h2>Хостелы
          Апартаменты</h2>
        <p>Создание износа стойкой и эргономичной
          мебели для курортного и туристического
          бизнеса</p>
      </article>
      <article style="background-image: url('src/assets/img/ServicesPage/ServiceImg2.png');">
        <h2>Отели
          Гостиницы</h2>
        <p>Комплексный подход по меблировки на
          базе серийной мебели под ваш проект и
          индивидуального проектирования</p>
      </article>
      <article style="background-image: url('src/assets/img/ServicesPage/ServiceImg3.png');">
        <h2>Торговые
          пространства</h2>
        <p>Изготовление торгового оборудования и
          комплексная работа по реализации шоу
          рума, магазина и студии</p>
      </article>
      <article style="background-image: url('src/assets/img/ServicesPage/ServiceImg4.png');">
        <h2>Офис
          Рабочие зоны</h2>
        <p>Проектирование рабочего и офисного
          пространства стиле лофт под вас</p>
      </article>
      <article style="background-image: url('src/assets/img/ServicesPage/ServiceImg5.png');">
        <h2>Контрактное
          Производство</h2>
        <p>Производство серийной мебели под
          маркетплейс и сете, с объемом от 20
          изделий в месяц</p>
      </article>
      <article style="background-image: url('src/assets/img/ServicesPage/ServiceImg6.png');">
        <h2>Рестораны
          Бары</h2>
        <p>От инженерного решения до реализации
          проекта под ключ</p>
      </article>
      <article style="background-image: url('src/assets/img/ServicesPage/ServiceImg7.png');">
        <h2>КВАРТИРЫ
          Студии</h2>
        <p>Создание Мебели в стиле лофт для вашего
          жилого пространства по индивидуальному
          проекту</p>
      </article>
      <article style="background-image: url('src/assets/img/ServicesPage/ServiceImg8.png');">
        <h2>Дома
          Барнхаусы</h2>
        <p>Полная меблировка загородного
          пространства в стиле лофт с
          индивидуальным подходом</p>
      </article>
      <article style="background-image: url('src/assets/img/ServicesPage/ServiceImg9.png');">
        <h2>Нужен
          Индивидуальный подход?</h2>
        <p>Оставьте заявку и наш руководитель
          свяжется с вами чтобы обсудит ваше идею</p>
      </article>
    </section>
  </div>
  <div class="questions">
    <h2>Остались вопросы?</h2>
    <p>Напишите нам и мы ответим</p>
    <button onclick="document.location='contacts'">Написать</button>
  </div>
</template>

<script setup>
</script>

<style scoped>
.unified-loft-hous {
  display: flex;
  height: 620px;
}

.unified-loft-hous > img {
  width: 50%;
}

.furniture-making {
  margin: auto 4% ;
}

.furniture-making > h2 {
  font-size: 31px;
  white-space: pre-line;
}

.service {
  padding: 90px 0;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service section {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  justify-content: space-around;
  gap: 40px;
}

.service article {
  width: 360px;
  height: 430px;
  gap: 11px;
  padding: 45px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: black 0px -50px 100px inset;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
  border-radius: 12px;
}

.service > h2 {
  color: white;
  font-size: 28px;
}

.service > p {
  color: white;
  font-size: 16px;
}

.service article > h2 {
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 0px;
}

.service article > p {
  color: white;
  font-size: 14px;
}

.questions {
  background-image: url('../assets/img/ServicesPage/QuestionsImg.png');
  box-shadow: black 0px 0px 1000px 100px inset;
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.questions button {
  padding: 12px 60px;
  margin-top: 16px;
  width: fit-content;
  background-color: #212529;
}

.questions p,
.questions h2 {
  color: white;
}
</style>