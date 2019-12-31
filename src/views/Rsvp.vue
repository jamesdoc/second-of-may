<template>
<div>
  <h1>RSVP</h1>

  <form
    action="https://secondofmay.us4.list-manage.com/subscribe/post?u=c335cbaae4eb8bf9dce39b6a6&amp;id=0804ecbe8b"
    method="post"
    class="formText"
    target="_blank"
    novalidate>

    <div class="nameGroup">
      <div class="nameGroup__names">

        <input
          type="text"
          class="formText"
          v-model="name"
          placeholder="Name" />

        <div v-for="(p, i) in extraPeopleList" :key="`p-${i}`">
          <input
            type="text"
            class="formText"
            placeholder="Name"
            v-model="extraPeopleList[i]" />

          <button
            class="btn btn--inField formText"
            aria-label="Remove name"
            v-on:click="removeName($event, i)">
            X
          </button>
        </div>

      </div>

      <span class="labelText">{{ extraPeopleList.length > 0 ? 'are' : 'is' }} coming to…</span>
    </div>
    <button
      v-on:click="addExtraPeople($event)"
      class="btn btn--text">
      Add another name
    </button>

    <div>
          <input type="checkbox"
                  value="1"
                  name="group[60629][1]"
                  id="mce-group[60629]-60629-0">
          <label for="mce-group[60629]-60629-0">
            the wedding of James and Nat
          </label>
    </div>

    <div>
      <input type="checkbox"
              value="2"
              name="group[60629][2]"
              id="mce-group[60629]-60629-1">
      <label for="mce-group[60629]-60629-1">
        and will stay for cake
      </label>

      <button
        class="btn btn--text"
        v-on:click="toggleCakeField($event)"
        v-if="cakeField == false">
        Can you bring cake?
      </button>

      <transition name="slide">
        <div class="mc-field-group" v-if="cakeField">
          <label for="mce-CAKE">and will bring</label>
          <input
            placeholder="cake name"
            type="text"
            value=""
            name="CAKE"
            class=""
            id="mce-CAKE">
        </div>
      </transition>
    </div>

    <div v-if="dinner">
      <input type="checkbox"
            value="4"
            name="group[60629][4]"
            id="mce-group[60629]-60629-2">
      <label for="mce-group[60629]-60629-2">
        and for dinner in Borough
      </label>

      <button
        class="btn btn--text"
        v-on:click="toggleAllergiesField($event)"
        v-if="allergyField == false">
        And I don't like to eat…
      </button>

      <div class="mc-field-group" v-if="allergyField">
        <label for="mce-ALLERGIES">
          I don't like to eat...
        </label>
        <input type="text" value="" name="ALLERGIES" class="" id="mce-ALLERGIES">
      </div>
    </div>

    <div class="mc-field-group">
      <label for="mce-EMAIL" class="formText">You can contact me by emailing</label>
      <input
        v-model="email"
        type="email"
        value=""
        name="EMAIL"
        class="formText"
        placeholder="email@emailaddress.com"
        id="mce-EMAIL">
    </div>

    <div style="position: absolute; left: -5000px;" aria-hidden="true">
      <input type="text"
              name="b_c335cbaae4eb8bf9dce39b6a6_0804ecbe8b"
              tabindex="-1"
              value="">
    </div>


    <input
      class="btn formText"
      type="submit"
      value="Submit"
      name="subscribe">

    <div>
    <input
      v-model="firstName"
      type="text"
      name="FNAME"
      class=""
      id="mce-FNAME">
    <input
      v-model="lastName"
      type="text"
      name="LNAME"
      class=""
      id="mce-LNAME">
    <input
      type="text"
      v-model="extraPeopleList"
      name="MOREPEOPLE"
      class=""
      id="mce-MOREPEOPLE" />
    </div>


  </form>

</div>
</template>

<script>
function nameSplitter(nameIn) {
  const n = nameIn.split(' ');
  const last = n[n.length - 1];
  const first = nameIn.replace(` ${last}`, '');
  return [first, last];
}

export default {
  name: 'home',
  created() {
    if (this.$route.query.dinner) {
      this.dinner = true;
    }
  },
  data() {
    return {
      name: '',
      firstName: '',
      lastName: '',
      email: '',
      dinner: false,
      cakeField: false,
      allergyField: false,
      extraPeopleList: [],
    };
  },
  methods: {
    addExtraPeople(e) {
      e.preventDefault();
      this.extraPeopleList.push('');
    },
    addExtraName(e, i) {
      console.log(i);
      console.log(nameSplitter(e.target.value));
    },
    removeName(e, i) {
      e.preventDefault();
      this.extraPeopleList.splice(i, 1);
    },
    toggleCakeField(e) {
      e.preventDefault();
      this.cakeField = !this.cakeField;
    },
    toggleAllergiesField(e) {
      e.preventDefault();
      this.allergyField = !this.allergyField;
    },
  },
  watch: {
    name() {
      const splitName = nameSplitter(this.name);
      [this.firstName, this.lastName] = splitName;
    },
  },
};
</script>

<style scoped lang="scss">
  .nameGroup {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  input {
    outline: none;
    border: none;
    border-bottom: 2px solid #ccc;
  }

  .formText {
    font-size: 2rem;
    text-transform: uppercase;
  }

  .btn {
    outline: none;
    &--text {
      background: none;
      border: none;
      text-decoration: underline;
    }
  }

  .slide-enter-active {
    transition-duration: 0.3s;
    transition-timing-function: ease-in;
  }

  .slide-leave-active {
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .slide-enter-to, .slide-leave {
    max-height: 100px;
    overflow: hidden;
  }

  .slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
  }
</style>
