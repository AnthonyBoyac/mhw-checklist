<!-- 
* Purpose:   keep track of each progress from 'MainGear.vue' list items, thus giving
*            users a better view of their progress on each gear pieces
* Location:  'MainGear.vue' in 'Home' sub-navigation in each respective paths using
*            the component
-->
<template>
  <div class="container gear-container">
    <ul class="pro_track-list">
      <li v-for="(item, index) in maxProgress" :key="index">
        <img :src="this.progressImg[index]" :alt="this.progressTitle[index] + ` image `" :title="this.progressTitle[index]"/> 
        <span>&nbsp;{{this.soloMaxProgress[index]}}/{{this.maxProgress[index]}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    gearUrls: Object,
    updateData: Boolean
  },
  data() {
    return {
      maxProgress: [],
      progressImg: [],
      progressTitle: [],
      soloMaxProgress: [],
      maxProgressMultiplier: 1
    }
  },
  mounted() {
    return this.fetchData()
  },
  watch: {
    $route() {
      // update 'home' nav from 'MainGear' component when switching paths between that component
      if (!this.$route.path.includes('/home'))
      this.fetchData()
    },
    updateData() {
      // update progress bar when arriving from stated paths above
      if (this.updateData == true)
      this.fetchData()
    }
  },
  methods: {
    // fetches data from each json files in 'MainGear.vue' to display the length of each file's
    // objects, and retrieving (if existing) local storage of current progress
    fetchData() {
      // reset data to stop duplicates
      this.maxProgress = []
      this.progressImg = []
      var fetchArr
      this.maxProgressMultiplier = 1
      if (this.$route.path.includes('/weapons')) {
        fetchArr = this.gearUrls.weapons
      } else if (this.$route.path.includes('/armor')) {
        fetchArr = this.gearUrls.armor
      } else if (this.$route.path.includes('/charms')) {
        fetchArr = this.gearUrls.charms
      } else if (this.$route.path.includes('/decorations')) {
        fetchArr = this.gearUrls.decorations
      } else if (this.$route.path.includes('/specialized-tools')) {
        fetchArr = this.gearUrls.tools
      } else if (this.$route.path.includes('palico-gear')) {
        fetchArr = this.gearUrls.palico
      } else if (this.$route.path.includes('/crowns')) {
        fetchArr = this.gearUrls.crowns
        this.maxProgressMultiplier = 2
      } else if (this.$route.path.includes('research')) {
        fetchArr = this.gearUrls.research
      }
      fetchArr.forEach((data, index) =>
        fetch(data.url)
        .then(response => response.json())
        .then(res => {
          this.maxProgress[index] = res.length * this.maxProgressMultiplier
          this.progressTitle[index] = data.title
          this.progressImg[index] = data.img
          if (localStorage.getItem(data.title + ' count') == null)
            this.soloMaxProgress[index] = 0
          else
            this.soloMaxProgress[index] = localStorage.getItem(data.title + ' count')
        }))
    }
  }
}
</script>

<style>
.pro_track-list {
  column-count: 2;
  list-style: none;
}
.pro_track-list span {
  font-size: 20px;
  vertical-align: super;
}
</style>