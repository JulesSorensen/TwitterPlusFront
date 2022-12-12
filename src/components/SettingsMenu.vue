<template>
    <div
        class="flex flex-col overflow-auto justify-evenly w-full lg:w-9/12 h-screen lg:h-full lg:h-full lg:border-x-[1px] border-solid border-gray-600 bg-gray-100 dark:bg-gray-800">
        <div class="flex flex-col justify-center items-center">
            <h2 class="font-bold dark:text-gray-300 mt-5">Thème de l'application</h2>
            <div class="flex justify-center flex-col lg:flex-row mt-3 lg:space-x-10">
                <div @click="switchThemeWhite"
                    class="flex flex-row cursor-pointer items-center rounded-2xl space-x-5 bg-white p-3 border-2 border-black hover:bg-gray-200">
                    <div
                        class="flex justify-center items-center ml-1 bg-gray-200 rounded-full w-10 h-10 border-4 border-solid border-gray-800">
                        <svg v-if="defaultTheme" class="fill-gray-900" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    </div>
                    <p class="text-gray-800 pr-3 select-none">Par défaut</p>
                </div>
                <div @click="switchThemeBlack"
                    class="flex flex-row cursor-pointer items-center rounded-2xl space-x-5 bg-gray-900 p-3 border-2 border-white hover:bg-gray-900/75">
                    <div
                        class="flex justify-center items-center ml-1 bg-gray-800 rounded-full w-10 h-10 border-4 border-solid border-gray-100">
                        <svg v-if="!defaultTheme" class="fill-white" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    </div>
                    <p class="text-gray-200 pr-3 select-none">Bleu foncé</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center">
            <h2 class="font-bold dark:text-gray-300 mt-5">Modifier vos informations</h2>
            <div class="mt-5 grid grid-rows-4 md:grid-rows-4 lg:grid-rows-2 grid-flow-col gap-x-20 gap-y-3">
                <input type="password" placeholder="Nouveau mot de passe"
                    class="px-2 rounded border border-gray-600 dark:text-white dark:bg-gray-900 dark:border-gra-100">
                <input type="password" placeholder="Confirmation"
                    class="px-2 rounded border border-gray-600 dark:text-white dark:bg-gray-900 dark:border-gra-100">
                <input type="password" placeholder="Ancien mot de passe"
                    class="px-2 rounded border border-gray-600 dark:text-white dark:bg-gray-900 dark:border-gra-100">
                <button
                    class="px-1 rounded font-semibold transition-all duration-500 bg-gray-300 dark:bg-blue-800 hover:tracking-wider hover:bg-gray-400 dark:hover:bg-blue-900">Confirmer</button>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center">
            <h2 class="font-bold dark:text-gray-300 mt-5">Changement de pseudonyme</h2>
            <div class="mt-5 grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-x-36 gap-y-3">
                <input type="text" value="Pseudo"
                    class="px-2 rounded border border-gray-600 dark:text-white dark:bg-gray-900 dark:border-gra-100">
                <button
                    class="px-1 rounded font-semibold transition-all duration-500 bg-gray-300 dark:bg-blue-800 hover:tracking-wider hover:bg-gray-400 dark:hover:bg-blue-900">Changer</button>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center">
            <h2 class="font-bold dark:text-gray-300 mt-5">Certification</h2>
            <div class="w-[25rem]">
                <p class="dark:text-gray-400">Sélectionner un motif valide afin de pouvoir effectuer une demande de certification de votre compte.</p>
            </div>
            <div class="mt-5 grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-x-36 gap-y-3">
                <select class="px-2 rounded border border-gray-600 dark:text-white dark:bg-gray-900 dark:border-gra-100">
                    <option value="1">Entreprise</option>
                    <option value="2">Personnalitée</option>
                    <option value="3">Musicien</option>
                </select>
                <button
                    class="px-1 w-56 rounded font-semibold transition-all duration-500 bg-gray-300 dark:bg-blue-800 hover:tracking-wider hover:bg-gray-400 dark:hover:bg-blue-900">Envoyer la demande</button>
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