<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
    <div class="flex min-h-screen">
        <!-- Sidebar -->
        <aside class="w-64 bg-gray-800 text-white p-4">
            <h2 class="text-xl font-bold">Área do Aluno</h2>
            <nav class="mt-4">
                <RouterLink to="/student/dashboard" class="block py-2 px-4 hover:bg-gray-700">Dashboard</RouterLink>
                <RouterLink to="/student/courses" class="block py-2 px-4 hover:bg-gray-700">Meus Cursos</RouterLink>
            </nav>
        </aside>

        <!-- Conteúdo principal -->
        <main class="flex-1 p-6">
            <RouterView />
        </main>
    </div>
</template>
