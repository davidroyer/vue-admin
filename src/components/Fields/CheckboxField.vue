<template>
  <div id="checkboxField" class="field">
    <label>
      <q-checkbox v-model="field.value"></q-checkbox>
      {{field.label}}
    </label>
  </div>
</template>

<script>
import {SITE, REPO} from '../../site.js'

export default {
  name: 'CheckboxChecker',
  store: ['posts'],
  props: ['field'],
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
