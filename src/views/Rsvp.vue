<template>
  <div class="centralContainer">
    <form
      action="https://secondofmay.us4.list-manage.com/subscribe/post?u=c335cbaae4eb8bf9dce39b6a6&amp;id=0804ecbe8b"
      method="post"
      class="rsvpForm"
      novalidate>

      <div class="rsvpForm__group">

        <div class="nameFields">
          <div class="nameFields__fields">
            <input
              id="primaryName"
              type="text"
              class="underlinedInput"
              v-model="name"
              placeholder="Full name" />

            <transition-group name="slide">
              <div
                v-for="(p, i) in extraPeopleList"
                :key="`p-${i}`"
                class="extraPeopleField">
                <input
                  type="text"
                  class="underlinedInput"
                  placeholder="Full name"
                  v-model="extraPeopleList[i]" />

                <button
                  class="btn btn--inField"
                  aria-label="Remove name"
                  v-on:click="removeName($event, i)">
                  <svg height="16.970563" width="16.970563" xmlns="http://www.w3.org/2000/svg"><path d="m0 2.12132025 2.12132025-2.12132025 6.36396074 6.36396074 6.36396027-6.36396074 2.12132072 2.12132025-6.36396026 6.36396074 6.36396026 6.36396027-2.12132072 2.12132072-6.36396027-6.36396026-6.36396074 6.36396026-2.12131977-2.12132072 6.36396026-6.36396027z" fill="#c8c8c8" fill-rule="evenodd"/></svg>          </button>
              </div>
            </transition-group>
          </div>

          <!-- <label for="primaryName" class="rsvpForm__label">
            {{ extraPeopleList.length > 0 ? 'are' : 'is' }} coming to…
          </label> -->
        </div>

        <button
          v-on:click="addExtraPeople($event)"
          class="btn btn--text">
          Add another name
        </button>
      </div>

      <div class="checkboxFields">

        <div class="checkboxFields__fieldGroup rsvpForm__group">
          <input
            v-model="chkWedding"
            type="checkbox"
            value="1"
            name="group[60629][1]"
            id="mce-group[60629]-60629-0">
          <label
            for="mce-group[60629]-60629-0"
            class="checkboxFields__fieldGroup__label rsvpForm__label">
            can come…
          </label>
        </div>

        <div v-if="chkWedding == 0" class="checkboxFields__fieldGroup rsvpForm__group">
          <input
            v-model="chkNope"
            type="checkbox"
            value="0"
            name="nope"
            id="nope">
          <label
            for="nope"
            class="checkboxFields__fieldGroup__label rsvpForm__label">
            cannot come to the wedding
          </label>
        </div>
      </div>

      <div class="checkboxFields">
        <div
          class="checkboxFields__fieldGroup rsvpForm__group"
          v-if="chkWedding == 1">
          <input
            v-model="chkCake"
            type="checkbox"
            value="2"
            name="group[60629][2]"
            id="mce-group[60629]-60629-1">
          <label
            for="mce-group[60629]-60629-1"
            class="checkboxFields__fieldGroup__label rsvpForm__label">
            and {{ extraPeopleList.length > 0 ? 'we' : 'I' }} will stay for cake
          </label>

          <button
            class="btn btn--text"
            v-on:click="toggleCakeField($event)"
            v-if="cakeField == false">
            Can you bring cake?
          </button>

          <div class="mc-field-group" v-if="cakeField">
            <label for="mce-CAKE" class="rsvpForm__label rsvpForm__label--small">
              {{ extraPeopleList.length > 0 ? 'We' : 'I' }} will bring
            </label>
            <input
              v-model="cakeName"
              placeholder="cake name"
              type="text"
              value=""
              name="CAKE"
              class="underlinedInput underlinedInput--small"
              id="mce-CAKE">
          </div>
        </div>

        <div v-if="dinner && chkWedding == 1" class="checkboxFields__fieldGroup rsvpForm__group">
          <input
            v-model="chkDinner"
            type="checkbox"
            value="4"
            name="group[60629][4]"
            id="mce-group[60629]-60629-2">
          <label
            class="checkboxFields__fieldGroup__label rsvpForm__label"
            for="mce-group[60629]-60629-2">
            and for dinner in Borough
          </label>

          <button
            class="btn btn--text"
            v-on:click="toggleAllergiesField($event)"
            v-if="allergyField == false">
            But {{ extraPeopleList.length > 0 ? 'we' : 'I' }} don't like to eat…
          </button>

          <transition name="slide">
          <div class="mc-field-group" v-if="allergyField">
            <label
              class="rsvpForm__label rsvpForm__label--small"
              for="mce-ALLERGIES">
              {{ extraPeopleList.length > 0 ? 'we' : 'i' }} don't like to eat:
            </label>
            <textarea
              v-model="allergies"
              type="text"
              value=""
              name="ALLERGIES"
              class="underlinedTextArea"
              id="mce-ALLERGIES" />
          </div>
          </transition>
        </div>

      </div>


      <div class="rsvpForm__group">
        <label
          for="mce-EMAIL"
          class="rsvpForm__label">You can contact me by emailing</label>

        <input
          v-model="email"
          type="email"
          value=""
          name="EMAIL"
          class="underlinedInput underlinedInput--wide underlinedInput--block"
          placeholder="email@emailaddress.com"
          id="mce-EMAIL">
      </div>


      <transition name="slide">
        <div class="rsvpForm__validation" v-if="validationMessages.length > 0">
          <p v-for="(p, i) in validationMessages" :key="`v-${i}`">
            {{ p }}
          </p>
        </div>
      </transition>

      <div class="rsvpForm__group">
        <input
          class="btn btn--block"
          type="submit"
          value="Submit"
          name="subscribe"
          v-on:click="formSubmit($event)">
      </div>

      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input type="text"
                name="b_c335cbaae4eb8bf9dce39b6a6_0804ecbe8b"
                tabindex="-1"
                value="">
      </div>
      <input
        v-model="firstName"
        type="hidden"
        name="FNAME"
        id="mce-FNAME">
      <input
        v-model="lastName"
        type="hidden"
        name="LNAME"
        id="mce-LNAME">
      <input
        type="hidden"
        v-model="extraPeopleList"
        name="MOREPEOPLE"
        id="mce-MOREPEOPLE" />

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
      extraPeopleList: [],
      email: '',
      allergies: '',
      cakeName: '',
      chkWedding: false,
      chkCake: false,
      chkDinner: false,
      dinner: false,
      cakeField: false,
      allergyField: false,
      validationMessages: [],
    };
  },
  methods: {
    addExtraPeople(e) {
      e.preventDefault();
      this.extraPeopleList.push('');
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
    formSubmit(e) {
      this.validationMessages = [];

      if (this.firstName === '' || this.lastName === '' || this.firstName === this.lastName) {
        this.validationMessages.push('Please include your full name');
      }

      if (this.email === '') {
        this.validationMessages.push('Please include your email address');
      } else if (!this.email.includes('@')) {
        this.validationMessages.push('Please check the email address entered');
      }

      if (this.validationMessages.length > 0) {
        e.preventDefault();
        return false;
      }

      return true;
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
