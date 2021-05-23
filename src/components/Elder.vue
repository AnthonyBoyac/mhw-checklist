<template>
  <div class="container gear-container">
    <BodyHeader 
    :title="title" 
    :clearedItems="clearedItems" 
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" />
    <table id="elder-table" >
      <thead>
        <tr>
          <th>Completed</th>
          <th>Name</th>
          <th>Unlock Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in theItems" :key="item.name">
          <td>
            <input type="checkbox" 
            :id="item.name"
            :value="item.name"
            v-model="clearedItems"
            @change="onChange"
            />
          </td>
          <td>{{item.name}}</td>
          <td>{{item.unlock_condition}}</td>
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
  el: 'container',
  data() {
    return {
      clearedItems: []
    }
  },
  props: {
    title: String,
    theItems: Array,
    progressCounter: Number,
    maxProgressCount: Number
  },
  mounted() {
    if (localStorage.getItem('unlockedElderItems'))
      this.clearedItems = JSON.parse(localStorage.getItem('unlockedElderItems'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems: {
      handler() {
        localStorage.setItem('unlockedElderItems', JSON.stringify(this.clearedItems))
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

<style>

</style>