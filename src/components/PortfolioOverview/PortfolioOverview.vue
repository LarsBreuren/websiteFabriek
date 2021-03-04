<template>
  <div class="containerFull">
         <div class="caseContainer flex">
          <div class="caseImg relative w-1/2">
            <img class="absolute h-full w-full object-cover" src="../../assets/images/portfolio/praktijk-thumb.jpg" alt="Portfolio banner background image">
          </div>
          <div class="caseContentContainer w-1/2 ">
            <div class="caseContent relative">
              <p class="bigGreyTitle">
                {{ getPostAcfValue(post, "grey_title") }}
              </p>

            <h2 class="caseHeader">{{ getPostAcfValue(post, "case_title") }}</h2>
            <p>{{ getPostAcfValue(post, "case_text") }}</p>
            <router-link to="/portfolio">
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