<template>
    <div id="allTweets" class="flex flex-col w-full h-fit lg:h-fit">
        <div v-for="curTweet in tweets" :key="curTweet.id" class="w-full h-fit">
            <TweetTemplate :tweet="curTweet" />
        </div>
    </div>
</template>
  
<script>
import TweetTemplate from '@/components/TweetTemplate.vue';

export default {
    name: 'TweetList',
    props: {
        tweets: {
            type: Array,
            required: true
        }
    },
    components: {
        TweetTemplate
    }
}
</script>
  
<style>
#allTweets {
    overflow: overlay;
}

::-webkit-scrollbar {
    width: 20px;
}

::-webkit-scrollbar-track {
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: #3a9dd326;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
    overflow: overlay;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #1e859cb0;
}

@media (max-width: 768px) {
    body {
        overflow-y: hidden;
    }
}
</style>