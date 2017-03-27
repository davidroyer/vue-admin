import GitHub from 'github-api'
var gh = new GitHub({
  username: 'davidroyer',
  password: 'Dance4life'
})
var posts = []
let repo = gh.getRepo('davidroyer', 'hugo-cms')

// repo.getContents('master', 'site/content/post', false, (err, sitePosts) => {
//   posts = sitePosts
// })

export default {
    site: {
      posts: []
    },
    getPosts: function() {
      let Site = this.site
      repo.getContents('master', 'site/content/post', false, (err, sitePosts) => {
        Site.posts = sitePosts
      })
    }
}
