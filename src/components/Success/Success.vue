<template>
  <div class="containerFull my-32 bg-offwhite-600 wrapper">
    <div class="container w-full">
    <div class="flex flex-wrap  ">
      <div class="mx-auto lg:mx-0 w-1/2 sm:w-2/5 lg:w-2/5 relative">
          <img
            src="../../assets/images/features/lars.jpg"
            alt="Wij maken jou succesvol op het internet"
            class="onlineimg"
          />
        </div>
        <div
          class="text-center sm:w-3/5 px-32 lg:px-64 text-left sm:text-left sm:py-32 textContent"
        >
          <h2 class="font-bold text-main text-4xl">Online sterk</h2>
          <b class="subtitle">Dat is wat waard</b>
          <p class="my-16">
            je website is je online visitekaartje. Het is belangrijk een goede eerste indruk te maken en dus te zorgen voor een nette goed werkende website.
            Een goede website kan ervoor zorgen dat je meer en betere klanten binnenhaalt en dat je jouw werk goed kan presenteren. 
          </p>
            <p class="my-16">
            Sinds dat ik ben begonnen met websites bouwen heb ik gezien hoeveel impact een goede of slechte website kan hebben voor je bedrijf. 
            De kennis die ik afgelopen jaren heb opgedaan als developer zet ik graag voor jou in om een geweldige website te maken. Neem gerust contact op.            
          </p>
          <router-link to="/website-maken">
            <div class="ctaButton py-8 mb-16">
              Zo'n website wil ik!
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="@/components/Success/success.scss"></style>
