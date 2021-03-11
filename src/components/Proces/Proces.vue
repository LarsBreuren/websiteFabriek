<template>
  <div class="container">
    <h2 class="text-4xl mb-32">Het proces.</h2>
    <p @click="initLoad">Click</p>

    <div class="bubbleContainer">
      <div class="bubbleGroup">
        <div v-for="step in steps" :key="step.id">
          <div v-if="step.show" :class="'bubble' + ( step.number) + ' bubble'">
            <div class="w-1/5">
              <p class="procesStep">{{ step.number }}</p>
            </div>
            <div class="w-3/5 px-16 ">
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
            <div class="w-1/5">
              <v-icon
                size="30"
                class="
            icon
          "
                >mdi-{{ step.icon }}</v-icon
              >
            </div>
          </div>
          
        </div>
        </div>

      <div class="px-16 self-center">
        <div class="">
          <img class="logo " src="../../assets/images/logo-small.svg" />
        </div>
      </div>
      <div class="bubbleGroup">
        <div class="bubble bubble4">
          <div class="w-1/5">
            <v-icon
              size="30"
              class="
              icon
            "
              >mdi-notebook-edit-outline</v-icon
            >
          </div>
          <div class="w-3/5 px-16 ">
            <h3>Voorstel</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="w-1/5">
            <p class="procesStep">4</p>
          </div>
        </div>
        <div class="bubble bubble5">
          <div class="w-1/5">
            <v-icon
              size="30"
              class="
              icon
            "
              >mdi-notebook-edit-outline</v-icon
            >
          </div>
          <div class="w-3/5 px-16 ">
            <h3>Feedbackgesprek</h3>
            <p>Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
          </div>
          <div class="w-1/5">
            <p class="procesStep">5</p>
          </div>
        </div>
        <div class="bubble bubble6">
          <div class="w-1/5">
            <v-icon
              size="30"
              class="
              icon
            "
              >mdi-notebook-edit-outline</v-icon
            >
          </div>
          <div class="w-3/5 px-16 ">
            <h3>Live!</h3>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
          </div>
          <div class="w-1/5">
            <p class="procesStep">6</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Proces/proces.scss"></style>
<script src="@/components/Proces/proces.ts"></script>
