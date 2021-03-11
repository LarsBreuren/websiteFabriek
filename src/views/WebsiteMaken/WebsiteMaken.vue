<template>
  <div>
    <BuildWebsiteHeader />
    <div class="buildBody">
      <div class="container">
        <div class="md:w-1/2 md:text-left  ">
          <BigQuote
            title-text="Be a game changer, the world is already full of players"
            :quotes="false" class="my-32 lg:my-64"
          />
        </div>
      </div>
      <FullWidthImage v-bind:image-link="imagelink1"  text="Een website is ongewoon handig" :overlay="true" :blackWhite="false"/>
      <Proces class="mt-64"></Proces>
      <prices></prices>
      <OurWork></OurWork>
    </div>
  </div>
</template>


<style lang="scss">
  @screen sm{
    .buildBody{
      @apply relative;
      top: -5em;
    }
  }


</style>
<script src="@/views/WebsiteMaken/WebsiteMaken.ts"></script>
