<template>
  <div class="container gear-container">
    <BodyHeader
    :title="title"
    :clearedItems="clearedItems"
    :progressCounter="progressCounter"
    :maxProgressCount="maxProgressCount" />
    <table id="gear-table">
      <thead>
        <tr>
          <th>Crafted</th>
          <th v-if="this.$route.path.includes('/armor')">Upgraded</th>
          <th v-if="!this.$route.path.includes('/charms')">Decorated</th>
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
          <td v-if="this.$route.path.includes('/charms')">
            <input type="checkbox" 
            :id='`${item.name}`' 
            :value="`${item.name}`" 
            v-model="clearedItems"
            @change="onChange" />
          </td>
          <td v-else>
            <input type="checkbox" 
            :id='`${item.name}`' 
            :value="`${item.name}`" 
            v-model="clearedItems"
            @click="toggleCrafting(item.name)" />
          </td>
          <td v-if="this.$route.path.includes('/armor')">
            <input type="checkbox" 
            :id="`${item.name}` + ' upgraded'"
            :value="`${item.name}` + ' upgraded'" 
            v-model="fullyUpgraded"
            @click="toggleUpgrades(item.name + ' upgraded')"
            disabled/>
          </td>
          <td v-if="!this.$route.path.includes('/charms')">
            <input type="checkbox" 
            :id="`${item.name}` + ' deco'"
            :value="`${item.name}` + ' deco'" 
            v-model="setDecos"
            @change="onChange" 
            @click="toggleDecos(item.name + ' deco')"
            disabled/>
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
      clearedItems: [],
      setDecos: [],
      fullyUpgraded: []
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
    if (localStorage.getItem('craftedGear'))
      this.clearedItems = JSON.parse(localStorage.getItem('craftedGear'))
    if (localStorage.getItem('setDecos'))
      this.setDecos = JSON.parse(localStorage.getItem('setDecos'))
    if (localStorage.getItem('fullyUpgraded'))
      this.fullyUpgraded = JSON.parse(localStorage.getItem('fullyUpgraded'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems() {
      localStorage.setItem('craftedGear', JSON.stringify(this.clearedItems))
    },
    setDecos() {
      localStorage.setItem('setDecos', JSON.stringify(this.setDecos))
    },
    fullyUpgraded() {
      localStorage.setItem('fullyUpgraded', JSON.stringify(this.fullyUpgraded))
    },
    // - watches change in 'title' variable when changing sub nav
    // - used to update default checkbox behavior by toggling the 'disabled' attribute
    // - changes function based on current path
    title() {
      if (!this.$route.path.includes('/charms')) {
        setTimeout(function () {
          for (var i = 0; i < this.clearedItems.length; i++) {
            var el = document.getElementById(this.clearedItems[i])
            if (el != null && !this.$route.path.includes('/armor'))
              el.parentNode.nextSibling.nextSibling.children[0].disabled = false;
            else if (el != null && this.$route.path.includes('/armor'))
              el.parentNode.nextSibling.children[0].disabled = false;
          };
          if (this.$route.path.includes('/armor')) {
            for (var i = 0; i < this.fullyUpgraded.length; i++) {
              var el = document.getElementById(this.fullyUpgraded[i])
              if (el != null) {
                el.disabled = false;
                el.parentNode.previousSibling.children[0].disabled = true;
                el.parentNode.nextSibling.children[0].disabled = false;
              }
            }
          };
          for (var i = 0; i < this.setDecos.length; i++) {
            var el = document.getElementById(this.setDecos[i])
            if (el != null) {
              el.disabled = false;
              el.parentNode.previousSibling.previousSibling.children[0].disabled = true;
              if (this.$route.path.includes('/armor'))
                el.parentNode.previousSibling.children[0].disabled = true;
            }
          };
        }.bind(this))
      }
    }
  },
  methods: {
    // update progress counter on checkbox value change 
    onChange(e) {
      if (e.target.checked)
        this.$emit('increase', e)
      else
        this.$emit('decrease', e)
    },
    toggleCrafting(e) {
      var x = this.$route.path
      setTimeout(function () {
        if (x.includes('/armor'))
          var el = document.getElementById(e).parentNode.nextSibling.children[0]
        else
          var el = document.getElementById(e).parentNode.nextSibling.nextSibling.children[0]

        if (document.getElementById(e).checked)
          el.disabled = false;
        else if (!document.getElementById(e).checked)
          el.disabled = true;

        el.checked = false;
      }, 0)
    },
    toggleDecos(e) {
      var x = this.$route.path
      setTimeout(function () {
        if (x.includes('/armor'))
          var el = document.getElementById(e).parentNode.previousSibling.children[0]
        else
          var el = document.getElementById(e).parentNode.previousSibling.previousSibling.children[0]

        if (document.getElementById(e).checked)
          el.disabled = true;
        else if (!document.getElementById(e).checked)
          el.disabled = false;

      }, 0)
    },
    toggleUpgrades(e) {
      setTimeout(function () {
        var el = document.getElementById(e)
        if (el.checked) {
          el.parentNode.previousSibling.children[0].disabled = true;
          el.parentNode.nextSibling.children[0].disabled = false;
        } else if (!el.checked) {
          el.parentNode.previousSibling.children[0].disabled = false;
          el.parentNode.nextSibling.children[0].disabled = true;
        }
      }, 0)
    }
  }
}
</script>

<style>
.gear-container {
  background: #1f1f1f;
  margin-top: 30px;
}
.gear-header {
  display: flow-root;
  margin-bottom: 5px;
}
.sub-nav {
  padding: 25px 35px;
  background: #262626;
}
.sub-nav a {
  letter-spacing: 2px;
  line-height: 30px;
  color: #ffffff;
}
input {
  transform: scale(1.6);
}
label {
  padding-left: 8px;
}
.sort-gear {
  float: left;
}
.gear-progress {
  float: right;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border-radius: 10px;
  font-size: 14px;
  border: 2px solid var(--main-table-border-color);
}
th, td {
  padding: 7px 5px;
  border-top: 2px solid var(--main-table-border-color);
  border-bottom: 2px solid var(--main-table-border-color);
}
th {
  color: #e67068;
}
h1, 
tbody td:nth-child(2),
td:first-child {
  text-align: center;
}
td:nth-child(2) {
  color: #6efeff;
}
td:nth-child(2n + 3),
th:nth-child(2n + 3){
  text-align: right;
  border-left: 2px solid var(--main-table-border-color);
}
td:nth-child(2n + 4),
th:nth-child(2n + 4){
  width: 30px;
}
tbody tr:nth-child(even) {
  background: #313131;
}
tbody tr:nth-child(odd) {
  background: #1b1b1b;
}
</style>