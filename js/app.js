webpackJsonp([8],{162:function(s,t,e){"use strict";function n(s){return function(){return e(243)("./"+s+".vue")}}var a=e(25),r=e.n(a),o=e(239);r.a.use(o.a),t.a=new o.a({routes:[{path:"/",component:n("Dashboard")},{path:"/posts",component:n("Posts")},{path:"/post/:id",component:n("Post"),name:"post"},{path:"/page/:id",component:n("Page"),name:"page"},{path:"/settings",component:n("Settings")},{path:"*",component:n("Error404")}]})},163:function(s,t){},165:function(s,t,e){e(193);var n=e(167)(e(189),e(238),null,null);s.exports=n.exports},168:function(s,t,e){"use strict";var n=e(18),a=e.n(n),r=e(10);e.n(r);e.d(t,"a",function(){return i});var o=new a.a({username:"davidroyer",password:"Dance4life"}),i=(o.getRepo("davidroyer","hugo-cms"),o.getRepo("davidroyer","hugo-cms"))},189:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(10),a=e.n(n),r=e(168),o=e(2),i=(o.EditorState,e(16)),j=(i.EditorView,e(1)),c=(j.DOMParser,e(170)),u=(c.schema,e(169));u.exampleSetup;t.default={store:["posts","pages"],data:function(){return{navPosts:[]}},created:function(){this.getPosts(),this.getPages()},mounted:function(){this.createPostTitles()},methods:{testRouter:function(){},clickedOnItem:function(){console.log("hiiii")},getPosts:function(){var s=this;r.a.getContents("master","site/content/post",!1,function(t,e){s.posts=e})},getPages:function(){var s=this;r.a.getContents("master","site/content",!1,function(t,e){s.pages=a.a.remove(e,function(s){return s.name.includes(".md")})})},createPostTitles:function(){var s=this,t=s.posts;t.forEach(function(s){var t=s.name,e=a.a.startCase(t.replace(".md",""));s.title=e}),console.log(t),s.navPosts=t}}}},190:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(25),a=e.n(n),r=e(164),o=e.n(r),i=e(162),j=e(18),c=(e.n(j),e(166)),u=e.n(c);e(163),a.a,window._=e(10),a.a.use(o.a),a.a.use(u.a),o.a.start(function(){new a.a({el:"#q-app",router:i.a,data:{store:{user:{name:"cody"},posts:[],pages:[],currentPost:""}},render:function(s){return s(e(165))}})})},193:function(s,t){},207:function(s,t,e){function n(s){return e(a(s))}function a(s){var t=r[s];if(!(t+1))throw new Error("Cannot find module '"+s+"'.");return t}var r={"./af":35,"./af.js":35,"./ar":42,"./ar-dz":36,"./ar-dz.js":36,"./ar-kw":37,"./ar-kw.js":37,"./ar-ly":38,"./ar-ly.js":38,"./ar-ma":39,"./ar-ma.js":39,"./ar-sa":40,"./ar-sa.js":40,"./ar-tn":41,"./ar-tn.js":41,"./ar.js":42,"./az":43,"./az.js":43,"./be":44,"./be.js":44,"./bg":45,"./bg.js":45,"./bn":46,"./bn.js":46,"./bo":47,"./bo.js":47,"./br":48,"./br.js":48,"./bs":49,"./bs.js":49,"./ca":50,"./ca.js":50,"./cs":51,"./cs.js":51,"./cv":52,"./cv.js":52,"./cy":53,"./cy.js":53,"./da":54,"./da.js":54,"./de":57,"./de-at":55,"./de-at.js":55,"./de-ch":56,"./de-ch.js":56,"./de.js":57,"./dv":58,"./dv.js":58,"./el":59,"./el.js":59,"./en-au":60,"./en-au.js":60,"./en-ca":61,"./en-ca.js":61,"./en-gb":62,"./en-gb.js":62,"./en-ie":63,"./en-ie.js":63,"./en-nz":64,"./en-nz.js":64,"./eo":65,"./eo.js":65,"./es":67,"./es-do":66,"./es-do.js":66,"./es.js":67,"./et":68,"./et.js":68,"./eu":69,"./eu.js":69,"./fa":70,"./fa.js":70,"./fi":71,"./fi.js":71,"./fo":72,"./fo.js":72,"./fr":75,"./fr-ca":73,"./fr-ca.js":73,"./fr-ch":74,"./fr-ch.js":74,"./fr.js":75,"./fy":76,"./fy.js":76,"./gd":77,"./gd.js":77,"./gl":78,"./gl.js":78,"./gom-latn":79,"./gom-latn.js":79,"./he":80,"./he.js":80,"./hi":81,"./hi.js":81,"./hr":82,"./hr.js":82,"./hu":83,"./hu.js":83,"./hy-am":84,"./hy-am.js":84,"./id":85,"./id.js":85,"./is":86,"./is.js":86,"./it":87,"./it.js":87,"./ja":88,"./ja.js":88,"./jv":89,"./jv.js":89,"./ka":90,"./ka.js":90,"./kk":91,"./kk.js":91,"./km":92,"./km.js":92,"./kn":93,"./kn.js":93,"./ko":94,"./ko.js":94,"./ky":95,"./ky.js":95,"./lb":96,"./lb.js":96,"./lo":97,"./lo.js":97,"./lt":98,"./lt.js":98,"./lv":99,"./lv.js":99,"./me":100,"./me.js":100,"./mi":101,"./mi.js":101,"./mk":102,"./mk.js":102,"./ml":103,"./ml.js":103,"./mr":104,"./mr.js":104,"./ms":106,"./ms-my":105,"./ms-my.js":105,"./ms.js":106,"./my":107,"./my.js":107,"./nb":108,"./nb.js":108,"./ne":109,"./ne.js":109,"./nl":111,"./nl-be":110,"./nl-be.js":110,"./nl.js":111,"./nn":112,"./nn.js":112,"./pa-in":113,"./pa-in.js":113,"./pl":114,"./pl.js":114,"./pt":116,"./pt-br":115,"./pt-br.js":115,"./pt.js":116,"./ro":117,"./ro.js":117,"./ru":118,"./ru.js":118,"./sd":119,"./sd.js":119,"./se":120,"./se.js":120,"./si":121,"./si.js":121,"./sk":122,"./sk.js":122,"./sl":123,"./sl.js":123,"./sq":124,"./sq.js":124,"./sr":126,"./sr-cyrl":125,"./sr-cyrl.js":125,"./sr.js":126,"./ss":127,"./ss.js":127,"./sv":128,"./sv.js":128,"./sw":129,"./sw.js":129,"./ta":130,"./ta.js":130,"./te":131,"./te.js":131,"./tet":132,"./tet.js":132,"./th":133,"./th.js":133,"./tl-ph":134,"./tl-ph.js":134,"./tlh":135,"./tlh.js":135,"./tr":136,"./tr.js":136,"./tzl":137,"./tzl.js":137,"./tzm":139,"./tzm-latn":138,"./tzm-latn.js":138,"./tzm.js":139,"./uk":140,"./uk.js":140,"./ur":141,"./ur.js":141,"./uz":143,"./uz-latn":142,"./uz-latn.js":142,"./uz.js":143,"./vi":144,"./vi.js":144,"./x-pseudo":145,"./x-pseudo.js":145,"./yo":146,"./yo.js":146,"./zh-cn":147,"./zh-cn.js":147,"./zh-hk":148,"./zh-hk.js":148,"./zh-tw":149,"./zh-tw.js":149};n.keys=function(){return Object.keys(r)},n.resolve=a,s.exports=n,n.id=207},238:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"q-app"}},[e("q-layout",[e("div",{attrs:{id:"eTest"}}),s._v(" "),e("div",{attrs:{id:"eContent"}},[s._v("Test Content")]),s._v(" "),e("div",{staticClass:"toolbar",slot:"header"},[e("button",{staticClass:"hide-on-drawer-visible",on:{click:function(t){s.$refs.leftDrawer.open()}}},[e("i",[s._v("menu")])]),s._v(" "),e("q-toolbar-title",{attrs:{padding:0}},[s._v("\n        VueAdmin\n      ")])],1),s._v(" "),e("q-drawer",{ref:"leftDrawer"},[e("div",{staticClass:"toolbar light"},[e("q-toolbar-title",{attrs:{padding:1}},[s._v("\n          Drawer\n        ")])],1),s._v(" "),e("div",{staticClass:"list no-border platform-delimiter"},[e("q-drawer-link",{attrs:{icon:"view_quilt",to:"/",exact:""}},[s._v("\n          Dashboard\n        ")]),s._v(" "),e("q-drawer-link",{attrs:{icon:"view_quilt",to:"/showcase/layout",exact:""}},[s._v("\n          About Layout\n        ")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"list-label"},[s._v("Posts")]),s._v(" "),s._l(s.posts,function(t){return[e("router-link",{key:t.name,staticClass:"item item-link",attrs:{tag:"div",to:{name:"post",params:{id:t.name}}},nativeOn:{click:function(t){s.$refs.leftDrawer.close()}}},[e("div",{staticClass:"item-content",domProps:{textContent:s._s(t.name)}})])]}),s._v(" "),e("div",{staticClass:"list-label"},[s._v("Pages")]),s._v(" "),s._l(s.pages,function(t){return[e("q-drawer-link",{key:t.name,staticClass:"item",attrs:{to:{name:"page",params:{id:t.name}},exact:""}},[s._v("\n            "+s._s(t.name)+"\n          ")])]}),s._v(" "),e("q-drawer-link",{attrs:{icon:"settings",to:"/settings"}},[s._v("\n          Settings\n        ")])],2)]),s._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view",{staticClass:"view"})],1)],1)],1)},staticRenderFns:[]}},243:function(s,t,e){function n(s){var t=a[s];return t?e.e(t[1]).then(function(){return e(t[0])}):Promise.reject(new Error("Cannot find module '"+s+"'."))}var a={"./Dashboard.vue":[247,6],"./Error404.vue":[248,5],"./Page.vue":[249,4],"./Post.vue":[250,0],"./Posts.vue":[251,1],"./Posts/Editor.vue":[246,3],"./Settings.vue":[252,2]};n.keys=function(){return Object.keys(a)},s.exports=n,n.id=243}},[190]);