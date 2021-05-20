<template>
  <div class="container gear-container">
    <BodyHeader 
    :title="title" 
    :clearedItems="clearedItems" 
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" />
    <table id="quests-table" v-for="item in theItems" :key="item.name">
      <thead>
        <tr>
          <th>Completed</th>
          <th>{{item.name}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="quests in item.quests" :key="quests.quest_title">
          <td>
            <input type="checkbox" 
            :id="quests.quest_title"
            :value="quests.quest_title"
            v-model="clearedItems"
            @change="onChange"
            />
          </td>
          <td>{{quests.quest_title}}</td>
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
    if (localStorage.getItem('completedQuests'))
      this.clearedItems = JSON.parse(localStorage.getItem('completedQuests'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems: {
      handler() {
        localStorage.setItem('completedQuests', JSON.stringify(this.clearedItems))
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