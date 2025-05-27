<template>
    <section class="greeting">
      <h1>МЕБЕЛЬ В СТИЛЕ ЛОФТ</h1>
    </section>
    <list-products />
    <div class="FurnitureCatalog">
      <new-loft />
      <h2>Каталог мебели</h2>
      <p>Минимализм подчеркивает индивидуальность</p>
      <div class="gallery" id="gallery">
        <div>
          <div>
            <img src="../assets/img/HomePage/GalleryImg1.png" alt="GalleryImg1">
          </div>
          <div>
            <img src="../assets/img/HomePage/GalleryImg2.png" alt="GalleryImg2">
            <img src="../assets/img/HomePage/GalleryImg3.png" alt="GalleryImg3">
          </div>
          <div>
            <img src="../assets/img/HomePage/GalleryImg4.png" alt="GalleryImg4">
          </div>
        </div>
        <div>
          <div>
            <img src="../assets/img/HomePage/GalleryImg5.png" alt="GalleryImg5">
          </div>
          <div>
            <img src="../assets/img/HomePage/GalleryImg6.png" alt="GalleryImg6">
            <img src="../assets/img/HomePage/GalleryImg7.png" alt="GalleryImg7">
          </div>
          <div>
            <img src="../assets/img/HomePage/GalleryImg8.png" alt="GalleryImg8">
            <img src="../assets/img/HomePage/GalleryImg9.png" alt="GalleryImg9">
          </div>
        </div>
      </div>
    </div>
    <section class="novelty">
      <article class="noveltyBed">
        <h2>Двухъярусная Кровать</h2>
        <p>Технология трансформер, универсальный дизайн</p>
      </article>
      <article class="noveltyCar">
        <h2>Бесплатная Доставка</h2>
        <p>По всей России</p>
      </article>
    </section>
</template>

<script setup>
import ListProducts from "@/components/ListProducts.vue";
import NewLoft from "@/components/NewLoft.vue";
</script>

<style scoped>
.novelty {
  background-color: black;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.novelty h2 {
  color: white;
  font-size: 25px;
}

.novelty p {
  color: #696969;
  font-size: 14px;
  letter-spacing: 5px;
}

.novelty article {
  background-repeat: no-repeat;
  border-radius: 16px;
  text-align: center;
  padding-top: 5%;
  width: 100%;
  height: 640px;
}

.noveltyBed {
  background-image: url("../assets/img/HomePage/BunkBedImg.png");
}

.noveltyCar {
  background-image: url("../assets/img/HomePage/FreeShippingImg.png");
}

.FurnitureCatalog {
  text-align: center;
  background-color: black;
}

.FurnitureCatalog h2 {
  color: white;
  font-size: 32px;
  text-transform: uppercase;
}

.FurnitureCatalog p {
  color: #696969;
  font-size: 14px;
  letter-spacing: 15px;
  text-transform: uppercase;
}

.gallery {
  padding: 64px 56px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery > div {
  display: flex;
  gap: 32px;
}

.gallery > div > div {
  flex-direction: column;
  display: flex;
  gap: 32px;
}

.greeting {
  height: 720px;
  background-image: url("../assets/img/HomePage/HomePage1.png");
  text-align: center;
  display: flex;
  justify-content: center;
}

.greeting h1 {
  font-size: 48px;
  color: white;
  margin-top: 11%;
}
</style>