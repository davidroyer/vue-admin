<template>
  <div id="textField" class="field floating-label">
    <input class="full-width" required v-model="field.value">
    <label>{{field.label}}</label>
  </div>
</template>

<script>
import {SITE, REPO} from '../../site.js'
// <div id="textField">
//   <input :value="myProp" @input="updateInput($event.target.value)">
//   {{myProp}}
// </div>
export default {
  name: 'TextField',
  store: ['field'],
  props: ['field'],
  data () {
    return {
      // username: 'this.propA'
    }
  },

  methods: {
    updateInput(value) {
      console.log('fired');
      this.$emit('input', myProp)
    },

    editStore() {
    }
  }
}
</script>

<style>
</style>
