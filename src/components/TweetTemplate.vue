<template>
    <div class="flex flex-col w-full h-fit py-3 border border-solid border-gray-600">
        <div class="flex flex-row items-center ml-2 space-x-3">
            <div class="h-10 w-10">
                <img class="rounded-full h-10 w-10" v-bind:src="tweet.authorPicture" v-bind:alt="tweet.authorName">
            </div>
            <p class="font-bold">{{ tweet.authorName }}</p>
        </div>
        <div class="flex flex-col w-full pl-10 pr-2 mt-1 mb-2">
            {{ tweet.content }}
        </div>
        <div class="flex flex-row justify-around w-full h-fit px-10">
            <div class="flex flex-row items-center space-x-3">
                <i class="fa-regular fa-comment" />
                <p class="font-semibold">0</p>
            </div>
            <div class="flex flex-row items-center space-x-3">
                <i class="fa-solid fa-retweet" />
                <p class="font-semibold">0</p>
            </div>
            <div class="flex flex-row items-center space-x-3">
                <i class="fa-regular fa-heart" />
                <p class="font-semibold">0</p>
            </div>
            <div class="flex flex-row items-center space-x-3">
                <i class="mr-3 fa-regular fa-bookmark" />
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'TweetTemplate',
    props: {
        tweet: {
            type: Object,
            required: true
        }
    },
    components: {
    }
}
</script>
  