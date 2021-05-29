<template>
  <div class="container gear-container">
    <BodyHeader
    :title="title"
    :clearedItems="clearedItems"
    :setDecos="setDecos"
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" 
    tableDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    progressName="Decorated tools" />
    <table id="tools-table">
      <thead>
        <tr>
          <th>Unlocked</th>
          <th>Decorated</th>
          <th>Name</th>
          <th>How to unlock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.theItems" :key="item.name">
          <td>
            <input type="checkbox" 
            :id="`${item.name}`"
            :value="`${item.name}`" 
            v-model="clearedItems"
            @click="toggleCrafting(item.name)" />
          </td>
          <td>
            <input type="checkbox" 
            :id="`${item.name}` + ' tools'" 
            :value="`${item.name}` + ' tools'" 
            v-model="setDecos"
            @change="onChange" 
            @click="toggleDecos(item.name + ' tools')"
            disabled/>
          </td>
          <td>{{item.name}}</td>
          <td>Start video at <a :href="`${item.videoStartTime}`">here</a></td>
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
      clearedItems: [],
      setDecos: []
    }
  },
  props: {
    title: String,
    theItems: Array,
    maxProgressCount: Number,
    progressCounter: Number
  },
  mounted() {
    if (localStorage.getItem('unlockedTools'))
      this.clearedItems = JSON.parse(localStorage.getItem('unlockedTools'))
    if (localStorage.getItem('setDecos'))
      this.setDecos = JSON.parse(localStorage.getItem('setDecos'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems() {
      localStorage.setItem('unlockedTools', JSON.stringify(this.clearedItems))
    },
    setDecos() {
      localStorage.setItem('setDecos', JSON.stringify(this.setDecos))
    },
    maxProgressCount() {
      setTimeout(function () {
        for (var i = 0; i < this.clearedItems.length; i++) {
          var el = document.getElementById(this.clearedItems[i])
          if (el != null)
            el.parentNode.nextSibling.children[0].disabled = false;
        };
        for (var i = 0; i < this.setDecos.length; i++) {
          var el = document.getElementById(this.setDecos[i])
          if (el != null)
            el.parentNode.previousSibling.children[0].disabled = true;
        };
      }.bind(this))
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
    },
    toggleCrafting(e) {
      setTimeout(function () {
        var el = document.getElementById(e).parentNode.nextSibling.children[0]
        if (document.getElementById(e).checked)
          el.disabled = false;
        else if (!document.getElementById(e).checked)
          el.disabled = true;
      }, 0)
    },
    toggleDecos(e) {
      setTimeout(function () {
        var el = document.getElementById(e).parentNode.previousSibling.children[0]
        if (document.getElementById(e).checked)
          el.disabled = true;
        else if (!document.getElementById(e).checked)
          el.disabled = false;
      }, 0)
    }
  }
}
</script>

<style>
#tools-table td:nth-child(4),
#tools-table th:nth-child(4) {
  width: 0;
}
#tools-table th,
#tools-table td {
  border-left: 2px solid var(--main-table-border-color);
}
#tools-table th:nth-child(1),
#tools-table td:nth-child(2),
#tools-table th:nth-child(1),
#tools-table td:nth-child(2) {
  width: 70px;
}

#tools-table th:nth-child(3),
#tools-table td:nth-child(3) {
  text-align: center;
}

</style>
