<template>
  <div class="my-16 md:pl-32 p-16">
    <p class="text-3xl sm:text-5xl md:text-6xl text-main font-bold quote"><span v-if="quotes">"</span>{{ titleText }}<span v-if="quotes">"</span></p>
  </div>
</template>

<style
  scoped
  lang="scss"
  src="@/components/BigQuote/big-quote.scss"
></style>

<script>
  export default  {
  props: ['titleText', 'quotes']
}
</script>