<template>
  <div class="container md:my-128">
    <button onclick=hello()>Hi</button>
    <section class="Accordion">
      <ul class="Accordion__tabs">
        <li class="Accordion__tab" onclick="toggleAccordion(this)">
          <div class="Accordion__tab__headline">
            <h4>Lorem ipsum dolor sit amet</h4><span class="icon"></span>
          </div>
          <div class="Accordion__tab__content">
            <div class="wrapper">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
              </p>
            </div>
          </div>
        </li>
        <li class="Accordion__tab" onclick="toggleAccordion(this)">
          <div class="Accordion__tab__headline">
            <h4>dolor sit amet</h4><span class="icon"></span>
          </div>
          <div class="Accordion__tab__content">
            <div class="wrapper">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </li>
        <li class="Accordion__tab" onclick="toggleAccordion(this)">
          <div class="Accordion__tab__headline">
            <h4>ipsum dolor sit amet</h4><span class="icon"></span>
          </div>
          <div class="Accordion__tab__content">
            <div class="wrapper">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
        </li>
        <li class="Accordion__tab" onclick="toggleAccordion(this)">
          <div class="Accordion__tab__headline">
            <h4>Lorem ipsum</h4><span class="icon"></span>
          </div>
          <div class="Accordion__tab__content">
            <div class="wrapper">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <div class="flex flex-wrap w-full justify-around">
      <div class="mx-32 w-2/5 package">
        <div class="packageBanner">
          <h3 class="packageHeader">
            Website compleet <br />
            <span>&euro;699</span>
          </h3>
          <div class="layer"></div>
        </div>
        <div class="relative label"><p class="text-white">Inclusief:</p></div>
        <ul class="flex text-left">
          <li class="flex-grow">
            <v-icon
            size="30"
            class= "
            text-main
            cursor-pointer
            w-full
            inline
          "
            > mdi-chevron-down</v-icon>
            Website design
          </li>
          <li class="w-1/10"> <v-icon
            size="30"
            class= "
            text-main
            cursor-pointer
            w-full
            inline
          "
            > mdi-check</v-icon></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Prices/price-list.scss"></style>
<script src="@/components/Prices/price-list.js"></script>
