<script setup lang="ts">
const routes = [
  { title: 'Dashboard', icon: 'mdi-home', to: '/panel/dashboard' },
  { title: 'Map', icon: 'mdi-map', to: '/panel/map' }
]
</script>

<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list density="compact" nav> </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="route in routes"
        :prepend-icon="route.icon"
        :to="route.to"
        :title="route.title"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-main>
    <RouterView />
  </v-main>
</template>
