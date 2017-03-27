<template>
  <div id="settings">
    <div class="layout-padding">
      <h1>Page</h1>
        {{$route.params.id}}
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
