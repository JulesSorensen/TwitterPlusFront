<template>
    <div class="flex flex-col justify-center my-auto bg-gray-100 rounded-md p-4">
        <h2>Suggestions</h2>
        <div class="w-full h-fit space-y-3 mt-3">
            <div class="flex flex-row justify-between" v-for="curUser in users" :key="curUser.id">
                <div class="flex flex-row w-40 items-center space-x-1">
                    <div class="h-10 w-10">
                        <img class="rounded-full h-10 w-10" v-bind:src="curUser.userPicture" v-bind:alt="curUser.name">
                    </div>
                    <p class="truncate">{{curUser.name}}</p>
                </div>
                <button class="rounded-lg">Suivre</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PeopleSuggestion',
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: "JeanJeanJeanJean",
                    userPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    readOnly: false
                },
                {
                    id: 2,
                    name: "Jean",
                    userPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    readOnly: false
                },
                {
                    id: 2,
                    name: "Jean",
                    userPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    readOnly: false
                },
                {
                    id: 2,
                    name: "Jean",
                    userPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    readOnly: false
                },
                {
                    id: 2,
                    name: "Jean",
                    userPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    readOnly: false
                },
                {
                    id: 2,
                    name: "Jean",
                    userPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    readOnly: false
                },
                {
                    id: 2,
                    name: "Jean",
                    userPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    readOnly: false
                },
            ]
        }
    },
    props: {
    },
    methods: {
        toggleSelector() {
            const elements = document.getElementById('dropdown-states');
            elements.classList.toggle('hidden');
        }
    }
}
</script>