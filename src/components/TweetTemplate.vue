<template>
    <div
        class="flex flex-col w-full h-fit py-3 border border-solid border-gray-600 dark:border-gray-800 cursor-pointer transition-all duration-300 hover:bg-gray-200 hover:dark:bg-blue-900/5">
        <div v-if="tweet.isRetweet" class="flex flex-row items-center ml-5 pb-2">
            <svg class="fill-gray-800 dark:fill-gray-300" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512">
                <path
                    d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z" />
            </svg>
            <div class="flex flex-row items-center">
                <p class="dark:text-gray-200 ml-3">Retweeté par {{ tweet.retweeterName }}</p>
                <p class="mx-1 dark:text-gray-200">·</p>
                <p class="text-sm w-[100px] min-w-[100px] dark:text-gray-200">{{ getTS(tweet.retweetCreatedAt) }}</p>
            </div>
        </div>
        <div>
            <div class="flex flex-row justify-between">
                <div v-on:click="openUser" class="flex flex-row items-center ml-2">
                    <div class="h-10 w-10">
                        <img v-if="!!tweet.authorPicture" class="rounded-full h-10 w-10"
                            v-bind:src="tweet.authorPicture" v-bind:alt="tweet.authorName">
                        <img v-else class="rounded-full h-10 w-10"
                            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1670177693~exp=1670178293~hmac=c9f02ed9f9fa0a02fd6803ab76c27e81c5d9da73dda5b61fb0833a554b1cf1d4"
                            v-bind:alt="tweet.authorName">
                    </div>
                    <p class="truncate max-w-[10rem] ml-3 font-bold dark:text-gray-200">{{ tweet.name }}</p>
                    <p class="mx-1 dark:text-gray-200">·</p>
                    <p class="text-sm w-[100px] min-w-[100px] dark:text-gray-200">{{ getTS(tweet.createdAt) }}</p>
                </div>
                <div class="flex flex-row space-x-2 mr-5">
                    <svg v-if="tweetDeletion == 1" v-on:click="resetDeletion"
                        class="fill-green-600 dark:fill-green-900 group-hover:fill-green-700" width="18px" height="18px"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path
                            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                    </svg>
                    <div v-on:click="deleteTweet" v-if="tweet.self" class="w-fit h-fit group">
                        <svg class="fill-red-600 dark:fill-red-900 group-hover:fill-red-700" width="18px" height="18px"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div v-on:click="openTweet" class="dark:text-gray-300 flex flex-col w-full pl-10 pr-2 mt-1 mb-2">
                {{ tweet.content }}
            </div>
        </div>
        <div v-if="!tweet.isRetweet" class="flex flex-row justify-around w-full h-fit px-10 select-none">
            <div v-on:click="openTweet" class="flex flex-row items-center space-x-3 group">
                <svg v-if="tweet.withComments"
                    class="dark:fill-gray-400 group-hover:fill-gray-500 black:group-hover:fill-gray-200" width="18px"
                    height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z" />
                </svg>
                <svg v-else class="fill-red-500 dark:fill-red-900" width="18px" height="18px"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path
                        d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512.9 376.7C552.2 340.2 576 292.3 576 240C576 125.1 461.4 32 320 32c-67.7 0-129.3 21.4-175.1 56.3L38.8 5.1zM64 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c37 0 72.3-6.4 104-17.9L82.9 161.3C70.7 185.6 64 212.2 64 240z" />
                </svg>
                <p v-if="tweet.withComments"
                    class="dark:text-gray-400 font-semibold group-hover:text-gray-500 black:group-hover:text-gray-200">
                    {{ tweet.withComments ? tweet.commentsNb : 'x' }}
                </p>
            </div>
            <div v-on:click="retweetTweet" class="flex flex-row items-center space-x-3 group">
                <svg v-if="tweet.retweeted"
                    class="fill-green-600 dark:fill-green-400 group-hover:fill-green-500 black:group-hover:fill-green-200"
                    width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                        d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z" />
                </svg>
                <svg v-else class="dark:fill-gray-400 group-hover:fill-gray-500 black:group-hover:fill-gray-200"
                    width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                        d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z" />
                </svg>
                <p class="dark:text-gray-400 font-semibold group-hover:text-gray-500 black:group-hover:text-gray-200">
                    {{ tweet.retweetsNb }}</p>
            </div>
            <div v-on:click="likeTweet" class="flex flex-row items-center space-x-3 group">
                <svg v-if="tweet.liked"
                    class="fill-red-600 dark:fill-red-400 group-hover:fill-red-500 black:group-hover:fill-red-200"
                    width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
                <svg v-else class="dark:fill-gray-400 group-hover:fill-gray-500 black:group-hover:fill-gray-200"
                    width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                </svg>
                <p class="dark:text-gray-400 font-semibold group-hover:text-gray-500 black:group-hover:text-gray-200">
                    {{ tweet.likes }}</p>
            </div>
            <div v-on:click="bookmarkTweet" class="flex flex-row items-center space-x-3 group">
                <svg v-if="tweet.bookmarked"
                    class="fill-green-600 dark:fill-green-400 group-hover:fill-green-500 black:group-hover:fill-green-200"
                    width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                        d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z" />
                </svg>
                <svg v-else class="dark:fill-gray-400 group-hover:fill-gray-500 black:group-hover:fill-gray-200"
                    width="18px" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                        d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z" />
                </svg>
            </div>
        </div>
    </div>
