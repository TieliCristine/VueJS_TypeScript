<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <section id="hero" class="h-screen flex">
        <div class="flex flex-col items-center justify-center text-center gap-20 w-3/5">
            <h1 class="text-7xl font-hero dark:text-white">DESTRAVE SEU POTENCIAL</h1>
            <RouterLink to="/auth/register" class="btn-primary">Matricule-se já!</RouterLink>
        </div>
        <img
            src="../../src/assets/img-woman-study.jpg"
            alt="Woman study at home."
            class="h-screen flex-1"
        />
    </section>

    <section
        id="courses"
        class="h-screen flex items-center justify-center pt-20"
    >
        <h2 class="text-2xl dark:text-white font-bold">Nossos Cursos</h2>
    </section>

        <section id="platform" class="h-screen flex items-center justify-center">
            <h2 class="text-2xl dark:text-white font-bold">Sobre a Nossa Plataforma</h2>
        </section>

        <section id="student" class="h-screen flex items-center justify-center">
            <h2 class="text-2xl dark:text-white font-bold">Área do Aluno</h2>
        </section>

        <section id="contact" class="h-screen flex items-center justify-center">
            <h2 class="text-2xl dark:text-white font-bold">Entre em Contato</h2>
        </section>
</template>
