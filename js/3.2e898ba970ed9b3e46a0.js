webpackJsonp([3],{330:function(t,e,o){o(404);var s=o(186)(o(393),o(410),null,null);t.exports=s.exports},393:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o(187);e.default={name:"settings",store:["posts"],data:function(){return{}},methods:{logStore:function(){console.log(this.user),console.log(this.posts)},editStore:function(){this.user.name="David",console.log(this.$store)}}}},398:function(t,e,o){e=t.exports=o(317)(),e.push([t.i,"",""])},404:function(t,e,o){var s=o(398);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);o(318)("e3a00288",s,!0)},410:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"settings"}},[o("div",{staticClass:"layout-padding"},[o("h1",{staticClass:"route-heading"},[t._v("Settings will go here")]),t._v(" "),o("button",{on:{click:t.editStore}},[t._v("Edit Store")]),t._v(" "),o("button",{on:{click:t.logStore}},[t._v("Log Store")])])])},staticRenderFns:[]}}});