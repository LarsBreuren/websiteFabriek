<template>
  <div class="container">
    <h2 class="text-4xl mb-32">Het proces.</h2> 
    <div class="w-full mx-auto flex items-center">
      <div class="w-1/3 flex flex-wrap">
        <div class="bubble bubble1 ml-auto">
          <div class="w-1/5">
            <p class="procesStep">1</p>
          </div>
          <div class="w-3/5 px-16 ">
            <h3>Vormgevingsgesprek</h3>
            <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
          </div>
          <div class="w-1/5">
            <v-icon
              size="30"
              class="
              icon
            "
              >mdi-notebook-edit-outline</v-icon
            >
          </div>
        </div>
        <div class="bubble bubble2 ml-auto">
          <div class="w-1/5">
            <p class="procesStep">3</p>
          </div>
          <div class="w-3/5 px-16 ">
            <h3>1e opzet</h3>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div class="w-1/5">
            <v-icon
              size="30"
              class="
              icon
            "
              >mdi-notebook-edit-outline</v-icon
            >
          </div>
        </div>
        <div class="bubble bubble3 ml-auto">
          <div class="w-1/5">
            <p class="procesStep">5</p>
          </div>
          <div class="w-3/5 px-16 ">
            <h3>Laatste aanpassingen</h3>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="w-1/5">
            <v-icon
              size="30"
              class="
              icon
            "
              >mdi-notebook-edit-outline</v-icon
            >
          </div>
        </div>
      </div>
      <div class="px-16">
        <div class="">
          <img class="logo " src="../../assets/images/logo-small.svg" />
        </div>
      </div>
      <div class="w-1/3 flex flex-wrap">
        <div class="bubble bubble4">
          <div class="w-1/5">
            <p class="procesStep">2</p>
          </div>
          <div class="w-3/5 px-16 ">
            <h3>Voorstel</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="w-1/5">
            <v-icon
              size="30"
              class="
              icon
            "
              >mdi-notebook-edit-outline</v-icon
            >
          </div>
        </div>
        <div class="bubble bubble5">
          <div class="w-1/5">
            <p class="procesStep">4</p>
          </div>
          <div class="w-3/5 px-16 ">
            <h3>Feedbackgesprek</h3>
            <p>Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
          </div>
          <div class="w-1/5">
            <v-icon
              size="30"
              class="
              icon
            "
              >mdi-notebook-edit-outline</v-icon
            >
          </div>
        </div>
        <div class="bubble bubble6">
          <div class="w-1/5">
            <p class="procesStep">6</p>
          </div>
          <div class="w-3/5 px-16 ">
            <h3>Live!</h3>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
          </div>
          <div class="w-1/5">
            <v-icon
              size="30"
              class="
              icon
            "
              >mdi-notebook-edit-outline</v-icon
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Proces/proces.scss"></style>
<script src="@/components/Proces/proces.ts"></script>
