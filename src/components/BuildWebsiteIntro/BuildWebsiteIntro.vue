<template>
  <div class="flex items-center containerFull relative w-full bannerContainer z-10">
    <img class="absolute h-full w-full object-cover z-0" src="../../assets/images/features/coding.jpeg" alt="Cases banner background image">
    <div class="container text-left relative z-20">
      <div class="w-1/2">    
        <h1 class="bannerTitle ">Website laten maken</h1>
      </div>
    </div>
    <div
    class="overlay absolute top-0 bottom-0 right-0 left-0 object-cover w-full h-full"
  ></div>
  </div>
</template>

<style
  scoped
  lang="scss"
  src="@/components/BuildWebsiteIntro/build-website-intro.scss"
></style>
<script src="@/components/BuildWebsiteIntro/build-website-intro.ts"></script>

       <!-- {{ getPostAcfValue(post, "banner_title") }} -->