<template>
  <div class="container gear-container">
    <BodyHeader
    :title="title"
    :clearedItems="clearedItems"
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" 
    tableDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    progressName="Received deco"/>
    <table id="decos-table">
      <thead>
        <tr>
          <th>Received</th>
          <th>Name</th>
          <th>Mysterious</th>
          <th>Glowing</th>
          <th>Worn</th>
          <th>Warped</th>
          <th>Ancient</th>
          <th>Carved</th>
          <th>Sealed</th>
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
          <td>{{item.mysterious}}<span v-if="`${item.mysterious}` > 0">%</span></td>
          <td>{{item.glowing}}<span v-if="`${item.glowing}` > 0">%</span></td>
          <td>{{item.worn}}<span v-if="`${item.worn}` > 0">%</span></td>
          <td>{{item.warped}}<span v-if="`${item.warped}` > 0">%</span></td>
          <td>{{item.ancient}}<span v-if="`${item.ancient}` > 0">%</span></td>
          <td>{{item.carved}}<span v-if="`${item.carved}` > 0">%</span></td>
          <td>{{item.sealed}}<span v-if="`${item.sealed}` > 0">%</span></td>
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
    if (localStorage.getItem('unlockedDecos'))
      this.clearedItems = JSON.parse(localStorage.getItem('unlockedDecos'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems: {
      handler() {
        localStorage.setItem('unlockedDecos', JSON.stringify(this.clearedItems))
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
#decos-table th:nth-child(even),
#decos-table td:nth-child(even) {
  border-left: 2px solid var(--main-table-border-color);
}
#decos-table th:nth-child(2n + 3),
#decos-table td:nth-child(2n + 3) {
  text-align: center;
}
#decos-table th:nth-child(n + 3),
#decos-table td:nth-child(n + 3) {
  width: 100px
}
</style>