<template>
  <title>Paramètres</title>
  <div class="flex flex-col lg:flex-row lg:justify-around w-screen h-screen lg:px-10 dark:bg-gray-900">
    <div class="flex flex-col w-full lg:w-fit lg:px-16 fixed lg:static">
      <img src="../assets/logo/icon.png" alt="TwitterPlus" class="w-[50px] mx-3 mt-1 hidden lg:block">
      <LeftMenu />
    </div>
    <div class="flex flex-col w-full mt-16 lg:mt-0">
      <SettingsMenu />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftMenu from '@/components/Layout/Bars/Nav/LeftMenu.vue';
import SettingsMenu from '@/components/SettingsMenu.vue';

export default {
  name: 'SettingsView',
  components: {
    LeftMenu,
    SettingsMenu
  }
}
</script>
