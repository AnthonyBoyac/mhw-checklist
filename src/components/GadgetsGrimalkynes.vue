<template>
  <div class="container gear-container">
    <BodyHeader
    :title="title"
    :clearedItems="clearedItems"
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" 
    tableDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    progressName="Fully leveled" />
    <table id="palico_gear-table">
      <thead>
        <tr>
          <th>Fully Leveled</th>
          <th>Max Level</th>
          <th>Name</th>
          <th>Unlock Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.theItems" :key="item.name">
          <td>
            <input type="checkbox" 
            :id='`${item.name}`' 
            :value="`${item.name}`" 
            v-model="clearedItems"
            @change="onChange" />
          </td>
          <td v-if="item.maxLevel == null">none</td><td v-else>{{item.maxLevel}}</td>
          <td>{{item.name}}</td>
          <td>{{item.unlockCondition}} 
            <a target="_blank" :href="`${item.unlockConditionLink}`" rel="noopener">here</a>
          </td>
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
    // get local storage items for each data variable to display 
    // what has been checked off from the checkboxes inputs
    if (localStorage.getItem('gadgetsGrimalkyne'))
      this.clearedItems = JSON.parse(localStorage.getItem('gadgetsGrimalkyne'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems() {
      localStorage.setItem('gadgetsGrimalkyne', JSON.stringify(this.clearedItems))
    }
  },
  methods: {
    // update progress counter on checkbox value change 
    onChange(e) {
      if (e.target.checked)
        this.$emit('increase', e)
      else
        this.$emit('decrease', e)
    }
  }
}
</script>