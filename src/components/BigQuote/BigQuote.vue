<template>
  <div class="">
    <p class="text-6xl text-main font-bold quote"><span v-if="quotes">"</span>{{ titleText }}<span v-if="quotes">"</span></p>
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