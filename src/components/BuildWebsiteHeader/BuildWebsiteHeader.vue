<template>
  <div>
  <div class="flex items-center containerFull relative w-full bannerContainer z-10">
    <img class="absolute h-full w-full object-cover z-0" src="../../assets/images/features/coding.jpeg" alt="Banner background image">
    <div class="container md:text-left text-center; relative z-20">
      <div class="md:w-1/2 w-full">    
        <h1 class="bannerTitle ">Website laten maken</h1>
      </div>
    </div>
    <div
    class="overlay absolute top-0 bottom-0 right-0 left-0 object-cover w-full h-full"
  ></div>
  </div>
  <div class="bannerContent text-left bg-offwhite-600">
    <div class="container bannerText bg-offwhite-600 flex">
    <div class="w-full md:w-3/5">
      <p class="sm:font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illo eius expedita error
         reprehenderit, consectetur quidem sunt architecto atque magni nisi enim?
          Repellat impedit odio fuga eligendi porro repudiandae voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis, rerum sapiente molestiae reprehenderit architecto similique quo recusandae non accusamus!</p>
    </div>
    <div class="w-2/5 relative bannerImg">
      <img src="../../assets/images/features/benb-desktop.png" alt="Banner background image">
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