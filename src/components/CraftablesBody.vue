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
          <th v-if="!this.$route.path.includes('/charms')">Decorations</th>
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
        <tr v-for="(item, index) in this.theItems" :key="index">
          <td>
            <input type="checkbox" 
            :id='`${item.name}`' 
            :value="`${item.name}`" 
            v-model="clearedItems"
            @click="enableCheckbox(item.name)" />
          </td>
          <td v-if="!this.$route.path.includes('/charms')">
            <input type="checkbox" 
            :id="`${item.name}` + 'decos'"
            :value="`${item.name}` + 'decos'" 
            v-model="setDecos"
            @change="onChange" disabled/>
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
    if (localStorage.getItem('craftedGear'))
      this.clearedItems = JSON.parse(localStorage.getItem('craftedGear'))
    if (localStorage.getItem('setDecos'))
      this.setDecos = JSON.parse(localStorage.getItem('setDecos'))
  },
  watch: {
    // add/remove list item in/from local storage depending whether the checkox is checked or not
    clearedItems: {
      handler() {
        localStorage.setItem('craftedGear', JSON.stringify(this.clearedItems))
      }
    },
    setDecos: {
      handler() {
        localStorage.setItem('setDecos', JSON.stringify(this.setDecos))
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
    },
    enableCheckbox(e) {
      console.log(document.getElementById(e).parentNode.nextSibling.children[0])
      document.getElementById(e).parentNode.nextSibling.children[0].disabled = false;
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
  border: 2px solid #6d6d6d;
}
th, td {
  padding: 7px 5px;
  border-top: 2px solid #6d6d6d;
  border-bottom: 2px solid #6d6d6d;
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
  border-left: 2px solid #6d6d6d;
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