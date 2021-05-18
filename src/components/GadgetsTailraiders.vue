<template>
  <div class="container gear-container">
    <BodyHeader
    :title="title"
    :clearedItems="clearedItems"
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" />
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
    if (localStorage.getItem('gadgetsTailraiders'))
      this.clearedItems = JSON.parse(localStorage.getItem('gadgetsTailraiders'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems() {
      localStorage.setItem('gadgetsTailraiders', JSON.stringify(this.clearedItems))
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