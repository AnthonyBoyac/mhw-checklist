<template>
  <div class="container gear-container">
    <BodyHeader 
    :title="title" 
    :clearedItems="clearedItems" 
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" />
    <table id="pendant-table">
      <thead>
        <tr>
          <th>Unlocked Pendant</th>
          <th>Pendant Name</th>
          <th>Unlock Condition</th>
          <th>Mat 1</th>
          <th>Qty 1</th>
          <th>Mat 2</th>
          <th>Qty 2</th>
          <th>Mat 3</th>
          <th>Qty 3</th>
          <th>Mat 4</th>
          <th>Qty 4</th>
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
          <td>{{item.item1_name}}</td>
          <td>{{item.item1_qty}}</td>
          <td>{{item.item2_name}}</td>
          <td>{{item.item2_qty}}</td>
          <td>{{item.item3_name}}</td>
          <td>{{item.item3_qty}}</td>
          <td>{{item.item4_name}}</td>
          <td>{{item.item4_qty}}</td>
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
    if (localStorage.getItem('completedPendants'))
      this.clearedItems = JSON.parse(localStorage.getItem('completedPendants'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems: {
      handler() {
        localStorage.setItem('completedPendants', JSON.stringify(this.clearedItems))
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