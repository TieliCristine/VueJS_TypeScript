<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.ts'
import { ArrowLeft } from 'lucide-vue-next'

const { login } = useAuthStore()
</script>
<template>
    <section>
        <div class="text-gray-900 dark:text-gray-100">
            <button class="absolute btn-icon">
                <RouterLink to="/" >
                    <ArrowLeft class="w-6 h-6" />
                </RouterLink>
            </button>
            <h1 class="text-3xl font-semibold mb-8 text-center">Acesse</h1>
            <div>
                <FormKit type="form" submit-label="Entrar" @submit="login" method="post">
                    <FormKit
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="jane@example.com"
                        validation="required|email"
                    />
                    <FormKit
                        type="password"
                        label="Senha"
                        name="password"
                        validation="required"
                    />
                </FormKit>
            </div>
        </div>
    </section>
</template>
