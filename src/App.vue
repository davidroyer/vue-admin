
<template>
<!-- eslint-disable -->
<div id="q-app">

  <q-layout>

    <div slot="header" class="toolbar">
      <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
          <i>menu</i>
        </button>
      <q-toolbar-title :padding="0">
        VueAdmin
      </q-toolbar-title>
    </div>
    <q-drawer ref="leftDrawer">
      <div class="toolbar light">
        <q-toolbar-title :padding="1">
          Drawer
        </q-toolbar-title>
      </div>

      <div class="list no-border platform-delimiter">
        <q-drawer-link icon="view_quilt" to="/" exact>
          Dashboard
        </q-drawer-link>
        <q-drawer-link icon="view_quilt" to="/showcase/layout" exact>
          About Layout
        </q-drawer-link>
        <hr>

        <div class="list-label">Posts</div>
        <!-- <template v-for="post in posts">
          <q-drawer-link :key="post.name" class="item" :to="{ name: 'post', params: { id: post.name }}" exact>
            {{post.name}}
          </q-drawer-link>
        </template> -->
        <template v-for="post in posts">
          <router-link
            @click.native="$refs.leftDrawer.close()"
            tag="div"
            class="item item-link"
            :key="post.name"
            :to="{ name: 'post', params: { id: post.name }}">
            <div class="item-content" v-text="post.name"></div>
          </router-link>
        </template>

        <div class="list-label">Pages</div>
        <template v-for="page in pages">
          <q-drawer-link :key="page.name" class="item" :to="{ name: 'page', params: { id: page.name }}" exact>
            {{page.name}}
          </q-drawer-link>
        </template>

        <q-drawer-link icon="settings" to="/settings">
          Settings
        </q-drawer-link>



      </div>
    </q-drawer>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </q-layout>
</div>
</template>

<script>
const {EditorState} = require("prosemirror-state")
const {EditorView} = require("prosemirror-view")
const {DOMParser} = require("prosemirror-model")
const {schema} = require("prosemirror-schema-basic")
const {exampleSetup} = require("prosemirror-example-setup")

// window.view = new EditorView(document.querySelector("#eTest"), {
//   state: EditorState.create({
//     doc: DOMParser.fromSchema(schema).parse(document.querySelector("#eContent")),
//     plugins: exampleSetup({schema})
//   })
// })
/*
 * Root component
 */
/* eslint-disable */
// import GitHub from 'github-api'
import _ from 'lodash'

import {SITE, REPO} from './site.js'

export default {
  store: ['posts', 'pages'],
  data() {
    return {
      navPosts: []
    }
  },

  created() {
    this.getPosts()
    this.getPages()

  },
  mounted() {
    this.createPostTitles()
  },
  methods: {
    testRouter() {
      // @click="$refs.leftDrawer.open()"

    },
    clickedOnItem() {
      console.log('hiiii')
    },
    getPosts() {
      REPO.getContents('master', 'site/content/post', false, (err, sitePosts) => {
        this.posts = sitePosts
      })
    },

    getPages() {
      REPO.getContents('master', 'site/content', false, (err, sitePages) => {
        this.pages =  _.remove(sitePages, function(obj) {
          return obj.name.includes('.md')
        });
      })
    },

    createPostTitles() {
      var vm = this
      var Posts = vm.posts
      // this.navPosts = Posts.map(post => post['title'] = 'NEW TITLE')
      Posts.forEach(function (post) {
        let name = post.name
        let title = _.startCase(name.replace('.md', ''))
        post['title'] = title
      });
      console.log(Posts);
      vm.navPosts = Posts
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
