<script setup lang="ts">
import { ref } from 'vue'

const center = ref([0, 0])
const zoom = ref(2)
</script>

<template>
  <ol-map style="height: 100%">
    <ol-view ref="view" :center="center" :zoom="zoom" />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-rotate-control></ol-rotate-control>
    <ol-interaction-link />
  </ol-map>
</template>

<style scoped>
.ol-map {
  position: relative;
}
</style>
