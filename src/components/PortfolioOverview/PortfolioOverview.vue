<template>
  <div class="containerFull cases mt-32 sm:mt-0">  
         <div class="caseContainer flex flex-wrap" v-for="post in post" :key="post.name">
          <div class="caseImg relative w-full sm:w-1/2">
            <img class="absolute h-full w-full object-cover" :src="getPostAcfValue(post, 'case_image').url" alt="Portfolio banner background image">
          </div>
          <div class="caseContentContainer  w-full sm:w-1/2 ">
            <div class="caseContent relative">
              <p class="bigGreyTitle">
                {{ getPostAcfValue(post, "grey_title") }}
              </p>

            <h2 class="caseHeader">{{ getPostAcfValue(post, "case_title") }}</h2>
            <p v-html="getPostAcfValue(post, 'case_text')"></p>  
            <router-link :to="getPostAcfValue(post, 'case_link')"> <!-- ToDo fix with acf-->
              <div class="w-1/3 mx-auto ctaButton mt-16">
                Bekijk case
              </div>
            </router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<style
  scoped
  lang="scss"
  src="@/components/PortfolioOverview/portfolio-overview.scss"
></style>
<script src="@/components/PortfolioOverview/portfolio-overview.ts"></script>


     <!-- {{ getPostAcfValue(post, "banner_title") }} -->