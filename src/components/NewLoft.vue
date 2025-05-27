<script setup>

</script>

<template>
<div class="NewLoft">
  <h2>Новый loft</h2>
  <p>Линейка мебели в цвете</p>
  <div class="NewLoftImg">
    <img src="../assets/img/NewLoft/NewLoft1.png" alt="NewLoft1">
    <img src="../assets/img/NewLoft/NewLoft2.png" alt="NewLoft2">
    <img src="../assets/img/NewLoft/NewLoft3.png" alt="NewLoft3">
    <img src="../assets/img/NewLoft/NewLoft4.png" alt="NewLoft4">
    <img src="../assets/img/NewLoft/NewLoft5.png" alt="NewLoft5">
  </div>
</div>
</template>

<style scoped>
.NewLoft {
  padding: 48px 0;
  background-color: black;
  text-align: center;
}

h2 {
  color: white;
  font-size: 32px;
  text-transform: uppercase;
}

p {
  color: #696969;
  font-size: 14px;
  letter-spacing: 15px;
  text-transform: uppercase;
}

img {
  border-radius: 16px;
}

.NewLoftImg {
  margin-top: 48px;
  padding: 0 78px;
  display: flex;
  gap: 16px;
}
</style>