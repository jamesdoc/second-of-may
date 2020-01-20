<template>
  <div class="siteContainer">

    <header class="spine">
      <hgroup class="spine__text">
        <h1>James and Nat</h1>
        <h2>Second of May 2020</h2>
      </hgroup>

      <div class="spine__logo">
        <!-- <logo /> -->
      </div>
    </header>

    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/gift">Gifts</router-link> |
      <router-link to="/rsvp">Tell us you're coming</router-link>
    </div>
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'site',
  components: {},
};
</script>

<style lang="scss">
  @import './styles/app.scss';
</style>
