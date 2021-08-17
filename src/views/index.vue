<template>
  <div class="site-city">
    <div class="site-city__content _container">
      <SiteBlock/>
      <SiteBlock/>
    </div>
  </div>
</template>

<script>
import SiteBlock from '@/components/site-block.vue';

export default {
  name: 'site-city',
  components: {
    SiteBlock,
  },
};
</script>

<style lang="scss">
.site-city {
  width: 100vw;
  height: 100vh;
  position: relative;

  // .site-city__content
  &__content {
  }
  // .site-city__block
  &__block {
  }
}
</style>
