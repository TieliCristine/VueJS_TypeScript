import { defineStore } from 'pinia'
import type { LoginForm, RegisterForm, User } from '@/types';
import { ref } from 'vue';
import type { FormKitNode } from '@formkit/core';
import axiosInstance from '@/lib/axios.ts';
import router from '@/router';
import { AxiosError } from 'axios';

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);
    const isLoggedIn = ref<boolean>(false);

    const register = async (payload: RegisterForm, node?: FormKitNode) => {
        await axiosInstance.get('/sanctum/csrf-cookie', {
            baseURL: 'http://localhost:8000'
        });
        try {
            await axiosInstance.post('/register', payload);
            await getUser();
            await router.push('/student/dashboard');
        } catch (e) {
            if (e instanceof AxiosError && e.response?.status === 422) {
                node?.setErrors([], e.response?.data.errors);
            }
        }
    };

    const login = async (payload: LoginForm, node?: FormKitNode) => {
        await axiosInstance.get('/sanctum/csrf-cookie', {
            baseURL: 'http://localhost:8000'
        });
        try {
            await axiosInstance.post('/login', payload);
            await getUser();
            await router.push('/student/dashboard');
        } catch (e) {
            if (e instanceof AxiosError && e.response?.status === 422) {
                node?.setErrors([], e.response?.data.errors);
            }
        }
    };

    const getUser = async () => {
        if (isLoggedIn.value) return;
        try {
            const response = await axiosInstance.get('/user');
            user.value = response.data;
            isLoggedIn.value = true;
        } catch (error) {
            console.log(error);
        }
    };

    const cleanState = () => {
        user.value = null;
        isLoggedIn.value = false;
    };

    const logout = async () => {
        try {
            await axiosInstance.post('/logout');
            user.value = null;
            isLoggedIn.value = false;
            await router.push('/auth/login');
        } catch (error) {
            console.log(error);
        }
    };

    return {
        user,
        isLoggedIn,
        register,
        login,
        getUser,
        cleanState,
        logout
    }
}, {
    persist: {
        storage: sessionStorage,
        pick: [ 'user', 'isLoggedIn' ]
    }
})
