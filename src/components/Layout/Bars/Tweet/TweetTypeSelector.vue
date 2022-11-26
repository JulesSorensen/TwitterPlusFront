<template>

    <div class="flex flex-col relative">
        <i v-on:click="toggleSelector" class="fa-lg fa-solid fa-earth-europe" />
        <div id="dropdown-states"
            class="hidden w-[16rem] absolute top-3 left-[-50px] bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
                <li>
                    <button type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        <div class="inline-flex items-center">
                            <i class="fa-xl fa-solid fa-earth-europe"></i>
                            <p class="ml-3">Tout le monde peut répondre</p>
                        </div>
                    </button>
                </li>
                <li>
                    <button type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        <div class="inline-flex items-center">
                            <i class="fa-xl fa-solid fa-users-slash"></i>
                            <p class="ml-3">Seul vous pouvez répondre</p>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TweetTypeSelector',
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