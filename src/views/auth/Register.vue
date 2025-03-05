<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.ts'
import { ArrowLeft } from 'lucide-vue-next'

const { register } = useAuthStore()
</script>

<template>
    <section>
        <div class="text-gray-900 dark:text-gray-100">
            <button class="absolute btn-icon">
                <RouterLink to="/" >
                    <ArrowLeft class="w-6 h-6" />
                </RouterLink>
            </button>
            <h1 class="text-3xl font-semibold mb-8 text-center">Register</h1>
            <div>
                <FormKit type="form" submit-label="Register" @submit="register" method="post">
                    <FormKit
                        type="text"
                        label="Name"
                        name="name"
                        help="Seu nome completo igual consta na sua identidade"
                        validation="required"
                    />
                    <FormKit
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="jane@example.com"
                        validation="required|email"
                    />
                    <FormKit
                        type="password"
                        name="password"
                        label="Password"
                        validation="required|length:6|matches:/[^a-zA-Z]/"
                        :validation-messages="{
                            matches: 'Please include at least one symbol',
                        }"
                        help="Inclua ao menos 1 símbolo ou número"
                    />
                    <FormKit
                        type="password"
                        name="password_confirm"
                        label="Confirm password"
                        validation="required|confirm"
                    />
                </FormKit>
            </div>
        </div>
    </section>
</template>
