<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="wrapper">
            <nav class="contents align-middle justify-center">
                <RouterLink to="/">Home</RouterLink>
                <span class="divider">✦</span>
                <RouterLink to="/courses">Cursos</RouterLink>
                <span class="divider">✦</span>
                <RouterLink to="/about">Nossa Plataforma</RouterLink>
                <span class="divider">✦</span>
                <RouterLink to="/student">Área do Aluno</RouterLink>
                <span class="divider">✦</span>
                <RouterLink to="/faq">FAQ</RouterLink>
                <span class="divider">✦</span>
                <RouterLink to="/contact">Contato</RouterLink>
                <button class="btn btn-primary">Cadastre-se</button>
            </nav>
        </div>
    </header>

    <div class="container border border-amber-800 p-6">
        <RouterView />
    </div>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

.divider {
    color: var(--color-primary);
    padding: 0 8px;
    font-size: 14px;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
