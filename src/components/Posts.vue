<template>
<div id="posts">
  <div class="layout-padding">

    <h4 class="caption">Posts</h4>
    <div class="list no-border">
      <div class="item" v-for="post in posts" @click="getPostContent(post)" :key="post.name">
        <div class="item-content" v-text="post.name"></div>
      </div>
    </div>

    <div id="editor" class="editor">
      <textarea class="editor__area" :value="input" @input="updateEditor"></textarea>
      <div class="editor__preview" v-html="compiledMarkdown"></div>

      <div class=" editor__buttonsWrapper fixed-bottom-right">
        <button type="button" name="save" class="light" @click="cancelEdit()">Cancel</button>
        <button type="button" name="save" class="primary" @click="updateRepoFile(input)">Update File</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import marked from 'marked'
let _ = require('lodash')
import GitHub from 'github-api'
const FM = require('front-matter')
var gh = new GitHub({
  username: 'davidroyer',
  password: 'Dance4life'
})

let Me = gh.getUser()
  // let gist = gh.getGist(GIST_ID)
let repo = gh.getRepo('davidroyer', 'hugo-cms')

// getRepoPost: function() {
//
//
//   this.siteRepo = repo
//   // repo.getContents('master', 'site/content/post', true, (err, posts) => {
//   //   this.posts = posts
//   // })
//   repo.getContents('master', 'site/content/post/brewing-chemex.md', true, (err, content) => {
//     this.input = content
//     console.log(FM(content))
//   })
// }

export default {
  data() {
    return {
      posts: [],
      input: 'Initial input content'
    }
  },

  created() {
    // this.getPosts()
  },

  computed: {
    compiledMarkdown: function() {
      return marked(this.input, {
        sanitize: true
      })
    }
  },

  methods: {
    getPosts() {
      repo.getContents('master', 'site/content/post', false, (err, posts) => {
        this.posts = posts
      })
    },

    getPostContent(post) {
      console.log(post);
      repo.getContents('master', post.path, true, (err, content) => {
        let parsedFile = FM(content)
        this.input = parsedFile.body
        console.log(parsedFile.attributes);
      })
    },

    setEditor(post) {
      // console.log(post)
    },

    cancelEdit() {
      console.log('cancel here!');
    },

    updateEditor: _.debounce(function(e) {
      this.input = e.target.value
    }, 300)
  }
}
</script>

<style>
.editor {
  position: fixed;
  right: 0;
  top: 50px;
  width: 60%;
  background: #f6f6f6;
  display: flex;
  bottom: 0;
  padding: 1em;
}

.editor__area {
  width: 40%;
  border-right: 1px solid rgba(149, 149, 149, 0.52);
  height: 100%;
}

.editor__preview {
  padding: 0 1em;
  width: 60%;
  height: 100%;
}
.editor__button-wrappers {
  left: calc(100% - 300px);
}


</style>
