<template>
  <title>{{ userName != "" ? userName : "Mon profil" }}</title>
  <div class="flex flex-col lg:flex-row lg:justify-around w-screen h-screen lg:px-10 dark:bg-gray-900">
    <div class="flex flex-col w-full lg:w-fit lg:px-16 fixed lg:static">
      <img src="../assets/logo/icon.png" alt="TwitterPlus" class="w-[50px] mx-3 mt-1 hidden lg:block">
      <LeftMenu />
    </div>
    <div class="w-full h-full flex flex-col mt-16 pb-16 lg:mt-0">
      <ProfileTop :invalidUser="invalidUser" :loading="loaders.profile" :user="account" :userName="userName"
        :subscribeToUser="subscribeToUser" :unsubscribeToUser="unsubscribeToUser" :updatePicture="updatePicture" />
      <div v-if="loaders.tweets" class="flex justify-center items-center w-full h-full">
        <svg class="animate-spin fill-gray-800 dark:fill-gray-200" width="30px" height="30px"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z" />
        </svg>
      </div>
      <TweetList v-else :tweets="tweets" :tweetDeleted="tweetDeleted" />
    </div>
  </div>
</template>

<script>
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
      account: {},
      tweets: [],
      invalidUser: false,
      loaders: {
        tweets: true,
        profile: true
      }
    }
  },
  methods: {
    async reloadTweets() {
      this.loaders.tweets = true;
      if (this.invalidUser) return;
      const res = await (await fetch(`/accoutsTweets/${this.account.id}`, {
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
      this.loaders.profile = true;

      const res = await (await fetch(`/accounts/${this.userName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })).json();

      if (res.error) {
        this.invalidUser = true;
      } else {
        this.account = res;
      }
      this.loaders.profile = false;
    },
    tweetDeleted(id) {
      this.tweets = this.tweets.filter(tweet => tweet.id !== id);
    },
    async subscribeToUser() {
      this.account.subscribed = true;
      this.account.subscribersNb++;

      const response = await (await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
          id: this.account.id
        })
      })).json();

      if (response.error) {
        this.account.subscribed = false;
        this.$toast.error(`Une erreur est survenue lors de l'abonnement à l'utilisateur`);
      }
    },
    async unsubscribeToUser() {
      this.account.subscribed = false;
      this.account.subscribersNb--;

      const response = await (await fetch(`/subscribe/${this.account.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })).json();

      if (response.error) {
        this.account.subscribed = true;
        this.$toast.error(`Une erreur est survenue lors du désabonnement à l'utilisateur`);
      }
    },
    updatePicture(newPicture, isBanner) {
      if (isBanner) {
        this.account.background = newPicture;
      } else {
        this.account.picture = newPicture;
      }
    }
  },
  async mounted() {
    await this.reloadProfile();
    await this.reloadTweets();
  },
  watch: {
    async userName() {
      this.tweets = [];
      this.account = {};
      this.invalidUser = false;
      await this.reloadProfile();
      await this.reloadTweets();
    }
  }
}
</script>
