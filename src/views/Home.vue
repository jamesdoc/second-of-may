<template>
  <div class="centralContainer">
    <div class="home">

      <h1 class="home__title">
        James &amp; Natalie
      </h1>

      <div class="home__date">
        2nd May 2020
      </div>

      <h2 class="home__subtitle">
        {{ inviteName ? `${inviteName}, you're` : `You're` }} invited
      </h2>

      <div class="home__location">
        <p>
          <span class="home__location__line">2pm at St. John's, Hoxton</span>
          <span class="home__location__line">Pitfield Street, N1 6NP <a class="home__location__map" href="https://goo.gl/maps/gZzw11zZDM72C5dk8" target="_blank" rel="noopener">See a map</a></span>
          <span class="home__location__line home__location__underground">
            <ug />
            <span>Old Street</span>
            <span class="underground underground--northern">Northern Line</span>
          </span>
        </p>
      </div>

      <div>
        <router-link
          to="/rsvp"
          class="btn btn--block"
          aria-label="Let us know you're coming">RSVP</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ug from '../assets/ug.svg';

export default {
  name: 'home',
  created() {
    if (this.$route.query.name) {
      this.inviteName = this.$route.query.name;
    }
  },
  data() {
    return {
      inviteName: null,
    };
  },
  components: {
    ug,
  },
};
</script>
