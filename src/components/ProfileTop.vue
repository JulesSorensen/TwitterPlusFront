<template>
    <div class="flex flex-col justify-center items-center w-full h-fit lg:py-5">
        <div class="w-full lg:w-3/4 h-24 relative overflow-hidden inline-block rounded-t-2xl">
            <img v-if="!!user.background" class="bg-center block absolute w-full" v-bind:src="user.background"
                alt="Background">
            <img v-else class="bg-center block absolute w-full"
                src="https://img.freepik.com/free-vector/smooth-white-wave-background_52683-55288.jpg" alt="bgImg">
        </div>
        <div class="w-full lg:w-3/4 bg-gray-200 dark:bg-gray-800/50">
            <div class="relative h-1">
                <div
                    class="absolute rounded-full border-4 border-gray-100 dark:border-gray-800 h-20 w-20 bg-white left-1 bottom-[-30px]">
                    <div class="relative overflow-hidden inline-block rounded-full h-full w-full">
                        <img v-if="!!user.picture" class="bg-center block absolute h-full" v-bind:src="user.picture"
                            alt="Picture">
                        <img v-else class="bg-center block absolute w-full"
                            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg"
                            alt="Picture">
                    </div>
                </div>
            </div>
            <div>
                <div class="flex flex-row ml-24 text-3xl">
                    <h1 v-if="loading" class="font-bold dark:text-gray-300">{{ userName }}</h1>
                    <h1 v-else-if="invalidUser" class="font-bold dark:text-gray-300">Utilisateur invalide</h1>
                    <h1 v-else class="font-bold dark:text-gray-300">{{ user.name }}</h1>
                    <div v-if="user.certification" class="flex flex-row">
                        <div class="w-5 h-5 ml-1 my-auto">
                            <img src="../assets/img/certif.png" alt="CERTIFIE">
                        </div>
                        <p v-if="user.certification === 1" class="text-xs font-semibold dark:text-gray-300">(Entreprise)</p>
                        <p v-else-if="user.certification === 2" class="text-xs font-semibold dark:text-gray-300">(Personnalit??e)</p>
                        <p v-else-if="user.certification === 3" class="text-xs font-semibold dark:text-gray-300">(Musicien)</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isEditionMode" class="bg-gray-200 dark:bg-gray-800/50 flex flex-col w-full lg:w-3/4">
            <div class="flex flex-row items-center space-x-5">
                <div class="ml-3">
                    <label for="picture" class="dark:text-blue-500">Photo de profil</label>
                    <input id="picture" v-model="picture" placeholder="Url de photo" type="picture"
                        class="pl-2 rounded-lg shadow-md w-full">
                </div>
                <button v-on:click="changePicture"
                    class="rounded-lg align-middle px-2 w-36 h-10 py-1 text-lg font-bold tansition-all duration-500 bg-green-700 hover:tracking-wider hover:bg-white dark:text-white dark:hover:bg-green-800">Sauvegarder</button>
            </div>
            <div class="flex flex-row items-center space-x-5">
                <div class="ml-3">
                    <label for="banner" class="dark:text-blue-500">Banni??re</label>
                    <input id="banner" v-model="banner" placeholder="Url de banni??re" type="banner"
                        class="pl-2 rounded-lg shadow-md w-full">
                </div>
                <button v-on:click="changeBackground"
                    class="rounded-lg align-middle px-2 w-36 h-10 py-1 text-lg font-bold tansition-all duration-500 bg-green-700 hover:tracking-wider hover:bg-white dark:text-white dark:hover:bg-green-800">Sauvegarder</button>
            </div>
        </div>
        <div v-if="!invalidUser" class="bg-gray-200 dark:bg-gray-800/50 w-full lg:w-3/4">
            <div class="flex flex-row justify-end pr-10 space-x-3 mt-3">
                <button v-if="user.self" v-on:click="toggleEditionMode"
                    class="rounded-lg px-2 w-36 py-1 text-lg font-bold tansition-all duration-500 bg-blue-700 hover:tracking-wider hover:bg-white dark:text-white dark:hover:bg-blue-800">Modifier</button>
                <button v-else-if="user.subscribed" v-on:click="unsubscribeToUser"
                    class="rounded-lg px-2 w-44 py-1 text-lg font-bold tansition-all duration-500 bg-red-700 hover:tracking-wider hover:bg-white dark:text-white dark:hover:bg-red-800">Se
                    d??sabonner</button>
                <button v-else v-on:click="subscribeToUser"
                    class="rounded-lg px-2 w-36 py-1 text-lg font-bold tansition-all duration-500 bg-blue-700 hover:tracking-wider hover:bg-white dark:text-white dark:hover:bg-blue-800">S'abonner</button>
            </div>
        </div>
        <div v-if="!invalidUser"
            class="flex flex-row w-full lg:w-3/4 pl-10 pb-5 space-x-10 lg:rounded-b-md bg-gray-200 dark:bg-gray-800/50">
            <div class="flex flex-row items-center space-x-1">
                <p v-if="loading" class="font-semibold dark:text-white">?</p>
                <p v-else class="font-semibold dark:text-white">{{ user.subscribersNb }}</p>
                <p class="text-sm text-gray-800/60 dark:text-gray-400/70">Abonn??es</p>
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
            isEditionMode: false,
            picture: null,
            banner: null
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
        },
        subscribeToUser: {
            type: Function,
            required: true
        },
        unsubscribeToUser: {
            type: Function,
            required: true
        },
        updatePicture: {
            type: Function,
            required: true
        }
    },
    methods: {
        toggleEditionMode() {
            this.isEditionMode = !this.isEditionMode;
        },
        async changePicture() {
            await fetch('/accounts', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    picture: this.picture
                })
            });
            this.toggleEditionMode();
            this.updatePicture(this.picture);
        },
        async changeBackground() {
            await fetch('/accounts', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    background: this.banner
                })
            });
            this.toggleEditionMode();
            this.updatePicture(this.banner, true);
        }
    },
    mounted() {
        if (this.user.self) {
            this.picture = this.user.picture;
            this.banner = this.user.background;
        }
    }
}
</script>