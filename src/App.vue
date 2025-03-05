<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, ref, watch } from 'vue'

/* < DARK MODE TOGGLE > */

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
    updateTheme(isDarkMode.value)
})
/* < DARK MODE TOGGLE /> */
</script>

<template>
    <button @click="toggleDarkMode" class="font-bold cursor-pointer">
        {{ isDarkMode ? 'Tema Escuro' : 'Tema Claro' }}
    </button>
    <RouterView />
</template>