</template>
  
<script>
import moment from 'moment';

/* eslint-disable */
export default {
    name: 'TweetTemplate',
    data() {
        return {
            tweetDeletion: 0
        }
    },
    props: {
        tweet: {
            type: Object,
            required: true
        },
        tweetDeleted: {
            type: Function,
            required: false
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
        openUser() {
            this.$router.push({
                name: 'profile',
                params: {
                    userName: this.tweet.name
                }
            });
        },
        openTweet() {
            if (!this.tweet.withComments) return;
            return this.$router.push({
                name: 'tweet',
                params: {
                    tweetId: this.tweet.id
                }
            });
        },
        openAccount() {
            this.$router.push({
                name: 'profile',
                params: {
                    userName: this.tweet.name
                }
            });
        },
        resetDeletion() {
            this.tweetDeletion = 0;
        },
        async deleteTweet() {
            if (this.tweetDeletion != 1) {
                this.tweetDeletion = 1;
            } else {
                await fetch(`/tweets/${this.tweet.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                });
                if (this.tweetDeleted) this.tweetDeleted(this.tweet.id);
            }
        },
        async likeTweet() {
            if (this.tweet.liked) {
                this.tweet.likes -= 1;
                this.tweet.liked = false;
                await fetch('/like', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    body: JSON.stringify({
                        tweetId: this.tweet.id
                    })
                });
            } else {
                this.tweet.likes += 1;
                this.tweet.liked = true;
                await fetch('/like', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    body: JSON.stringify({
                        tweetId: this.tweet.id
                    })
                });
            }
        },
        async bookmarkTweet() {
            if (this.tweet.bookmarked) {
                this.tweet.bookmarked = false;
                await fetch('/bookmarks', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    body: JSON.stringify({
                        tweetId: this.tweet.id
                    })
                });
            } else {
                this.tweet.bookmarked = true;
                await fetch('/bookmarks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    body: JSON.stringify({
                        tweetId: this.tweet.id
                    })
                });
            }
        },
        async retweetTweet() {
            if (!this.tweet.retweeted) {
                this.tweet.retweetsNb += 1;
                this.tweet.retweeted = true;
                await fetch('/retweets', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    body: JSON.stringify({
                        retweetOfId: this.tweet.id
                    })
                });
            } else {
                this.tweet.retweetsNb -= 1;
                this.tweet.retweeted = false;
                await fetch(`/retweets/${this.tweet.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                });
            }
        }
    }
}
</script>
  