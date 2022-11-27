<template>
    <div class="flex flex-col w-full lg:w-9/12 h-screen lg:h-full lg:h-full lg:border-x-[1px] border-solid border-gray-600 dark:bg-gray-800">
        <div class="flex flex-col justify-center items-center">
            <h2 class="font-bold">Thème</h2>
            <div class="flex flex-row space-x-10">
                <div @click="switchThemeWhite" class="bg-gray-100 rounded-full w-10 h-10 border-2 border-solid border-gray-600" />
                <div @click="switchThemeBlack" class="bg-gray-800 rounded-full w-10 h-10 border-2 border-solid border-gray-200" />
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SettingsMenu',
    data() {
        return {
        }
    },
    methods: {
        switchThemeBlack() {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        },
        switchThemeWhite() {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }
}
</script>