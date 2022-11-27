<template>
    <div
        class="flex flex-col w-full lg:w-9/12 h-screen lg:h-full lg:h-full lg:border-x-[1px] border-solid border-gray-600 dark:bg-gray-800">
        <div class="flex flex-col justify-center items-center">
            <h2 class="font-bold dark:text-gray-300 mt-5">Thème de l'application</h2>
            <div class="flex flex-row mt-3 space-x-10">
                <div @click="switchThemeWhite"
                    class="flex flex-row cursor-pointer items-center rounded-2xl space-x-5 bg-white p-3 border-2 border-black">
                    <div
                        class="flex justify-center items-center ml-1 bg-gray-200 rounded-full w-10 h-10 border-4 border-solid border-gray-800">
                        <i v-if="defaultTheme" class="text-gray-900 fa-xl fa-solid fa-check"></i>
                    </div>
                    <p class="text-gray-800 pr-3 select-none">Par défaut</p>
                </div>
                <div @click="switchThemeBlack"
                    class="flex flex-row cursor-pointer items-center rounded-2xl space-x-5 bg-gray-900 p-3 border-2 border-white">
                    <div
                        class="flex justify-center items-center ml-1 bg-gray-800 rounded-full w-10 h-10 border-4 border-solid border-gray-100">
                        <i v-if="!defaultTheme" class="text-white fa-xl fa-solid fa-check"></i>
                    </div>
                    <p class="text-gray-200 pr-3 select-none">Bleu foncé</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SettingsMenu',
    data() {
        return {
            defaultTheme: localStorage.getItem('theme') === 'dark' ? false : true
        }
    },
    methods: {
        switchThemeBlack() {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            this.defaultTheme = false;
        },
        switchThemeWhite() {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            this.defaultTheme = true;
        }
    }
}
</script>