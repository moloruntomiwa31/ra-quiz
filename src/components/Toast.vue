<template>
  <transition name="fade">
    <div
      class="fixed bottom-8 lg:top-10 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 w-[90%] md:w-[60%]"
      :class="{
        'bg-green-100 text-green-800 border border-green-300': type === 'success',
        'bg-red-100 text-red-800 border border-red-300': type === 'error',
        'bg-yellow-100 text-yellow-800 border border-yellow-300': type === 'info',
      }"
    >
      <Icon
        v-if="type === 'success'"
        icon="mdi:check-circle-outline"
        class="w-5 h-5 text-green-600"
      />
      <Icon
        v-else-if="type === 'error'"
        icon="mdi:close-circle-outline"
        class="w-5 h-5 text-red-600"
      />
      <Icon v-else icon="mdi:information-outline" class="w-5 h-5 text-yellow-600" />
      <span class="font-medium">{{ message }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
    message: string | null
    type: 'success' | 'error' | 'info'
}>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
