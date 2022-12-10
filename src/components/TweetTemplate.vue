<template>
    <div
        class="flex flex-col w-full h-fit py-3 border border-solid border-gray-600 dark:border-gray-800 cursor-pointer transition-all duration-300 hover:bg-gray-200 hover:dark:bg-blue-900/5">
        <div>
            <div class="flex flex-row items-center ml-2">
                <div class="h-10 w-10">
                    <img v-if="!!tweet.authorPicture" class="rounded-full h-10 w-10" v-bind:src="tweet.authorPicture" v-bind:alt="tweet.authorName">
                    <img v-else class="rounded-full h-10 w-10" src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1670177693~exp=1670178293~hmac=c9f02ed9f9fa0a02fd6803ab76c27e81c5d9da73dda5b61fb0833a554b1cf1d4"  v-bind:alt="tweet.authorName">
                </div>
                <p class="truncate max-w-[10rem] ml-3 font-bold dark:text-gray-200">{{ tweet.name }}</p>
                <p class="mx-1 dark:text-gray-200">·</p>
                <p class="text-sm w-[100px] min-w-[100px] dark:text-gray-200">{{ getTS(tweet.createdAt) }}</p>
            </div>
            <div class="dark:text-gray-300 flex flex-col w-full pl-10 pr-2 mt-1 mb-2">
                {{ tweet.content }}
            </div>
        </div>
        <div class="flex flex-row justify-around w-full h-fit px-10">
            <div class="flex flex-row items-center space-x-3 group">
                <i class="dark:text-gray-400 fa-regular fa-comment group-hover:text-gray-500 black:group-hover:text-gray-200" />
                <p class="dark:text-gray-400 font-semibold group-hover:text-gray-500 black:group-hover:text-gray-200">0</p>
            </div>
            <div class="flex flex-row items-center space-x-3 group">
                <i class="dark:text-gray-400 fa-solid fa-retweet group-hover:text-gray-500 black:group-hover:text-gray-200" />
                <p class="dark:text-gray-400 font-semibold group-hover:text-gray-500 black:group-hover:text-gray-200">0</p>
            </div>
            <div class="flex flex-row items-center space-x-3 group">
                <i class="dark:text-gray-400 fa-regular fa-heart group-hover:text-gray-500 black:group-hover:text-gray-200" />
                <p class="dark:text-gray-400 font-semibold group-hover:text-gray-500 black:group-hover:text-gray-200">0</p>
            </div>
            <div class="flex flex-row items-center space-x-3 group">
                <i class="dark:text-gray-400 mr-3 fa-regular fa-bookmark group-hover:text-gray-500 black:group-hover:text-gray-200" />
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
        getTS(sec) {
            return moment(sec).format("DD/MM/YY HH[h]mm")
        },
        openTweet() {

        }
    }
}
</script>
  