<template>
  <div class="container md:my-128">
    <div class="flex flex-wrap w-full justify-around lg:justify-between">

      <div class="mx-32 sm:mx-0 my-32 md:my-0 w-full md:w-2/5 self-start package bg-white">
        <div class="packageBanner relative flex justify-center items-center">
          <h3
            class="packageHeader z-20 text-4xl uppercase text-white font-bold"
          >
            Basis website <br />
            <span class="text-6xl">&euro;899,-</span>
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

        <div
          class=" w-full p-8 "
          v-for="(value, name) in websiteComplete"
          :key="value.id"
        >
          <div class="relative">
            <div
              class="cursor-pointer absolute top-0 bottom-0 right-0 left-0 z-10"
              @click="e => e.target.parentElement.classList.toggle('active')"
            ></div>
            <div
              class=" flex flex-wrap justify-between relative items-center question px-32"
            >
            <v-icon
            size="30"
            class="
          text-main
          cursor-pointer
          absolute left-0
          chevron
        "
          >
            mdi-chevron-right</v-icon
          >
              <div >
                <p class="pointTitle">{{ name }}</p>
              </div>
              <v-icon
                size="30"
                class="
              cursor-pointer
              inline
              text-success-500
            "
              >
                mdi-check</v-icon
              >
            </div>
            <div class="text-base answer w-full px-32 py-8 text-left">
              {{ value }}
            </div>
          </div>
        </div>
        <div class="text-center text-main py-32 ">
            <p class="font-semibold">25,- Per maand</p>
            <p class="text-base">Inclusief hosting + domeinnaam</p>
            <p class="text-base">Prijzen ex BTW</p>
            <router-link to="/">
              <div class="ctaButton mt-8 py-8 px-32 inline-block">Bestel</div>
            </router-link>
        </div>
      </div>

      <div class="mx-32 sm:mx-0 my-32 md:my-0 w-full md:w-2/5  self-start package bg-white">
        <div class="packageBanner relative flex justify-center items-center">
          <h3
            class="packageHeader z-20 text-4xl uppercase text-white font-bold"
          >
            Maatwerk website v.a <br />
            <span class="text-6xl">&euro;1499,-</span>
          </h3>
          <img
            src="../../assets/images/features/maatwerk.jpg"
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

        <div
          class=" w-full p-8 "
          v-for="(value, name) in websiteLuxe"
          :key="value.id"
        >
          <div class="relative">
            <div
              class="cursor-pointer absolute top-0 bottom-0 right-0 left-0 z-10"
              @click="e => e.target.parentElement.classList.toggle('active')"
            ></div>
            <div
              class=" flex flex-wrap justify-between relative items-center question px-32"
            >
            <v-icon
            size="30"
            class="
          text-main
          cursor-pointer
          absolute left-0
          chevron
        "
          >
            mdi-chevron-right</v-icon
          >
              <div >
                <p class="pointTitle">{{ name }}</p>
              </div>
              <v-icon
                size="30"
                class="
              cursor-pointer
              inline
              text-success-500
            "
              >
                mdi-check</v-icon
              >
            </div>
            <div class="text-base answer w-full px-32 py-8 text-left">
              {{ value }}
            </div>
          </div>
        </div>
        <div class="text-center text-main py-32 ">
          <p class="font-semibold">35,- Per maand</p>
          <p class="text-base">Inclusief hosting + domeinnaam</p>
          <p class="text-base">Prijzen ex BTW</p>
          <router-link to="/">
            <div class="ctaButton mt-8 py-8 px-32 inline-block">Bestel</div>
          </router-link>
      </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Prices/price-list.scss"></style>
<script src="@/components/Prices/price-list.ts"></script>
