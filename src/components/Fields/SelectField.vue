<template>
  <div id="selectField" class="field">
    <q-select type="checkbox" v-model="field.value" :options="field.options" static-label="Tags"></q-select>
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
