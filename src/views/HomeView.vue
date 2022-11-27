<template>
  <title>Accueil</title>
  <div class="flex flex-col lg:flex-row lg:justify-around w-screen h-screen lg:px-10 dark:bg-gray-900">
    <div class="flex flex-col w-full lg:w-fit lg:px-16 fixed lg:static">
      <img src="../assets/logo/icon.png" alt="TwitterPlus" class="w-[50px] mx-3 mt-1 hidden lg:block">
      <LeftMenu />
    </div>
    <div class="w-full flex flex-col mt-16 lg:mt-0">
      <TweetCreation />
      <TweetListBar :followOnly="followOnly" :toggleFollowOnly="toggleFollowOnly" :reloadTweets="reloadTweets" />
      <TweetList />
    </div>
    <div class="flex flex-col hidden lg:flex space-y-13 w-fit h-full pt-10 px-16 flex">
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
import TweetListBar from '@/components/Layout/Bars/Tweet/TweetListBar.vue';

export default {
  name: 'HomeView',
  components: {
    LeftMenu,
    TweetCreation,
    TweetList,
    PeopleSuggestion,
    TweetSearch,
    TweetListBar
  },
  data() {
    return {
      followOnly: false
    }
  },
  methods: {
    toggleFollowOnly() {
      this.followOnly = !this.followOnly;
    },
    reloadTweets() {
      
    }
  }
}
</script>
