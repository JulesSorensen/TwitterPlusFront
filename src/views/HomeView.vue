<template>
  <div class="flex flex-col lg:flex-row lg:justify-around w-screen h-screen lg:px-10">
    <div class="flex flex-col w-full lg:w-fit lg:px-16 fixed lg:static">
      <img src="../assets/logo/icon.png" alt="TwitterPlus" class="w-[50px] mx-3 mt-1 hidden lg:block">
      <LeftMenu />
    </div>
    <div class="w-full flex flex-col mt-16 lg:mt-0">
      <TweetCreation />
      <TweetList />
    </div>
    <div class="flex flex-col hidden lg:block space-y-13 w-fit h-full pt-10 px-16 flex">
      <TweetSearch />
      <PeopleSuggestion />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftMenu from '@/components/Layout/Bars/Nav/LeftMenu.vue';
import TweetCreation from '@/components/TweetCreation.vue';
import TweetList from '@/components/TweetList.vue';
import PeopleSuggestion from '@/components/PeopleSuggestion.vue';
import TweetSearch from '@/components/Layout/Bars/Tweet/TweetSearch.vue';

export default {
  name: 'HomeView',
  components: {
    LeftMenu,
    TweetCreation,
    TweetList,
    PeopleSuggestion,
    TweetSearch
  }
}
</script>