<template>
  <title>Tweet</title>
  <div class="flex flex-col lg:flex-row lg:justify-around w-screen h-screen lg:px-10 dark:bg-gray-900">
    <div class="flex flex-col w-full lg:w-fit lg:px-16 fixed lg:static">
      <img src="../assets/logo/icon.png" alt="TwitterPlus" class="w-[50px] mx-3 mt-1 hidden lg:block">
      <LeftMenu />
    </div>
    <div class="w-full flex flex-col mt-16 lg:px-10 lg:mt-0">
      <div v-if="loaders.tweets" class="flex justify-center items-center w-full h-full">
        <svg class="animate-spin fill-gray-800 dark:fill-gray-200" width="30px" height="30px"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z" />
        </svg>
      </div>
      <div class="flex flex-col h-full" v-else>
        <TweetTemplate :tweet="tweets.original" />
        <TweetCreation :postTweet="postTweet" :isComment="true" />
        <TweetList :tweets="tweets.responses" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftMenu from '@/components/Layout/Bars/Nav/LeftMenu.vue';
import TweetList from '@/components/TweetList.vue';
import TweetTemplate from '@/components/TweetTemplate.vue';
import TweetCreation from '@/components/TweetCreation.vue';

export default {
  name: 'TweetView',
  components: {
    LeftMenu,
    TweetList,
    TweetTemplate,
    TweetCreation
  },
  props: {
    tweetId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      followOnly: false,
      tweets: {},
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
    },
    async reloadTweets() {
      const res = await (await fetch(`/tweets/${this.tweetId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })).json();

      this.tweets = res;
      this.loaders.tweets = false;
    },
    async postTweet(tweetContent) {
      if (!tweetContent) return;
      if (tweetContent.length > 300) return alert('Tweet is too long!');
      
      await (await fetch('/tweets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          content: tweetContent,
          parentId: this.tweetId
        })
      })).json();

      await this.reloadTweets();
    }
  },
  async mounted() {
    if (!this.tweetId || parseInt(this.tweetId) < 1) {
      this.$router.push('/unknownTweet');
    }
    this.reloadTweets();
  },
  watch: {
    tweetId() {
      this.reloadTweets();
    }
  }
}
</script>
