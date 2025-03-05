<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<template>
    <div class="min-h-screen flex items-center justify-center bg-cyan-50 dark:bg-slate-950">
        <div class="relative bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100
            border border-gray-300 dark:border-gray-700 shadow-lg p-6 w-96
            rounded-lg rounded-tr-3xl rounded-bl-3xl
            before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:border-t-4 before:border-l-4 before:border-blue-500 dark:before:border-blue-400
            after:absolute after:bottom-0 after:right-0 after:w-8 after:h-8 after:border-b-4 after:border-r-4 after:border-blue-500 dark:after:border-blue-400">

            <RouterView />
        </div>
    </div>
</template>

