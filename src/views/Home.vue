<template>
  <div class="centralContainer">
    <div class="home">

      <h1 class="home__title">
        James &amp; Natalie
      </h1>

      <div class="home__date">
        2nd May 2020
      </div>

      <h2 class="home__subtitle">You're invited</h2>

      <div class="home__location">
        <p>
          2pm at St. John's, Hoxton<br />
          Pitfield Street, N1 6NP <a class="home__location__map" href="https://goo.gl/maps/gZzw11zZDM72C5dk8" target="_blank" rel="noopener">See a map</a><br />
          <span class="home__location__underground">
            <ug /> Old Street <span class="underground underground--northern">Northern Line</span>
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
  components: {
    ug,
  },
};
</script>
