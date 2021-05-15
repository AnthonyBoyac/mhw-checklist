<template>
  <div class="container gear-container">
    <BodyHeader 
    :title="title" 
    :clearedItems="clearedItems" 
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" />
    <table id="crowns-table">
      <thead>
        <tr>
          <th>Small Crown</th>
          <th>Monster Name</th>
          <th>Big Crown</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in theItems" :key="item.name">
          <td>
            <input type="checkbox" 
            :id="item.name + ' sc'"
            :value="item.name + ' sc'"
            v-model="clearedItems"
            />
          </td>
          <td>{{item.name}}</td>
          <td>
            <input type="checkbox"
            :id="item.name + ' bc'"
            :value="item.name + ' bc'"
            v-model="clearedItems">
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
  }
}
</script>