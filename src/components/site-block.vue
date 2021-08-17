<template>
  <div class="site-block">
      <img src="img/site-img/jackschool.jpg" alt="" class="site-block__img" />
      <h3 class="site-block__title">Автошкола джек</h3>
  </div>
</template>

<style lang="scss">
.site-block {
  width: 25vw;
  height: 25vh;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  display: flex;
  justify-content:center;
  align-items: center;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(88, 84, 92, 0.5);
      opacity: 0;
  transition: all 0.4s ease 0s;
    }

  &:hover {
    &::after {
      content: '';
      opacity: 1;
    }

    .site-block__title{
    transform: translateX(0);

    }
  }

 // .site-block__title
  &__title{
    position: relative;
    color: white;
    font-size: 24px;
    z-index: 99;
    transform: translateX(-500%);
    transition: all 0.4s ease 0s;
  }

  // .site-block__img
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
