<script setup lang="ts">

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

</script>

<template>
    <nav class="px-4 text-sm text-center p-4 ">
        <div class="flex justify-center gap-4 ">
            <button @click="scrollToSection('hero')" class="hover-underline font-bold cursor-pointer">Home</button>
            <span class="text-blue-600 dark:text-blue-500">✦</span>
            <button @click="scrollToSection('courses')" class="hover-underline font-bold cursor-pointer">Cursos</button>
            <span class="text-blue-600 dark:text-blue-500">✦</span>
            <button @click="scrollToSection('platform')" class="hover-underline font-bold cursor-pointer">Nossa Plataforma</button>
            <span class="text-blue-600 dark:text-blue-500">✦</span>
            <button @click="scrollToSection('student')" class="hover-underline font-bold cursor-pointer">Área do Aluno</button>
            <span class="text-blue-600 dark:text-blue-500">✦</span>
            <button @click="scrollToSection('contact')" class="hover-underline font-bold cursor-pointer">Contato</button>
        </div>
    </nav>
</template>

<style scoped>
.hover-underline {
    position: relative;
}

.hover-underline::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #155dfc;
    transition: width 0.3s ease-in-out;
}

.dark {
    .hover-underline::after {
        background-color: #155dfc;
    }
}

.hover-underline:hover::after {
    width: 100%;
}
</style>

