<template>
  <nav class="topnav">
    <transition name="fade"> <div @click="toggle()" v-if="hamburger" class="pageOverlay"></div></transition>
    <div class="desktop">
      <router-link to="/" title="home" class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 151.5 88" style="enable-background:new 0 0 151.5 88;" xml:space="preserve">
          <g id="Layer_2">
            <line class="st0" x1="111.8" y1="57.8" x2="132.8" y2="57.8"/>
            <line class="st0" x1="111.8" y1="29.5" x2="132.8" y2="29.5"/>
            <line class="st0" x1="18.5" y1="57.8" x2="39.5" y2="57.8"/>
            <line class="st0" x1="18.5" y1="29.5" x2="39.5" y2="29.5"/>
            <circle class="st1" cx="75.5" cy="43.7" r="38.4"/>
            <rect x="64.6" y="4.3" class="st2" width="21.8" height="79.5"/>
            <line class="st3" x1="113.9" y1="43.7" x2="149.3" y2="43.7"/>
            <line class="st3" x1="1.7" y1="43.7" x2="37.1" y2="43.7"/>
            <text transform="matrix(1 0 0 1 57.5667 61.5419)" class="st4 st5 st6">W </text>
            <text transform="matrix(1 0 0 1 56.5665 62.125)" class="st7 st5 st6">W </text>
          </g>
          <g id="Laag_2">
            <polygon class="st8" points="57.6,26.6 64.8,26.6 68.1,48.9 72.3,26.6 78.3,26.6 82.5,48.9 85.9,26.6 93,26.6 86.7,62.1 79.5,62.1    75.3,41.2 71.2,62.1 64,62.1  "/>
          </g>
          </svg>
      </router-link>
    <div class="links">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cases">Cases</router-link> </li>
        <li><a href="https://website-fabriek.online/wp-login.php" target="_blank">Login</a></li>
      </ul>
    </div>
  </div>
  
    <div class="mobile" >
      <router-link to="/" title="home" class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 151.5 88" style="enable-background:new 0 0 151.5 88;" xml:space="preserve">
          <g id="Layer_2">
            <line class="st0" x1="111.8" y1="57.8" x2="132.8" y2="57.8"/>
            <line class="st0" x1="111.8" y1="29.5" x2="132.8" y2="29.5"/>
            <line class="st0" x1="18.5" y1="57.8" x2="39.5" y2="57.8"/>
            <line class="st0" x1="18.5" y1="29.5" x2="39.5" y2="29.5"/>
            <circle class="st1" cx="75.5" cy="43.7" r="38.4"/>
            <rect x="64.6" y="4.3" class="st2" width="21.8" height="79.5"/>
            <line class="st3" x1="113.9" y1="43.7" x2="149.3" y2="43.7"/>
            <line class="st3" x1="1.7" y1="43.7" x2="37.1" y2="43.7"/>
            <text transform="matrix(1 0 0 1 57.5667 61.5419)" class="st4 st5 st6">W </text>
            <text transform="matrix(1 0 0 1 56.5665 62.125)" class="st7 st5 st6">W </text>
          </g>
          <g id="Laag_2">
            <polygon class="st8" points="57.6,26.6 64.8,26.6 68.1,48.9 72.3,26.6 78.3,26.6 82.5,48.9 85.9,26.6 93,26.6 86.7,62.1 79.5,62.1    75.3,41.2 71.2,62.1 64,62.1  "/>
          </g>
          </svg>
      </router-link>
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
          <li><router-link @click.native="toggle()" to="/"> 
            <v-icon
            size="30"
            class="
              text-black
              cursor-pointer
            "
            >mdi-home</v-icon>
          Home
        </router-link></li>
          <li><router-link @click.native="toggle()" to="/cases">
            <v-icon
            size="30"
            class="
              text-black
              cursor-pointer
            "
            >mdi-code-braces</v-icon>
            Cases</router-link> </li>
          <li><a href="https://website-fabriek.online/wp-login.php" target="_blank">
            <v-icon
            size="30"
            class="
              text-black
              cursor-pointer
            "
            >mdi-login</v-icon>
            Login</a></li>
        </ul>

  </div>
</transition>
  </nav>
</template>

<script src="@/components/Website/Navigation/navigation.ts"></script>
<style lang="scss" src="@/components/Website/Navigation/navigation.scss"></style>
