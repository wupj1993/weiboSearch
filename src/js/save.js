/**
 * Author: wupj on 2017/3/12.
 * Email:wpjlovehome@gmail.com
 *
 */
const STORAGE_KEY = 'todos-vuejs'
export default{
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY))
  },
  save: function (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}
