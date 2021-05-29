<template>
  <div class="container gear-container">
    <BodyHeader 
    :title="title" 
    :clearedItems="bothCrownsChecked" 
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" 
    tableDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    progressName="Unlocked gold crown" />
    <table id="crowns-table">
      <thead>
        <tr>
          <th>Small Crown</th>
          <th>Small Size</th>
          <th>Monster Name</th>
          <th>Big Size</th>
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
            @change="onChange"
            />
          </td>
          <td>&#8804;{{item.smallSize}}</td>
          <td>{{item.name}}</td>
          <td>{{item.bigSize}}&#8804;</td>
          <td>
            <input type="checkbox"
            :id="item.name + ' bc'"
            :value="item.name + ' bc'"
            v-model="clearedItems"
            @change="onChange">
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
      clearedItems: [],
      bothCrownsChecked: []
    }
  },
  props: {
    title: String,
    theItems: Array,
    progressCounter: Number,
    maxProgressCount: Number
  },
  mounted() {
    if (localStorage.getItem('monstersCrowns'))
      this.clearedItems = JSON.parse(localStorage.getItem('monstersCrowns'))
    if (localStorage.getItem('bothCrownsCleared'))
      this.bothCrownsChecked = JSON.parse(localStorage.getItem('bothCrownsCleared'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems: {
      handler() {
        localStorage.setItem('monstersCrowns', JSON.stringify(this.clearedItems))
      }
    }
  },
  methods: {
    // update progress counter on checkbox value change 
    onChange(e) {
      var el;
      if (e.target.id.includes('sc'))
        el = e.target.id.replace(' sc', ' bc')
      else if (e.target.id.includes('bc'))
        el = e.target.id.replace(' bc', ' sc')

      if (e.target.checked) {
        var localArr = JSON.parse(localStorage.getItem('monstersCrowns'))
        for (var i = 0; i < localArr.length; i++) {
          if (el == localArr[i]) {
            this.bothCrownsChecked.push(e.target.id)
            localStorage.setItem("bothCrownsCleared", JSON.stringify(this.bothCrownsChecked))
            break;
          }
        }
        this.$emit('increase', e)
      } else {
        var localArr = JSON.parse(localStorage.getItem('bothCrownsCleared'))
        for (var i = 0; i < localArr.length; i++) {
          if (localArr[i] == e.target.id || localArr[i] == el) {
            this.bothCrownsChecked.splice(i, 1)
            localStorage.setItem("bothCrownsCleared", JSON.stringify(this.bothCrownsChecked))
            break;
          }
        }
        this.$emit('decrease', e)
      }
    }
  }
}
</script>

<style>
.sub-nav,
.gear-container {
  max-width: 1000px;
}
td:first-child,
td:last-child {
  width: 100px;
}
td:nth-child(2) {
  width: 250px;
}
th:nth-child(3),
td:nth-child(3) {
  text-align: center;
}
th:nth-child(4),
td:nth-child(4) {
  border-left: 2px solid var(--main-table-border-color);
  width: 0;
}
th:last-child,
td:last-child {
  border-left: none;
  text-align: center;
}
</style>