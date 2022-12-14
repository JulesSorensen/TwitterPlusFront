<template>
  <title>Accueil</title>
  <div class="flex flex-col lg:flex-row lg:justify-around w-screen h-screen lg:px-10 dark:bg-gray-900">
    <div class="flex flex-col w-full lg:w-fit lg:px-16 fixed lg:static">
      <img src="../assets/logo/icon.png" alt="TwitterPlus" class="w-[50px] mx-3 mt-1 hidden lg:block">
      <LeftMenu />
    </div>
    <div class="w-full flex flex-col mt-16 lg:mt-0">
      <TweetCreation :postTweet="postTweet" :isComment="false" />
      <TweetListBar :followOnly="followOnly" :toggleFollowOnly="toggleFollowOnly" :reloadTweets="reloadTweets" />
      <div v-if="loaders.tweets" class="flex justify-center items-center w-full h-full">
        <svg class="animate-spin fill-gray-800 dark:fill-gray-200" width="30px" height="30px"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z" />
        </svg>
      </div>
      <TweetList v-else :tweets="tweets" :tweetDeleted="tweetDeleted" :onRetweet="onRetweet" />
    </div>
    <div class="flex-col hidden lg:flex space-y-13 w-fit h-full pt-10 px-16">
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
      followOnly: false,
      tweets: [],
      loaders: {
        tweets: true,
        suggestions: true,
        self: true
      }
    }
  },
  methods: {
    toggleFollowOnly() {
      this.followOnly = !this.followOnly;
      this.loaders.tweets = true;
      this.reloadTweets();
    },
    tweetDeleted(id) {
      this.tweets = this.tweets.filter(tweet => tweet.id !== id);
    },
    async reloadTweets() {
      let res = [];
      if (!this.followOnly) {
        res = await (await fetch('/tweets', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })).json();
      } else {
        res = await (await fetch('/myTweets', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })).json();
      }

      this.tweets = res;
      this.loaders.tweets = false;
    },
    async postTweet(tweetContent, withComments = true) {
      if (!tweetContent) return;
      if (tweetContent.length > 300) {
        this.$toast.error(`Votre tweet est trop long`);
        return false;
      }

      await (await fetch('/tweets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          content: tweetContent,
          withComments
        })
      })).json();

      await this.reloadTweets();
      return true;
    },
    onRetweet(id, rtDeleted = false) {
      if (rtDeleted) {
        this.tweets = this.tweets.filter(tweet => tweet.retweetOfId !== id);
      } else {
        let retweetedTweet = this.tweets.find(tweet => tweet.id === id);
        retweetedTweet = {
          ...retweetedTweet,
          self: false,
          isRetweet: true,
          retweetOfId: retweetedTweet.id,
          retweeterName: "Vous",
          retweeterSelf: true,
          retweetCreatedAt: new Date().toISOString(),
          retweeted: true
        };
        this.tweets = [retweetedTweet, ...this.tweets];
      }
    }
  },
  async mounted() {
    this.reloadTweets();
  }
}
</script>
