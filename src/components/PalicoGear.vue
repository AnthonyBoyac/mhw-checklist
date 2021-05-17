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
          <th>Crafted</th>
          <th>Name</th>
          <th>Material 1</th>
          <th></th>
          <th>Material 2</th>
          <th></th>
          <th>Material 3</th>
          <th></th>
          <th>Material 4</th>
          <th></th>
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
          <td>{{item.name}}</td>
          <td>{{item.item1_name}}</td>
          <td><span v-if="`${item.item1_qty}` > 0">x </span>{{item.item1_qty}}</td>
          <td>{{item.item2_name}}</td>
          <td><span v-if="`${item.item2_qty}` > 0">x </span>{{item.item2_qty}}</td>
          <td>{{item.item3_name}}</td>
          <td><span v-if="`${item.item3_qty}` > 0">x </span>{{item.item3_qty}}</td>
          <td>{{item.item4_name}}</td>
          <td><span v-if="`${item.item4_qty}` > 0">x </span>{{item.item4_qty}}</td>
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
    if (localStorage.getItem('craftedPalicoGear'))
      this.clearedItems = JSON.parse(localStorage.getItem('craftedPalicoGear'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems() {
      localStorage.setItem('craftedPalicoGear', JSON.stringify(this.clearedItems))
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