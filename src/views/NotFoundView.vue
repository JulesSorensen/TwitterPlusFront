<template>
    <title>Page inconnue</title>
    <div class="flex flex-col space-y-3 justify-center items-center h-screen dark:bg-gray-900">
        <img src="../assets/logo/banner.png" alt="TwitterPlusIcon" class="w-[300px] my-3">
        <h1 class="text-red-300 text-3xl font-bold">404 - Page Not Found</h1>
        <p class="text-md font-semibold dark:text-gray-300">Cette page n'existe pas</p>
        <button v-on:click="goToHome"
            class="bg-gray-200 hover:bg-gray-300 rounded-lg px-3 py-1 dark:text-gray-300 dark:bg-gray-700">Retour à
            l'accueil</button>
    </div>
</template>

<script>
export default {
    name: 'NotFoundView',
    methods: {
        goToHome() {
            this.$router.push('/');
        }
    }
}
</script>