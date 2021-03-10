<template>
  <div>
  <div class="flex items-center containerFull relative w-full bannerContainer z-10">
    <img class="absolute h-full w-full object-cover z-0" src="../../assets/images/features/coding.jpeg" alt="Banner background image">
    <div class="container text-left relative z-20">
      <div class="w-1/2">    
        <h1 class="bannerTitle ">Website laten maken</h1>
      </div>
    </div>
    <div
    class="overlay absolute top-0 bottom-0 right-0 left-0 object-cover w-full h-full"
  ></div>
  </div>
  <div class="bannerText  text-left bg-offwhite-600">
    <div class="container bannerText bg-offwhite-600 flex">
    <div class="w-3/5">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illo eius expedita error
         reprehenderit, consectetur quidem sunt architecto atque magni nisi enim?
          Repellat impedit odio fuga eligendi porro repudiandae voluptatibus!</p>
    </div>
    <div class="w-2/5 relative bannerImg">
      <img src="../../assets/images/benb-desktop.png" alt="Banner background image">
    </div>
  </div>
</div>
</div>
</template>

<style
  scoped
  lang="scss"
  src="@/components/BuildWebsiteHeader/build-website-header.scss"
></style>
<script src="@/components/BuildWebsiteHeader/build-website-header.ts"></script>

       <!-- {{ getPostAcfValue(post, "banner_title") }} -->