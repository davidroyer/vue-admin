<template>
  <div id="editor">
    <!-- <div class="layout-padding">
      <h1>Editor</h1>
      <button @click="editStore">Edit Store</button>
      <button @click="logStore">Log Store</button>
    </div> -->
    <div id="prose"></div>
    <textarea id="content">## heading 2</textarea>
  </div>

</template>

<script>
import {SITE, REPO} from '../../site.js'
const {EditorState} = require("prosemirror-state")
const {EditorView} = require("prosemirror-view")
const {DOMParser} = require("prosemirror-model")
const {schema} = require("prosemirror-schema-basic")
const {exampleSetup} = require("prosemirror-example-setup")


// console.log(window.view);
export default {
  name: 'editor',
  store: ['posts'],

  data () {
    return {
      editor: null
    }
  },

  mounted() {
    this.setupEditor()
  },

  methods: {
    logStore() {
      console.log(this.user);
      console.log(this.posts);
    },

    editStore() {
      this.user.name = 'David'
      console.log(this.$store);
    },

    setupEditor() {
      let vm = this
      vm.editor = new EditorView(document.querySelector("#prose"), {
        state: EditorState.create({
          doc: DOMParser.fromSchema(schema).parse(document.querySelector("#content")),
          plugins: exampleSetup({schema})
        })
      })
    }
  }
}
</script>

<style>
</style>
