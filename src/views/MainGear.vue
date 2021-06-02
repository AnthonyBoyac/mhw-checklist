<template>
  <div class="container sub-nav" id="weapons-container">
    <div class="sub-nav-home" @click="homeView()">Home</div>
    <ul v-if="`${currentPath}`.includes('weapons')">
      <li v-for="(url, index) in urls.weapons" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('armor')">
      <li v-for="(url, index) in urls.armor" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('decorations')">
      <li v-for="(url, index) in urls.decorations" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('charms')">
      <li v-for="(url, index) in urls.charms" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('specialized-tools')">
      <li v-for="(url, index) in urls.tools" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('palico-gear')">
      <li v-for="(url, index) in urls.palico" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('gadgets-grimalkyne')">
      <li v-for="(url, index) in urls.gadget_grimalkyne" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('pendant')">
      <li v-for="(url, index) in urls.pendants" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('crowns')">
      <li v-for="(url, index) in urls.crowns" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('research')">
      <li v-for="(url, index) in urls.research" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('quest')">
      <li v-for="(url, index) in urls.quests" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('deliveries')">
      <li v-for="(url, index) in urls.deliveries" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('crafting')">
      <li v-for="(url, index) in urls.crafting" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('elder')">
      <li v-for="(url, index) in urls.elder" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('room')">
      <li v-for="(url, index) in urls.room" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
    <ul v-else-if="`${currentPath}`.includes('observation')">
      <li v-for="(url, index) in urls.observation" :key="index">
        <span @click="navChange(url.url, url.title)">{{ url.title }}</span>
      </li>
    </ul>
  </div>
  <div :class="{ 'toggle-components': !isHome }">
    <ProgressTracker 
    :gearUrls="urls" 
    :updateData="updateData" />
  </div>
  <div v-if="`${currentPath}`.includes('decorations')">
    <div :class="{ 'toggle-components': isHome }">
      <Decorations 
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else-if="`${currentPath}`.includes('specialized-tools')">
    <div :class="{ 'toggle-components': isHome }">
      <Tools 
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else-if="`${currentPath}`.includes('palico-gear')">
    <div :class="{ 'toggle-components': isHome }">
      <PalicoGear 
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else-if="`${currentPath}`.includes('gadgets-grimalkyne')">
    <div :class="{ 'toggle-components': isHome }">
      <GadgetsGrimalkynes
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else-if="`${currentPath}`.includes('pendant')">
    <div :class="{ 'toggle-components': isHome }">
      <Pendants
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else-if="`${currentPath}`.includes('crowns')">
    <div :class="{ 'toggle-components': isHome }">
      <Crowns 
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress * 2" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else-if="`${currentPath}`.includes('research')">
    <div :class="{ 'toggle-components': isHome }">
      <Research 
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else-if="`${currentPath}`.includes('quest')">
    <div :class="{ 'toggle-components': isHome }">
      <Quests 
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else-if="`${currentPath}`.includes('deliveries')">
    <div :class="{ 'toggle-components': isHome }">
      <Deliveries 
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else-if="`${currentPath}`.includes('crafting')">
    <div :class="{ 'toggle-components': isHome }">
      <Crafting 
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else-if="`${currentPath}`.includes('elder')">
    <div :class="{ 'toggle-components': isHome }">
      <Elder 
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else-if="`${currentPath}`.includes('room')">
    <div :class="{ 'toggle-components': isHome }">
      <Room 
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else-if="`${currentPath}`.includes('observation')">
    <div :class="{ 'toggle-components': isHome }">
      <Observation 
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress" 
      :progressCounter="progress"
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
  <div v-else>
    <div :class="{ 'toggle-components': isHome }">
      <CraftablesBody 
      :title="currentTitle" 
      :theItems="items" 
      :maxProgressCount="maxProgress"
      :progressCounter="progress" 
      @increase="increaseProgress" 
      @decrease="decreaseProgress" />
    </div>
  </div>
</template>

<script>
import ProgressTracker from '@/components/ProgressTracker'
import CraftablesBody from '@/components/CraftablesBody'
import Decorations from '@/components/Decorations'
import Tools from '@/components/Tools'
import PalicoGear from '@/components/PalicoGear'
import Crowns from '@/components/Crowns'
import Research from '@/components/Research'
import GadgetsGrimalkynes from '@/components/GadgetsGrimalkynes'
import Quests from '@/components/Quests'
import Deliveries from '@/components/Deliveries'
import Pendants from '@/components/Pendants'
import Crafting from '@/components/Crafting'
import Elder from '@/components/Elder'
import Room from '@/components/Room'
import Observation from '@/components/Observation'

