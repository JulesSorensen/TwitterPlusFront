<template>
    <div class="flex flex-col justify-center my-auto bg-gray-100 dark:bg-gray-800 rounded-md p-4">
        <h2 class="dark:text-gray-300 font-semibold">Suggestions</h2>
        <div v-if="users.length > 0" class="w-full h-fit space-y-3 mt-3">
            <div class="flex flex-row justify-between rounded-2xl transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-900"
                v-for="curUser in users" :key="curUser.id">
                <div v-on:click="openUser(curUser.name)" class="flex flex-row w-40 items-center space-x-1">
                    <div class="h-[30px] w-[30px] mr-1 relative overflow-hidden inline-block rounded-full">
                        <img v-if="!curUser.picture" class="bg-center block absolute w-full h-full"
                            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg"
                            alt="bgImg">
                        <img v-else class="bg-center block absolute h   -full" v-bind:src="curUser.picture"
                            alt="bgImg">
                    </div>
                    <p class="dark:text-gray-300 truncate max-w-[100px]">{{ curUser.name }}</p>
                </div>
                <button v-if="curUser.subscribed" v-on:click="unsubscribeToUser(curUser.id)"
                    class="rounded-lg px-2 tansition-all duration-500 hover:bg-red-300 dark:text-white dark:hover:bg-red-800">Abonné</button>
                <button v-else v-on:click="subscribeToUser(curUser.id)"
                    class="rounded-lg px-2 tansition-all duration-500 hover:bg-blue-300 dark:text-white dark:hover:bg-blue-800">Suivre</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PeopleSuggestion',
    data() {
        return {
            users: []
        }
    },
    methods: {
        async getAccounts() {
            const accounts = await (await fetch('/accountRecommandation', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })).json();
            this.users = accounts;
        },
        openUser(userName) {
            this.$router.push({
                name: 'profile',
                params: {
                    userName: userName
                }
            });
        },
        async subscribeToUser(userId) {
            this.users = this.users.map(user => {
                if (user.id === userId) user.subscribed = true;
                return user;
            });

            const response = await (await fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    id: userId
                })
            })).json();

            if (response.error) {
                this.users = this.users.map(user => {
                    if (user.id === userId) user.subscribed = false;
                    return user;
                });
                this.$toast.error(`Une erreur est survenue lors de l'abonnement à l'utilisateur`);
            }
        },
        async unsubscribeToUser(userId) {
            this.users = this.users.map(user => {
                if (user.id === userId) user.subscribed = false;
                return user;
            });

            const response = await (await fetch(`/subscribe/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })).json();

            if (response.error) {
                this.users = this.users.map(user => {
                    if (user.id === userId) user.subscribed = true;
                    return user;
                });
                this.$toast.error(`Une erreur est survenue lors du désabonnement à l'utilisateur`);
            }
        }
    },
    mounted() {
        this.getAccounts();
    }
}
</script>