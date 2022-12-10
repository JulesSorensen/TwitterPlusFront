<template>
  <title>Paramètres</title>
  <div class="flex flex-col lg:flex-row lg:justify-around w-screen h-screen lg:px-10 dark:bg-gray-900">
    <div class="flex flex-col w-full lg:w-fit lg:px-16 fixed lg:static">
      <img src="../assets/logo/icon.png" alt="TwitterPlus" class="w-[50px] mx-3 mt-1 hidden lg:block">
      <LeftMenu />
    </div>
    <div class="flex flex-col w-full mt-16 lg:mt-0">
      <ProfileTop :loading="loaders.profile" :user="account" :userName="userName" />
      <TweetList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftMenu from '@/components/Layout/Bars/Nav/LeftMenu.vue';
import TweetList from '@/components/TweetList.vue';
import ProfileTop from '@/components/ProfileTop.vue';

export default {
  name: 'ProfileView',
  components: {
    LeftMenu,
    TweetList,
    ProfileTop
  },
  props: {
    userName: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      account: [],
      tweets: [],
      loaders: {
        tweets: true,
        profile: true
      }
    }
  },
  methods: {
    async reloadTweets() {
      const res = await (await fetch('/tweets', {
        method: 'GET',
        headers: {
          'Content-Type': 'application',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })).json();

      this.tweets = res;
      this.loaders.tweets = false;
    },
    async reloadProfile() {
      let url = '/accounts';
      if (this.userName) url += `/${this.userName}`;

      const res = await (await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })).json();

      console.log(res);

      this.account = res;
      this.loaders.profile = false;
    }
  },
  async mounted() {
    await this.reloadTweets();
    await this.reloadProfile();
  }

}
</script>
