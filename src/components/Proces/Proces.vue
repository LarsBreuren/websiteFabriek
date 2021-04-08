<template>
  <div class="container">
    <h2 class="text-4xl mb-32">Het proces.</h2>
    <div class="bubbleContainer">
      <div class="bubbleGroup">
        <div v-for="step in steps" :key="step.id" class="bubbleLoop">
          <transition name="bounce">
          <div v-if="step.show && step.number <= 3 " :class="'bubble' + ( step.number) + ' bubble'">
            <div>
              <p class="procesStep">{{ step.number }}</p>
            </div>
            <div class=" px-8 lg:px-16 ">
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
            <div>
              <v-icon
                size="30"
                class="
            icon
          "
                >mdi-{{ step.icon }}</v-icon
              >
            </div>
          </div>
        </transition>
          
        </div>
        </div>

      <div class="logoContainer px-16 self-center " v-view.once="loadSteps">
        <div class="">
          <img class="logo " src="../../assets/images/Logo-small.svg" />
        </div>
      </div>
      <div class="bubbleGroup">
        <div v-for="step in steps" :key="step.id" class="bubbleLoop">
          <transition name="bounce">
          <div v-if="step.show && step.number > 3" :class="'bubble' + ( step.number) + ' bubble'">
            <div>
              <v-icon
                size="30"
                class="
            icon
          "
                >mdi-{{ step.icon }}</v-icon
              >
            </div>
            <div class="bubbleText">
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
            <div>
              <p class="procesStep">{{ step.number }}</p>
            </div>
          </div>
        </transition>
        </div>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Proces/proces.scss"></style>
<script src="@/components/Proces/proces.ts"></script>
