<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const isDarkMode = ref(false)
const updateTheme = (dark: boolean) => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
}
const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
}

// Atualiza o tema sempre que `isDarkMode` mudar
watch(isDarkMode, updateTheme)

// Define o tema ao carregar a página
onMounted(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDarkMode.value =
        localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)
})
</script>

<template>
    <h1 class="text-4xl text-hero">DESTRAVE SEU POTENCIAL</h1>
    <button @click="toggleDarkMode" class="btn btn-primary">
        {{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}
    </button>
</template>