export default {
  components: {
    ProgressTracker,
    CraftablesBody,
    Decorations,
    Tools,
    Crowns,
    Research,
    PalicoGear,
    GadgetsGrimalkynes,
    Quests,
    Deliveries,
    Pendants,
    Crafting,
    Elder,
    Room,
    Observation
  },
  data() {
    return {
      urls: {
        weapons: [
          { url: '/storage/weapons/bows.json', title: 'Bow', img: require('../assets/icons/Bow.png') },
          { url: '/storage/weapons/charge_blades.json', title: 'Charge Blade', img: require('../assets/icons/Charge_Blade.png') },
          { url: '/storage/weapons/dual_blades.json', title: 'Dual Blades', img: require('../assets/icons/Dual_Blades.png') },
          { url: '/storage/weapons/great_swords.json', title: 'Great Sword', img: require('../assets/icons/Great_Sword.png') },
          { url: '/storage/weapons/gunlances.json', title: 'Gunlance', img: require('../assets/icons/Gunlance.png') },
          { url: '/storage/weapons/hammers.json', title: 'Hammer', img: require('../assets/icons/Hammer.png') },
          { url: '/storage/weapons/heavy_bowguns.json', title: 'Heavy Bowgun', img: require('../assets/icons/Heavy_Bowgun.png') },
          { url: '/storage/weapons/hunting_horns.json', title: 'Hunting Horn', img: require('../assets/icons/Hunting_Horn.png') },
          { url: '/storage/weapons/insect_glaives.json', title: 'Insect Glaive', img: require('../assets/icons/Insect_Glaive.png') },
          { url: '/storage/weapons/lances.json', title: 'Lance', img: require('../assets/icons/Lance.png') },
          { url: '/storage/weapons/light_bowguns.json', title: 'Light Bowgun', img: require('../assets/icons/Light_Bowgun.png') },
          { url: '/storage/weapons/long_swords.json', title: 'Long Sword', img: require('../assets/icons/Long_Sword.png') },
          { url: '/storage/weapons/switch_axes.json', title: 'Switch Axe', img: require('../assets/icons/Switch_Axe.png') },
          { url: '/storage/weapons/sword_shields.json', title: 'Sword & Shield', img: require('../assets/icons/Sword_and_Shield.png') }
        ],
        armor: [
          { url: '/storage/armor/low_ranks.json', title: 'Low Rank', img: require('../assets/icons/Low_Rank.png') },
          { url: '/storage/armor/high_ranks.json', title: 'High Rank', img: require('../assets/icons/High_Rank.png') },
          { url: '/storage/armor/master_ranks.json', title: 'Master Rank', img: require('../assets/icons/Master_Rank.png') },
          { url: '/storage/armor/layered_armor.json', title: 'Layered', img: require('../assets/icons/Layered.png') }
        ],
        charms: [
          { url: '/storage/charms.json', title: 'Charms' }
        ],
        decorations: [
          { url: '/storage/decorations.json', title: 'Decorations' }
        ],
        tools: [
          { url: '/storage/tools.json', title: 'Specialized Tools'}
        ],
        palico: [
          { url: '/storage/palico_low_ranks.json', title: 'Low Rank'},
          { url: '/storage/palico_high_ranks.json', title: 'High Rank'},
          { url: '/storage/palico_master_ranks.json', title: 'Master Rank'}
        ],
        gadget_grimalkyne: [
          { url: '/storage/palico_gadgets.json', title: 'Palico Gadgets' },
          { url: '/storage/grimalkyne.json', title: 'Grimalkyne' }
        ],
        crowns: [
          { url: '/storage/monsters.json', title: 'Monsters'},
          { url: '/storage/endemic_life_crowns.json', title: 'Endemic Life'}
        ],
        research: [
          { url: '/storage/monsters.json', title: 'Research Level'},
        ],
        quests: [
          { url: '/storage/quests.json', title: 'Assignments'}
        ],
        deliveries: [
          { url: '/storage/deliveries.json', title: 'Deliveries'}
        ],
        pendants: [
          { url: '/storage/pendants.json', title: 'Pendants'}
        ],
        crafting: [
          { url: '/storage/crafting.json', title: 'Crafting'}
        ],
        elder: [
          { url: '/storage/elder_items.json', title: 'Items'},
          { url: '/storage/elder_decos.json', title: 'Decorations'},
          { url: '/storage/elder_lures.json', title: 'Lures'}
        ],
        room: [
          { url: '/storage/room.json', title: 'Room Decor'}
        ],
        observation: [
          { url: '/storage/observation_log.json', title: 'Observation Log'}
        ]
      },
      items: [],
      maxProgress: 0,
      progress: 0,
      currentTitle: '',
      currentPath: this.$route.path,
      isHome: true,
      updateData: false
    }
  },
  watch: {
    $route() {
      // reset data on route change since we're staying in the same component for multiple 'views'
      this.items = []
      this.maxProgress = 0
      this.progress = 0
      this.currentTitle = ''
      this.currentPath = this.$route.path
      this.isHome = true
    }
  },
  methods: {
    navChange(theUrl, theTitle) {
      this.isHome = false;
      this.updateData = false;
      var nestedObjectProgress = 0;
      // before fetching the json file, call function:
      // check if "hide crafted gear" is selected
      // if yes, display hidden gear, uncheck input, then move on
      this.checkGear()
      this.currentTitle = theTitle

      fetch(theUrl)
        .then(response => response.json())
        .then(res => {
          this.items = res
          if (this.currentPath.includes('quest')) {
            for (var i = 0; i < res.length; i++) {
              nestedObjectProgress += res[i].quests.length
            }
          this.maxProgress = nestedObjectProgress
          } else {
          this.maxProgress = res.length
          }
        })
      this.progress = localStorage.getItem(theTitle + ' count')
      // since 'localStorage' only stores strings, we convert to int
      if (this.progress !== null)
        this.progress = parseInt(this.progress)
    },
    checkGear() {
      var compGearChecked = document.getElementById("checkbox-filter");
      var clearedItems;
      if (compGearChecked.checked) {
        if (this.currentPath.includes('decorations'))
          clearedItems = JSON.parse(localStorage.getItem('unlockedDecos'))
        else if (this.currentPath.includes('specialized-tools'))
          clearedItems = JSON.parse(localStorage.getItem('unlockedTools'))
        else if (this.currentPath.includes('palico-gear'))
          clearedItems = JSON.parse(localStorage.getItem('craftedPalicoGear'))
        else if (this.currentPath.includes('gadgets-grimalkyne'))
          clearedItems = JSON.parse(localStorage.getItem('gadgetsGrimalkyne'))
        else if (this.currentPath.includes('crown'))
          clearedItems = JSON.parse(localStorage.getItem('monstersCrowns'))
        else if (this.currentPath.includes('research'))
          clearedItems = JSON.parse(localStorage.getItem('maxResearch'))
        else if (this.currentPath.includes('quest'))
          clearedItems = JSON.parse(localStorage.getItem('completedQuests'))
        else if (this.currentPath.includes('deliveries'))
          clearedItems = JSON.parse(localStorage.getItem('completedDeliveries'))
        else if (this.currentPath.includes('pendants'))
          clearedItems = JSON.parse(localStorage.getItem('completedPendants'))
        else if (this.currentPath.includes('crafting'))
          clearedItems = JSON.parse(localStorage.getItem('unlockedCrafting'))
        else if (this.currentPath.includes('elder'))
          clearedItems = JSON.parse(localStorage.getItem('unlockedElderItems'))
        else if (this.currentPath.includes('room'))
          clearedItems = JSON.parse(localStorage.getItem('unlockedRoomDecor'))
        else if (this.currentPath.includes('observation'))
          clearedItems = JSON.parse(localStorage.getItem('completedObsLog'))
        else
          clearedItems = JSON.parse(localStorage.getItem('craftedGear'))

        for (var i = 0; i < clearedItems.length; i++) {
          // only check data from current view
          if (document.getElementById(clearedItems[i]) != null)
            document.getElementById(clearedItems[i]).parentNode.parentNode.style.display = "revert";
        }
      }
      compGearChecked.checked = false;
    },
    increaseProgress() {
      this.progress++
      localStorage.setItem(this.currentTitle + ' count', this.progress)
    },
    decreaseProgress() {
      this.progress--
      localStorage.setItem(this.currentTitle + ' count', this.progress)
    },
    homeView() {
      this.isHome = true;
      this.updatePTData()
    },
    updatePTData() {
      this.updateData = true;
    }
  }
}
</script>

<style scoped>
div {
  text-align: center;
}
ul {
  margin: 0;
  padding: 0;
}
li,
.sub-nav-home {
  display: inline;
  cursor: pointer;
  padding: 0;
}
li span {
  padding: 10px;
}
.toggle-components {
  display: none;
}
</style>