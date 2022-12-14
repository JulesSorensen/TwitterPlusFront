<template>
    <div class="flex flex-row relative items-center justify-between mb-1 w-full h-fit">
        <div class="mt-2 relative mx-auto text-gray-600">
            <input v-model="name"
                class="border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Recherche utilisateur">
            <button type="submit" class="absolute h-5 right-0 top-0 mt-2 mr-4">
                <svg class="fill-gray-600 h-4 w-4" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                </svg>
            </button>
            <div class="absolute rounded-md bg-gray-400 dark:bg-gray-800 w-full flex flex-col justify-center my-2">
                <div v-if="loaders.search">
                    <svg class="animate-spin fill-gray-800 dark:fill-gray-200" width="30px" height="30px"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z" />
                    </svg>
                </div>
                <div v-else v-for="curUser in users" :key="curUser.id">
                    <div v-on:click="openUser(curUser.name)"
                        class="flex flex-row dark:hover:bg-gray-700 rounded-md my-1 ml-1 w-11/12 items-center space-x-1">
                        <div class="h-[30px] w-[30px] mr-1 relative overflow-hidden inline-block rounded-full">
                            <img v-if="!curUser.userPicture" class="bg-center block absolute w-full h-full"
                                src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg"
                                alt="bgImg">
                            <img v-else class="bg-center block absolute w-full" v-bind:src="curUser.userPicture"
                                alt="bgImg">
                        </div>
                        <p class="dark:text-gray-300 truncate max-w-[100px]">{{ curUser.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'TweetSearch',
    data() {
        return {
            users: [],
            name: null,
            loaders: {
                search: false
            },
        }
    },
    methods: {
        async searchUsers() {
            if (this.name && this.name.length > 0) {
                this.loaders.search = true;
                const res = await (await fetch(`/findAccounts?name=${this.name}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })).json();
                this.users = res;
                console.log(this.users);
                this.loaders.search = false;
            } else {
                this.users = [];
            }
        },
        openUser(name) {
            this.$router.push({
                name: 'profile',
                params: {
                    userName: name
                }
            });
        }
    },
    watch: {
        async name() {
            await this.searchUsers();
        }
    }
}
</script>