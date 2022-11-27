<template>
    <div class="flex flex-col w-full h-fit py-3 border border-solid border-gray-600 dark:border-gray-800">
        <div class="flex flex-row items-center ml-2">
            <div class="h-10 w-10">
                <img class="rounded-full h-10 w-10" v-bind:src="tweet.authorPicture" v-bind:alt="tweet.authorName">
            </div>
            <p class="truncate max-w-[10rem] ml-3 font-bold dark:text-gray-200">{{ tweet.authorName }}</p>
            <p class="mx-1">·</p>
            <p class="text-sm w-[100px] min-w-[100px] dark:text-gray-200">{{ getTS(tweet.createdAt) }}</p>
        </div>
        <div class="dark:text-gray-300 flex flex-col w-full pl-10 pr-2 mt-1 mb-2">
            {{ tweet.content }}
        </div>
        <div class="flex flex-row justify-around w-full h-fit px-10">
            <div class="flex flex-row items-center space-x-3">
                <i class="dark:text-gray-400 fa-regular fa-comment" />
                <p class="dark:text-gray-400 font-semibold">0</p>
            </div>
            <div class="flex flex-row items-center space-x-3">
                <i class="dark:text-gray-400 fa-solid fa-retweet" />
                <p class="dark:text-gray-400 font-semibold">0</p>
            </div>
            <div class="flex flex-row items-center space-x-3">
                <i class="dark:text-gray-400 fa-regular fa-heart" />
                <p class="dark:text-gray-400 font-semibold">0</p>
            </div>
            <div class="flex flex-row items-center space-x-3">
                <i class="dark:text-gray-400 mr-3 fa-regular fa-bookmark" />
            </div>
        </div>
    </div>
</template>
  
<script>
import moment from 'moment';

export default {
    name: 'TweetTemplate',
    props: {
        tweet: {
            type: Object,
            required: true
        }
    },
    components: {
        moment
    },
    prototype: {
        moment
    },
    methods: {
        getTS: function (sec) {
            return moment.unix(sec).format("DD/MM/YY HH[h]mm")
        }
    }
}
</script>
  