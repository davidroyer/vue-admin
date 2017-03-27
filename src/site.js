// export const test = {
//
// }
import GitHub from 'github-api'
import _ from 'lodash'

var gh = new GitHub({
  username: 'davidroyer',
  password: 'Dance4life'
})
let repo = gh.getRepo('davidroyer', 'hugo-cms')

export const SITE = gh
export const REPO = gh.getRepo('davidroyer', 'hugo-cms')
  // var gh = new GitHub({
  //   username: 'davidroyer',
  //   password: 'Dance4life'
  // })
