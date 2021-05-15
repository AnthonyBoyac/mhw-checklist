<template>
  <BodyHeader
  :title="title"
  :clearedItems="clearedItems"
  :progressCounter="progressCounter"
  :maxProgressCount="maxProgressCount" />
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