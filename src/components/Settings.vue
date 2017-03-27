<template>
  <div id="settings">
    <div class="layout-padding">
      <h1>Settings will go here</h1>
      <button @click="editStore">Edit Store</button>
      <button @click="logStore">Log Store</button>
    </div>
  </div>
</template>

<script>
import {SITE, REPO} from '../site.js'

export default {
  name: 'settings',
  store: ['posts'],

  data () {
    return {}
  },

  methods: {
    logStore() {
      console.log(this.user);
      console.log(this.posts);
    },

    editStore() {
      this.user.name = 'David'
      console.log(this.$store);
    }
  }
}
</script>

<style>
</style>
