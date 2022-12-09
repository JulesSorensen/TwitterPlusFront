<template>
    <div class="flex flex-col justify-center items-center w-full h-fit lg:py-5">
        <div class="w-full lg:w-3/4 h-24 relative overflow-hidden inline-block rounded-t-2xl">
            <img class="bg-center block absolute w-full"
                src="https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000"
                alt="bgImg">
        </div>
        <div class="w-full lg:w-3/4 bg-gray-200 dark:bg-gray-800/50">
            <div class="relative h-1">
                <div class="absolute rounded-full border-4 border-gray-100 dark:border-gray-100 h-20 w-20 bg-white left-1 bottom-[-30px]">
                    <div class="relative overflow-hidden inline-block rounded-full h-full w-full">
                        <img class="bg-center block absolute w-full"
                            src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div class="ml-24 text-3xl">
                    <h1 class="font-bold dark:text-gray-300">Pseudo</h1>
                </div>
            </div>
        </div>
        <div class="bg-gray-200 dark:bg-gray-800/50 w-full lg:w-3/4">
            <div class="flex flex-row justify-end pr-10 space-x-3 mt-3">
                <button
                    class="rounded-lg px-2 w-36 py-1 text-lg font-bold tansition-all duration-500 bg-blue-700 hover:tracking-wider hover:bg-white dark:text-white dark:hover:bg-blue-800">Suivre</button>
            </div>
        </div>
        <div
            class="flex flex-row w-full lg:w-3/4 pl-10 pb-5 space-x-10 lg:rounded-b-md bg-gray-200 dark:bg-gray-800/50">
            <div class="flex flex-row items-center space-x-1">
                <p class="font-semibold dark:text-white">31</p>
                <p class="text-sm text-gray-800/60 dark:text-gray-400/70">Abonnées</p>
            </div>
            <div class="flex flex-row items-center space-x-1">
                <p class="font-semibold dark:text-white">31</p>
                <p class="text-sm text-gray-800/60 dark:text-gray-400/70">Abonnements</p>
            </div>
            <div class="flex flex-row items-center space-x-1">
                <p class="font-semibold dark:text-white">102</p>
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
        }
    },
    components: {
    },
    methods: {
    }
}
</script>