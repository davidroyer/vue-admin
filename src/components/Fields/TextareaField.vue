<template>
  <div id="textareaField" class="field floating-label">
    <input class="full-width" required v-model="field.value">
    <label>{{field.label}}</label>
  </div>
</template>

<script>
import {SITE, REPO} from '../../site.js'

export default {
  name: 'TextareaField',
  store: ['posts'],
  props: ['field'],
  data () {
    return {
      // username: 'this.propA'
    }
  },

  methods: {
    updateInput(myProp) {
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
