<script setup lang="ts">

</script>

<template>
  <div class="plate relative cursor-pointer overflow-hidden rounded-[34px]">
    <div class="main absolute z-10 flex h-full w-full items-end bg-black/60 p-4 pb-[45px] text-h3 uppercase text-white transition-all">
      ЗИМНИЙ МОЛОДЕЖНЫЙ ФЕСТИВАЛЬ “МОЛОДЕЖЬ МОСКВЫ”
    </div>
    <div class="desc absolute z-20 h-full w-full overflow-hidden bg-black/60 p-4 pb-[40px] text-center text-h3 text-white opacity-0 transition-all">
      <div class="mb-[15px]">
        ЗИМНИЙ МОЛОДЕЖНЫЙ ФЕСТИВАЛЬ “МОЛОДЕЖЬ МОСКВЫ”
      </div>
      <div class="h-full overflow-scroll pb-[100px] text-p-small text-white">
        Зимний фестиваль «Молодежь Москвы», представленный Проектным офисом «Молодежь Москвы» городского Комитета общественных связей и молодежной политики при поддержке ПАО Сбербанк и АО «Русская Медиагруппа».
        В рамках этого проекта было застроено более 450 км2, по индивидуально разработанным чертежам, учитывая потребности заказчика. Закуплено и забронировано более 350 позиций мерча. В конце мероприятия была
        Зимний фестиваль «Молодежь Москвы», представленный Проектным офисом «Молодежь Москвы» городского Комитета общественных связей и молодежной политики при поддержке ПАО Сбербанк и АО «Русская Медиагруппа».
        В рамках этого проекта было застроено более 450 км2, по индивидуально разработанным чертежам, учитывая потребности заказчика. Закуплено и забронировано более 350 позиций мерча. В конце мероприятия была
      </div>
    </div>
    <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" alt="" class="h-full w-full object-cover">
  </div>
</template>

<style lang="scss" scoped>
.plate {
  // height: 200px;
  // width: 200px;
  height: 500px;
  &:hover .main {
    opacity: 0;
  }
  &:hover .desc {
    opacity: 1;
  }
}
</style>
