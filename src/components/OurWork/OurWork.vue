<template>
  <div class="container my-32 md:my-128">
    <div class="flex flex-wrap justify-around">
      <div class="w-full md:text-left">
        <h2 class="text-4xl mb-16">Onze recente webdesigns.</h2>
      </div>
      <div v-for="item in projects" :key="item.name" class="pca-hold lg:w-2/5 p-16 relative imac">
        <div class="pca-main">
          <img
            :src="getImgUrl(item)"
            class="h-full w-full"
          />
          <div class="pca-inner"></div>
        </div>
        <div class="pca-sub">
          <div class="pca-top relative">
          <v-icon
          size="30"
          class="
            text-black
            cursor-pointer
            w-full
            absolute
            logoMac
          "
          >mdi-carrot</v-icon
        ></div>

          <div class="pca-mid">
            <div class="pca-part"></div>
          </div>
          <div class="pca-bot"></div>
        </div>
        <div class="iphone-x absolute">
          <img
            :src="getImgUrlMobile(item)"
            alt="Recent mobile webdesign"
            class="w-full h-full"
          />
          <i>Speaker</i>
          <b>Camera</b>
        </div>
      </div>
  </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/OurWork/our-work.scss"></style>
<script src="@/components/OurWork/our-work.ts"></script>
