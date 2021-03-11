<template>
  <div class="container">
    <h2 class="text-4xl mb-32">Het proces.</h2>
    <p @click="loadSteps">Click</p>

    <div class="bubbleContainer">
      <div class="bubbleGroup">
        <div v-for="step in steps" :key="step.id">
          <div v-if="step.show && step.number <= 3" :class="'bubble' + ( step.number) + ' bubble'">
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
        <div v-for="step in steps" :key="step.id">
          <div v-if="step.show && step.number > 3" :class="'bubble' + ( step.number) + ' bubble'">
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
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Proces/proces.scss"></style>
<script src="@/components/Proces/proces.ts"></script>
