<template>
  <div class="container md:my-128">
    <div class="flex flex-wrap w-full justify-around">
      <div class="mx-32 w-2/5 package">
        <div class="packageBanner relative flex justify-center items-center">
          <h3 class="packageHeader z-20 text-4xl uppercase text-white font-bold">
            Website compleet <br />
            <span class="text-6xl">&euro;699,-</span>
          </h3>
          <img
            src="../../assets/images/features/coding.jpeg"
            class="absolute top-0 bottom-0 right-0 left-0 object-cover w-full h-full"
          />
          <div class="overlay absolute top-0 bottom-0 right-0 left-0 object-cover w-full h-full"></div>
          <div class="layer"></div>
        </div>
        <div class="relative label"><p class="text-white">Inclusief:</p></div>
        <ul class="flex text-left">
          <li class="flex-grow">
            <v-icon
              size="30"
              class="
            text-main
            cursor-pointer
            w-full
            inline
          "
            >
              mdi-chevron-down</v-icon
            >
            Website design
          </li>
          <li class="w-1/10">
            <v-icon
              size="30"
              class="
            text-main
            cursor-pointer
            w-full
            inline
          "
            >
              mdi-check</v-icon
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Prices/price-list.scss"></style>
<script src="@/components/Prices/price-list.js"></script>
