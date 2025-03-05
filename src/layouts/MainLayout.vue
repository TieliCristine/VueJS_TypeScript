<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
import logoLight from '@/assets/logo/logo-light.png'
import logoDark from '@/assets/logo/logo-dark.png'

const reloadPage = () => {
    window.scrollTo(0, 0) // Leva a página para o topo
    setTimeout(() => location.reload(), 50) // Pequeno delay para garantir o scroll antes do reload
}


/* < DARK MODE TOGGLE > */

const isDarkMode = ref(false)
const logoSrc = computed(() => (isDarkMode.value ? logoDark : logoLight))

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
    <div class="flex flex-col min-h-screen bg-cyan-50 dark:bg-slate-950">
        <header
            class="fixed top-0 left-0 w-full flex justify-evenly items-center px-96 py-2 bg-white dark:bg-slate-900 drop-shadow-lg"
        >
            <RouterLink to="/" @click.prevent="reloadPage" class="flex items-center gap-2">
                <img :src="logoSrc" alt="logo" class="h-24" />
            </RouterLink>
            <div class="flex-1 flex justify-center text-gray-900 dark:text-gray-100">
                <NavBar />
            </div>
            <RouterLink to="/auth/login" class="btn-primary">Acesse</RouterLink>
            <button @click="toggleDarkMode" class="font-bold cursor-pointer">
                {{ isDarkMode ? 'Tema Escuro' : 'Tema Claro' }}
            </button>
        </header>

        <main class="flex-1 rounded-lg shadow-lg">
            <RouterView />
        </main>

        <footer class="bg-gray-900 text-gray-100 text-center py-4 mt-auto">
            <p class="text-sm">
                © {{ new Date().getFullYear() }} Minha Plataforma. Todos os direitos reservados.
            </p>
        </footer>
    </div>
</template>
