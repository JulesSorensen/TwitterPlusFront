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
                <svg class="dark:fill-gray-400 group-hover:fill-gray-500 black:group-hover:fill-gray-200" width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"/></svg>
                <p class="dark:text-gray-400 font-semibold group-hover:text-gray-500 black:group-hover:text-gray-200">0</p>
            </div>
            <div class="flex flex-row items-center space-x-3 group">
                <svg class="dark:fill-gray-400 group-hover:fill-gray-500 black:group-hover:fill-gray-200" width="18px" height="18px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z"/></svg>
                <p class="dark:text-gray-400 font-semibold group-hover:text-gray-500 black:group-hover:text-gray-200">0</p>
            </div>
            <div class="flex flex-row items-center space-x-3 group">
                <svg v-if="true" class="dark:fill-gray-400 group-hover:fill-gray-500 black:group-hover:fill-gray-200" width="18px" height="18px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                <svg v-else class="dark:fill-gray-400 group-hover:fill-gray-500 black:group-hover:fill-gray-200" width="18px" height="18px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                <p class="dark:text-gray-400 font-semibold group-hover:text-gray-500 black:group-hover:text-gray-200">0</p>
            </div>
            <div class="flex flex-row items-center space-x-3 group">
                <svg v-if="true" class="dark:fill-gray-400 group-hover:fill-gray-500 black:group-hover:fill-gray-200" width="18px" height="18px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z"/></svg>
                <svg v-else class="dark:fill-gray-400 group-hover:fill-gray-500 black:group-hover:fill-gray-200" width="18px" height="18px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg>
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
  