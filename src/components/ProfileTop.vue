<template>
    <div class="flex flex-col justify-center items-center w-full h-fit lg:py-5">
        <div class="w-full lg:w-3/4 h-24 relative overflow-hidden inline-block rounded-t-2xl">
            <img v-if="!!user.background" class="bg-center block absolute w-full" v-bind:src="user.background"
                alt="bgImg">
            <img v-else class="bg-center block absolute w-full"
                src="https://img.freepik.com/free-vector/smooth-white-wave-background_52683-55288.jpg" alt="bgImg">
        </div>
        <div class="w-full lg:w-3/4 bg-gray-200 dark:bg-gray-800/50">
            <div class="relative h-1">
                <div
                    class="absolute rounded-full border-4 border-gray-100 dark:border-gray-800 h-20 w-20 bg-white left-1 bottom-[-30px]">
                    <div class="relative overflow-hidden inline-block rounded-full h-full w-full">
                        <img v-if="!!user.picture" class="bg-center block absolute w-full" v-bind:src="user.picture"
                            alt="Profile picture">
                        <img v-else class="bg-center block absolute w-full"
                            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg"
                            alt="Profile picture">
                    </div>
                </div>
            </div>
            <div>
                <div class="ml-24 text-3xl">
                    <h1 v-if="loading" class="font-bold dark:text-gray-300">{{ userName }}</h1>
                    <h1 v-else-if="invalidUser" class="font-bold dark:text-gray-300">Utilisateur invalide</h1>
                    <h1 v-else class="font-bold dark:text-gray-300">{{ user.name }}</h1>
                </div>
            </div>
        </div>
        <div v-if="!invalidUser" class="bg-gray-200 dark:bg-gray-800/50 w-full lg:w-3/4">
            <div class="flex flex-row justify-end pr-10 space-x-3 mt-3">
                <button v-if="user.self" @click="toggleEditionMode"
                    class="rounded-lg px-2 w-36 py-1 text-lg font-bold tansition-all duration-500 bg-blue-700 hover:tracking-wider hover:bg-white dark:text-white dark:hover:bg-blue-800">Modifier</button>
                <button v-else @click="followUser"
                    class="rounded-lg px-2 w-36 py-1 text-lg font-bold tansition-all duration-500 bg-blue-700 hover:tracking-wider hover:bg-white dark:text-white dark:hover:bg-blue-800">Suivre</button>
            </div>
        </div>
        <div v-if="!invalidUser"
            class="flex flex-row w-full lg:w-3/4 pl-10 pb-5 space-x-10 lg:rounded-b-md bg-gray-200 dark:bg-gray-800/50">
            <div class="flex flex-row items-center space-x-1">
                <p v-if="loading" class="font-semibold dark:text-white">?</p>
                <p v-else class="font-semibold dark:text-white">{{ user.subscribersNb }}</p>
                <p class="text-sm text-gray-800/60 dark:text-gray-400/70">Abonnées</p>
            </div>
            <div class="flex flex-row items-center space-x-1">
                <p v-if="loading" class="font-semibold dark:text-white">?</p>
                <p v-else class="font-semibold dark:text-white">{{ user.subscribedNb }}</p>
                <p class="text-sm text-gray-800/60 dark:text-gray-400/70">Abonnements</p>
            </div>
            <div class="flex flex-row items-center space-x-1">
                <p v-if="loading" class="font-semibold dark:text-white">?</p>
                <p v-else class="font-semibold dark:text-white">{{ user.likes }}</p>
                <p class="text-sm text-gray-800/60 dark:text-gray-400/70">J'aimes</p>
            </div>

        </div>
    </div>
</template>
  
<script>

export default {
    name: 'ProfileTop',
    data() {
        return {
            isEditionMode: false
        }
    },
    props: {
        loading: {
            type: Boolean,
            default: true
        },
        user: {
            type: Object,
            required: false
        },
        userName: {
            type: String,
            required: true
        },
        invalidUser: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        toggleEditionMode() {
            this.isEditionMode = !this.isEditionMode;
            this.$router.push({ name: 'ProfileEdition', params: { id: this.user.id } });
        },
        async followUser() {
        }
    }
}
</script>