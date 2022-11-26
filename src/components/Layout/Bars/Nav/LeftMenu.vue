<template>
    <div class="flex flex-row lg:flex-col justify-between w-full h-full">
        <div class="flex flex-row lg:flex-col">
            <div v-on:click="goToHome"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-300 hover:bg-blue-200 hover:shadow-sm">
                <i class="fa-xl w-[25px] fa-solid fa-house" />
                <p class="ml-3 font-semibold text-2xl hidden lg:block">Accueil</p>
            </div>
            <div v-on:click="goToNotif"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-300 hover:bg-blue-200 hover:shadow-sm">
                <i class="fa-xl w-[25px] fa-solid fa-bell" />
                <p class="ml-3 font-semibold text-2xl hidden lg:block">Notifications</p>
            </div>
            <div v-on:click="goToBookmarks"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-300 hover:bg-blue-200 hover:shadow-sm">
                <i class="fa-xl w-[25px] fa-solid fa-bookmark" />
                <p class="ml-3 font-semibold text-2xl hidden lg:block">Signets</p>
            </div>
            <div v-on:click="goToProfile"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-300 hover:bg-blue-200 hover:shadow-sm">
                <i class="fa-xl w-[25px] fa-solid fa-user" />
                <p class="ml-3 font-semibold text-2xl hidden lg:block">Profil</p>
            </div>
            <div v-on:click="goToParameters"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-300 hover:bg-blue-200 hover:shadow-sm">
                <i class="fa-xl w-[25px] fa-solid fa-gear" />
                <p class="ml-3 font-semibold text-2xl hidden lg:block">Paramètres</p>
            </div>
        </div>

        <div class="flex flex-row">
            <div
                class="flex flex-row justify-between space-x-3 items-center w-full my-1 p-3 rounded-full transition-all duration-300 hover:bg-black/50 hover:shadow-sm">
                <div class="flex flex-row">
                    <div class="h-6 w-6 rounded-full bg-red-100" />
                    <p class="ml-3 text-md font-semibold hidden lg:block">Pseudo</p>
                </div>
                <div class="flex justify-center items-center w-[30px] h-[30px] p-1 rounded-full cursor-pointer hover:bg-red-200">
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
          this.$router.push({ name: '/' });  
        },
        goToNotif() {
          this.$router.push({ name: '/notifications' });
        },
        goToBookmarks() {
          this.$router.push({ name: '/bookmarks' });
        },
        goToProfile() {
          this.$router.push({ name: '/profile' });
        },
        goToParameters() {
          this.$router.push({ name: '/parameters' });
        },
    }
}
</script>
  