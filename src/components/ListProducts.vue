<template>
  <nav class="ListProducts">
    <div>
      <img src="../assets/img/ListProducts/ListProducts1.png" alt="ListProducts1">
      <p>Кровати</p>
    </div>
    <div>
      <img src="../assets/img/ListProducts/ListProducts2.png" alt="ListProducts2">
      <p>Двухъярусные кровати</p>
    </div>
    <div>
      <img src="../assets/img/ListProducts/ListProducts3.png" alt="ListProducts3">
      <p>Стулья</p>
    </div>
    <div>
      <img src="../assets/img/ListProducts/ListProducts4.png" alt="ListProducts4">
      <p>Прихожие</p>
    </div>
    <div>
      <img src="../assets/img/ListProducts/ListProducts5.png" alt="ListProducts5">
      <p>Шкафы</p>
    </div>
    <div>
      <img src="../assets/img/ListProducts/ListProducts6.png" alt="ListProducts6">
      <p>Стеллажи</p>
    </div>
    <div>
      <img src="../assets/img/ListProducts/ListProducts7.png" alt="ListProducts7">
      <p>Тумбы</p>
    </div>
    <div>
      <img src="../assets/img/ListProducts/ListProducts8.png" alt="ListProducts8">
      <p>Комоды</p>
    </div>
    <div>
      <img src="../assets/img/ListProducts/ListProducts9.png" alt="ListProducts9">
      <p>Столы</p>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>

.ListProducts{
  padding: 32px 0;
  display: flex;
  justify-content: center;
}

.ListProducts div {
  height: 130px;
  width: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.ListProducts p {
  color: #696969;
  margin: 16px;
  text-align: center;
}

</style>