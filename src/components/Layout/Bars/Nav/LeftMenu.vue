<template>
    <div class="flex flex-row lg:flex-col justify-between w-full h-full">
        <div class="flex flex-row lg:flex-col">
            <div @click="goToHome"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-500 hover:bg-blue-200 dark:hover:bg-blue-900 hover:shadow-sm">
                <i class="dark:text-gray-200 fa-xl w-[25px] fa-solid fa-house" />
                <p class="dark:text-gray-200 ml-3 font-semibold text-2xl hidden lg:block">Accueil</p>
            </div>
            <div @click="goToBookmarks"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-500 hover:bg-blue-200 dark:hover:bg-blue-900 hover:shadow-sm">
                <i class="dark:text-gray-200 fa-xl w-[25px] fa-solid fa-bookmark" />
                <p class="dark:text-gray-200 ml-3 font-semibold text-2xl hidden lg:block">Signets</p>
            </div>
            <div @click="goToNotif"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-500 hover:bg-blue-200 dark:hover:bg-blue-900 hover:shadow-sm">
                <i class="dark:text-gray-200 fa-xl w-[25px] fa-solid fa-chart-gantt" />
                <p class="dark:text-gray-200 ml-3 font-semibold text-2xl hidden lg:block">Classement</p>
            </div>
            <div @click="goToProfile"
                class="flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-500 hover:bg-blue-200 dark:hover:bg-blue-900 hover:shadow-sm hidden lg:flex">
                <i class="dark:text-gray-200 fa-xl w-[25px] fa-solid fa-user" />
                <p class="dark:text-gray-200 ml-3 font-semibold text-2xl">Profil</p>
            </div>
            <div @click="goToParameters"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-500 hover:bg-blue-200 dark:hover:bg-blue-900 hover:shadow-sm">
                <i class="dark:text-gray-200 fa-xl w-[25px] fa-solid fa-gear" />
                <p class="dark:text-gray-200 ml-3 font-semibold text-2xl hidden lg:block">Paramètres</p>
            </div>
        </div>

        <div class="flex flex-row">
            <div
                class="flex flex-row justify-between space-x-3 items-center w-full my-1 p-3 rounded-full transition-all duration-500 hover:tracking-wider hover:bg-black/50 hover:shadow-sm">
                <div @click="goToProfile" class="flex flex-row">
                    <div class="h-6 w-6 rounded-full bg-red-100" />
                    <p class="ml-3 text-md font-semibold hidden lg:block dark:text-gray-200">Pseudo</p>
                </div>
                <div @click="logout"
                    class="flex justify-center items-center w-[30px] h-[30px] p-1 rounded-full cursor-pointer hover:bg-red-200">
                    <i class="text-red-500 fa-lg fa-solid fa-right-from-bracket" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'LeftMenu',
    props: {
    },
    methods: {
        goToHome() {
            this.$router.push('/');
        },
        goToNotif() {
            this.$router.push('/notifications');
        },
        goToBookmarks() {
            this.$router.push('/bookmarks');
        },
        goToProfile() {
            this.$router.push('/profile');
        },
        goToParameters() {
            this.$router.push('/settings');
        },
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/login')
        }
    }
}
</script>
  