<script setup>
defineProps({
  cols: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div flex items-center mt8>
    <v-clicks v-for="c in cols" :key="c.name">
      <div flex-1>
        <img :src="`../img/${c.img}`">
        <p text-center>{{ c.name }}</p>
      </div>
    </v-clicks>
  </div>
</template>