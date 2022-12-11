<template>
    <div class="flex flex-row lg:flex-col justify-between w-full h-full">
        <div class="flex flex-row lg:flex-col">
            <div @click="goToHome"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-500 hover:bg-blue-200 dark:hover:bg-blue-900 hover:shadow-sm">
                <svg class="dark:fill-gray-200" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512">
                    <path
                        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
                <p class="dark:text-gray-200 ml-3 font-semibold text-2xl hidden lg:block">Accueil</p>
            </div>
            <div @click="goToBookmarks"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-500 hover:bg-blue-200 dark:hover:bg-blue-900 hover:shadow-sm">
                <svg class="dark:fill-gray-200" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512">
                    <path
                        d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                </svg>
                <p class="dark:text-gray-200 ml-3 font-semibold text-2xl hidden lg:block">Signets</p>
            </div>
            <div @click="goToNotif"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-500 hover:bg-blue-200 dark:hover:bg-blue-900 hover:shadow-sm">
                <svg class="dark:fill-gray-200" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                        d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zm96 64H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm160 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                </svg>
                <p class="dark:text-gray-200 ml-3 font-semibold text-2xl hidden lg:block">Classement</p>
            </div>
            <div @click="goToProfile"
                class="flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-500 hover:bg-blue-200 dark:hover:bg-blue-900 hover:shadow-sm hidden lg:flex">
                <svg class="dark:fill-gray-200" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path
                        d="M224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 39.5-161.2c77.2 12 136.3 78.8 136.3 159.4c0 17-13.8 30.7-30.7 30.7H265.1 182.9 30.7C13.8 512 0 498.2 0 481.3c0-80.6 59.1-147.4 136.3-159.4l39.5 161.2 33.4-123.9z" />
                </svg>
                <p class="dark:text-gray-200 ml-3 font-semibold text-2xl">Profil</p>
            </div>
            <div @click="goToParameters"
                class="flex flex-row cursor-pointer items-center w-fit my-1 py-3 px-5 rounded-full transition-all duration-500 hover:bg-blue-200 dark:hover:bg-blue-900 hover:shadow-sm">
                <svg class="dark:fill-gray-200" width="25px" height="25px" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                        d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z" />
                </svg>
                <p class="dark:text-gray-200 ml-3 font-semibold text-2xl hidden lg:block">Paramètres</p>
            </div>
        </div>

        <div class="flex flex-row">
            <div
                class="flex flex-row max-w-[200px] space-x-3 items-center w-full my-1 p-3 rounded-full transition-all duration-500 hover:tracking-wider hover:bg-black/50 hover:shadow-sm">
                <div @click="goToProfile" class="flex flex-row w-full">
                    <div class="h-[25px] w-[25px] relative overflow-hidden inline-block rounded-full">
                        <img v-if="!user || !user.picture" class="bg-center block absolute w-full h-full"
                            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg"
                            alt="bgImg">
                        <img v-else class="bg-center block absolute w-full" v-bind:src="user.picture" alt="bgImg">
                    </div>
                    <div class="rounded-full bg-red-100" />
                    <p v-if="!!user"
                        class="ml-3 text-md truncate cursor-default font-semibold hidden lg:block dark:text-gray-200">
                        {{ user.name }}
                    </p>
                </div>
                <div @click="logout"
                    class="flex justify-center items-center w-[30px] h-[30px] p-1 rounded-full cursor-pointer hover:bg-red-200">
                    <svg class="fill-red-500" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"/></svg>
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
        },
        async loadUser() {
            const data = await (await fetch('/accounts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })).json();
            console.log(data);
            this.user = data;
        }
    },
    data() {
        return {
            user: null
        }
    },
    mounted() {
        this.loadUser();
    }
}
</script>
  