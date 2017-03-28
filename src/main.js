// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import GitHub from 'github-api'
import VueStash from 'vue-stash';

window._ = require('lodash')
import Prosemirror from 'vue-prosemirror-2'

Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueStash)
Vue.use(Prosemirror)
// console.log(Prosemirror);

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    data: {
        store: {
            user: {
                name: 'cody'
            },
            posts: [],
            pages: [],
            currentPost: ''
        }
    },

    render: h => h(require('./App'))
  })
})
