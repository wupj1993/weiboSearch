<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2 v-text="subTitle"></h2>
    <input v-model="newItem" @keyup.enter="addNew">
    <ul>
      <li @click="finishTodo(item)" v-for="item in items" :class="{finished:item.isFinished}">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
  import Store from '../js/save.js'
  export default {
    data: function () {
      return {
        title: '这是一个Todo 列表',
        subTitle: 'By wupj',
        items: Store.fetch(),
        newItem: ''
      }
    },
    methods: {
      finishTodo: function (item) {
        item.isFinished = !item.isFinished
      },
      addNew: function () {
        this.items.push({label: this.newItem, isFinished: false})
        Store.save(this.newItem)
        this.newItem = ''
      }
    },
    watch: {
      items: {
        handler: function (val, oldval) {
          Store.save(val)
        },
        deep: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .finished {
    text-decoration: underline;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  /*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
  /*}*/

  a {
    color: #42b983;
  }
</style>
