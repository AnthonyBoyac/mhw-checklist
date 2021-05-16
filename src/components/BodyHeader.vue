<template>
  <h1>Complete your {{this.title}} collection</h1>
  <div class="gear-header">
    <div class="sort-gear">
      <input type="checkbox" id="checkbox-filter" @click=checkFilter()>
      <label for="completed">Hide crafted gear</label>
    </div>
    <div class="gear-progress">
      <span>
        Crafted gear: <span v-if="this.progressCounter == null">0</span>
        {{this.progressCounter}} / {{this.maxProgressCount}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clearedItems: Array,
    setDecos: Array,
    progressCounter: Number,
    maxProgressCount: Number,
    title: String
  },
  methods: {
    checkFilter() {
      // hide/display checked gear
      var currentArr = ''
      if (this.$route.path.includes('armor') 
      || this.$route.path.includes('weapon')
      || this.$route.path.includes('tools'))
        currentArr = this.setDecos
      else
        currentArr = this.clearedItems
      console.log(currentArr)
      var compGearChecked = document.getElementById("checkbox-filter");
      if (compGearChecked.checked) {
        for (var i = 0; i < currentArr.length; i++) {
          // only checks data from current view
          if (document.getElementById(currentArr[i]) != null)
            document.getElementById(currentArr[i]).parentNode.parentNode.style.display = "none";
        }
      } else {
        for (var i = 0; i < currentArr.length; i++) {
          if (document.getElementById(currentArr[i]) != null)
            document.getElementById(currentArr[i]).parentNode.parentNode.style.display = "revert";
        }
      }
    },
  }
}
</script>