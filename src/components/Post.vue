<template>
<div id="posts">
  <div class="layout-padding">
    <transition name="fade" mode="out-in">
      <div class="transition__innerWrapper" :key="$route.params.id">
        <h1 v-text="id"></h1>
        <button class="primary" @click="openEditor">Open Editor</button>
        <editor></editor>
        <q-uploader v-if="showPhotoUploader" :labels="labels" :hideUploadButton="true" url="/" @add="handleUpload"></q-uploader>
        <transition name="slide-fade">

          <div id="editor" v-if="inEditMode" class="editor" >
            <!-- <textarea name="name" rows="8" :value="forRepo" cols="80"></textarea> -->
            <textarea class="editor__area" :value="input" @input="updateEditor"></textarea>
            <div class="editor__preview" v-html="compiledMarkdown"></div>
            <div class=" editor__buttonsWrapper fixed-bottom-right">
              <button type="button" name="save" class="light" @click="inEditMode = false">Cancel</button>
              <button type="button" name="save" class="primary" @click="updateRepoFile(forRepo)">Update File</button>
            </div>
          </div>
        </transition>
      </div>
    </transition>



  </div>
</div>
</template>


<script>
import marked from 'marked'
const FM = require('front-matter')
import Editor from './Posts/Editor.vue'

import {
  SITE,
  REPO
} from '../site.js'
var reader  = new FileReader()

export default {
  components: {
    Editor
  },
  data() {
    return {
      id: '',
      input: 'Initial input content',
      frontMatter: '',
      labels: {add: '<i>add</i> Upload Photo'},
      showPhotoUploader: false,
      inEditMode: false
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, {
        sanitize: true
      })
    },
    forFile: function() {
      let wrapper = "---"
      let nl = "\n"
      return `---\n${this.frontMatter}\n---\n`
        // return wrapper + nl + this.frontMatter + nl + wrapper
    },
    forRepo: function() {
      return this.forFile + this.input
    }
  },
  created() {
    this.fetchData()
  },

  mounted() {},

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    openEditor() {
      this.inEditMode = !this.inEditMode
    },

    handleUpload(payload) {
      var file = payload[0]
      var reader  = new FileReader();
      var vm = this
        reader.addEventListener("load", function () {
          let content = reader.result.replace(/^data:image\/jpeg;base64,/, "")
          vm.uploadFile(content)
        }, false);

        if (file) {
          reader.readAsDataURL(file);
        }
    },

    uploadFile(content) {

      REPO.writeFile('master', 'site/static/img/usingreplace4.jpg', content, 'Uploaded Image', {encode: false}, (response) => {
        console.log(response);
      })
    },

    fetchData() {
      let post = this.$route.params.id
      let path = `site/content/post/${post}`
      this.id = _.startCase(this.$route.params.id.replace('.md', ''));
      REPO.getContents('master', path, true, (err, content) => {
        let parsedFile = FM(content)
        this.frontMatter = parsedFile.frontmatter
        this.input = parsedFile.body
      })
    },
    updateRepoFile(data) {
      let sha = 'cf62e6e6347cda69ef36616826ea0f2bb6eb793e'
      REPO.writeFile('master', 'site/content/post/new.md', data, 'Updating from Vue-Admin', (response) => {
        console.log(response);
      })
    },
    cancelEdit() {
      console.log('cancel here!');
    },
    updateEditor: _.debounce(function(e) {
      this.input = e.target.value
    }, 300)
  },
  name: 'post'
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

/* Transitions */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;

  /*transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(100%);
  /*opacity: 0;*/
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
