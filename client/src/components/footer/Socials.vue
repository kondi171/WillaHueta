<template>
  <section class="footer-socials">
    <a
      href="https://www.facebook.com/share/1ESWkzS3uT/?mibextid=wwXIfr"
      target="_blank"
      class="fa fa-facebook"
    >
      <font-awesome-icon :icon="['fab', 'facebook']" />
      <span>#WillaHueta</span>
    </a>
    <a
      href="https://www.instagram.com/willa_hueta/"
      target="_blank"
      class="fa fa-instagram"
    >
      <font-awesome-icon :icon="['fab', 'instagram']" />
      <span>@willa_hueta</span>
    </a>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/assets/scss/variables.scss" as *;
@use "@/assets/scss/mixins.scss" as *;

.footer-socials {
  //   position: absolute;
  display: flex;
  justify-content: space-evenly;
  width: 30vw;
  //   bottom: 15vh;
  //   right: 15%;
  color: $textColor;
  font-size: 48px;

  a {
    text-decoration: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    color: $textColor;
    transition-duration: 0.4s;
    padding: 4rem;
    z-index: 1;
    span {
      font-size: 2vmin;
      margin-left: 2vmin;
    }
    &:hover {
      cursor: pointer;
      // border-radius: 50%;
    }

    &.fa-facebook::after {
      @include info("Facebook", #1877f2, -20%);
    }

    &.fa-facebook:hover {
      color: #1877f2;
      // box-shadow: inset 0px 0px 10px 10px #1877f2;
      &::after {
        transform: scale(1);
      }
    }
    &.fa-instagram::after {
      @include info("Instagram", #c13584, -20%);
    }

    &.fa-instagram:hover {
      color: #c13584;
      // box-shadow: inset 0px 0px 10px 10px #c13584;

      &::after {
        transform: scale(1);
      }
    }
  }
}
</style>
