<template>
  <div class="container gear-container">
    <BodyHeader
    :title="title"
    :clearedItems="clearedItems"
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" />
    <table id="tools-table">
      <thead>
        <tr>
          <th>Crafted</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.theItems" :key="index">
          <td>
            <input type="checkbox" 
            :id='`${item.name}`' 
            :value="`${item.name}`" 
            v-model="clearedItems"
            @change="onChange" />
          </td>
          <td>{{item.name}}</td>
          <td>{{item.description}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import BodyHeader from '@/components/BodyHeader'
export default {
  components: {
    BodyHeader
  },
  el: '.container',
  data() {
    return {
      clearedItems: []
    }
  },
  props: {
    title: String,
    theItems: Array,
    maxProgressCount: Number,
    progressCounter: Number
  },
  mounted() {
    if (localStorage.getItem('unlockedTools'))
      this.clearedItems = JSON.parse(localStorage.getItem('unlockedTools'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems: {
      handler() {
        localStorage.setItem('unlockedTools', JSON.stringify(this.clearedItems))
      }
    }
  },
  methods: {

    // update progress counter on checkbox value change 
    onChange(e) {
      if (e.target.checked) {
        this.$emit('increase', e)
      } else {
        this.$emit('decrease', e)
      }
    }
  }
}
</script>

