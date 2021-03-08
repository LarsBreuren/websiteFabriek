<template>
  <nav class="topnav">
    <transition name="fade"> <div v-if="hamburger" class="pageOverlay"></div></transition>
    <div class="desktop">
    <a href="#" class="logo"><img src="../../../assets/logo.png" alt="Logo"></a>
    <div class="links">
      <ul>
        <li><a href="#" class="active">Desktop nav</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
  
    <div class="mobile" >
      <a href="#" class="logo"><img src="../../../assets/logo.png" alt="Logo"></a>
      <button v-on:click="toggle()" class="navToggle"> 
        <v-icon
        v-if="hamburger"
        size="30"
        class="
          text-black
          cursor-pointer
        "
        >mdi-close</v-icon
      >
      <v-icon
      v-else
      size="30"
      class="
        text-black
        cursor-pointer
      "
      >mdi-menu</v-icon
    ></button>
    </div>
    <transition name="fade">
    <div v-if="hamburger" class="hamburgerLinks">
        <ul>
          <li><a href="#" class="active">Mobile nav</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

  </div>
</transition>
  </nav>
</template>

<script src="@/components/Website/Navigation/navigation.ts"></script>
<style lang="scss" src="@/components/Website/Navigation/navigation.scss"></style>


<!-- <template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/cases">Cases</router-link> |
    <a href="https://website-fabriek.online/wp-login.php" target="_blank">Login</a>
  </div>
</template> -->
