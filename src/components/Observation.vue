<template>
  <div class="container gear-container">
    <BodyHeader 
    :title="title" 
    :clearedItems="clearedItems" 
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" 
    tableDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    progressName="Completed observations" />
    <table id="observation-table">
      <thead>
        <tr>
          <th>Completed</th>
          <th>Log #</th>
          <th>Log Name</th>
          <th>Location</th>
          <th>Weather Condition</th>
          <th>Completion Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in theItems" :key="item.logNum">
          <td>
            <input type="checkbox" 
            :id="item.logNum"
            :value="item.logNum"
            v-model="clearedItems"
            @change="onChange"
            />
          </td>
          <td>{{item.logNum}}</td>
          <td>{{item.logName}}</td>
          <td>{{item.location}}</td>
          <td>{{item.weatherCondition}}</td>
          <td>
            <li v-for="conditions in item.completionConditions" :key="conditions">
            {{conditions}}
            </li>
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
    if (localStorage.getItem('completedObsLog'))
      this.clearedItems = JSON.parse(localStorage.getItem('completedObsLog'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems: {
      handler() {
        localStorage.setItem('completedObsLog', JSON.stringify(this.clearedItems))
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