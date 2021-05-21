<template>
  <div class="container gear-container">
    <BodyHeader 
    :title="title" 
    :clearedItems="clearedItems" 
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" />
    <table id="crafting-table">
      <thead>
        <tr>
          <th>Unlocked Crafting</th>
          <th>Crafting Item Name</th>
          <th></th>
          <th>Material 1</th>
          <th></th>
          <th>Material 2</th>
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
          <td>=</td>
          <td>{{item.item1_name}}</td>
          <td>+</td>
          <td>{{item.item2_name}}</td>
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
    if (localStorage.getItem('unlockedCrafting'))
      this.clearedItems = JSON.parse(localStorage.getItem('unlockedCrafting'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems: {
      handler() {
        localStorage.setItem('unlockedCrafting', JSON.stringify(this.clearedItems))
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