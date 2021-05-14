<template>
  <h1>Complete your {{this.title}} collection</h1>
  <div class="gear-header">
    <div class="sort-gear">
      <input type="checkbox" id="checkbox-filter" @click=checkFilter()>
      <label for="crafted-gear">Hide crafted gear</label>
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
    progressCounter: Number,
    maxProgressCount: Number,
    title: String
  },
  methods: {
    checkFilter() {
      // hide/display checked gear
      var compGearChecked = document.getElementById("checkbox-filter");
      if (compGearChecked.checked) {
        for (var i = 0; i < this.clearedItems.length; i++) {
          // only checks data from current view
          if (document.getElementById(this.clearedItems[i]) != null)
            document.getElementById(this.clearedItems[i]).parentNode.parentNode.style.display = "none";
        }
      } else {
        for (var i = 0; i < this.clearedItems.length; i++) {
          if (document.getElementById(this.clearedItems[i]) != null)
            document.getElementById(this.clearedItems[i]).parentNode.parentNode.style.display = "revert";
        }
      }
    },
  }
}
</script>