<template>
  <div class="container md:my-128">
    <div class="flex flex-wrap w-full justify-around">
      <div class="mx-32 w-2/5 package">
        <div class="packageBanner relative flex justify-center items-center">
          <h3
            class="packageHeader z-20 text-4xl uppercase text-white font-bold"
          >
            Website compleet <br />
            <span class="text-6xl">&euro;699,-</span>
          </h3>
          <img
            src="../../assets/images/features/coding.jpeg"
            class="absolute top-0 bottom-0 right-0 left-0 object-cover w-full h-full"
          />
          <div
            class="overlay absolute top-0 bottom-0 right-0 left-0 object-cover w-full h-full"
          ></div>
          <div class="layer"></div>
        </div>
        <div class="relative label py-8 px-32 font-semibold bg-secondary">
          <p class="text-white">Inclusief:</p>
        </div>
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

    <main
      class="flex justify-center items-center p-4 h-screen w-full bg-gradient-to-r from-green-100 to-blue-100"
    >
      <div
        class="bg-white w-1/2 border border-gray-200 divide-y divide-gray-200"
      >
        <div class="relative" @click="e => e.target.parentElement.classList.toggle('active')">
          <div class="question py-3 px-4 cursor-pointer select-none w-full">
            How is this made?
          </div>
          <div class="answer pt-1 pb-3 px-4">
            With TailwindCSS, JS and some extra css for ::after adjustments.
          </div>
        </div>
        <div class="relative" @click="e => e.target.parentElement.classList.toggle('active')">
          <div class="question py-3 px-4 cursor-pointer select-none w-full">
            Can I use it?
          </div>
          <div class="answer pt-1 pb-3 px-4">
            Of course. It's yours to use wherever and whenever you like.
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss" src="@/components/Prices/price-list.scss"></style>
<script src="@/components/Prices/price-list.ts"></script>
