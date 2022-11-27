<template>
    <div class="flex flex-row justify-around w-full h-fit py-1 border-x-[1px] border-b-[1px] border-gray-600 dark:border-gray-800">
        <div @click="reloadTweets" class="flex justify-center items-center w-5 h-5">
            <i class="dark:text-gray-500 fa-lg fa-solid fa-rotate" />
        </div>
        <div @click="toggleFollowOnly" class="flex justify-center items-center w-5 h-5" v-if="followOnly">
            <i class="dark:text-gray-500 fa-lg fa-solid fa-user-secret" />
        </div>
        <div @click="toggleFollowOnly" class="flex justify-center items-center w-5 h-5" v-if="!followOnly">
            <i class="dark:text-gray-500 fa-lg fa-solid fa-users" />
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'TweetListBar',
    props: {
        followOnly: Boolean,
        toggleFollowOnly: Function,
        reloadTweets: Function,
    }
}
</script>
  