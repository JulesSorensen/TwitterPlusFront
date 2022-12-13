<template>
    <div class="flex flex-row items-center justify-between mb-1 w-full h-fit">
        <div class="flex flex-row items-center h-fit py-2 px-5 space-x-5 ml-10">
            <div class="py-1 relative">
                <i id="emojiElement" class="dark:text-gray-400 fa-lg fa-regular" @mouseover="changeEmoji"
                    v-on:click="toggleEmojiPicker" />
                <div id="emojiPickerDiv" class="absolute select-none top-7 hidden">
                    <EmojiPicker :theme="epTheme" :native="true" @select="appendEmoji" />
                </div>
            </div>
            <!-- <div class="py-1">
                <svg class="dark:fill-gray-400 fa-image" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"/></svg>
            </div> -->
        </div>
        <div class="flex flex-row items-center space-x-3 mr-5">
            <TweetTypeSelector :toggleCommentOnly="toggleCommentOnly" />
            <button v-on:click="postTweet"
                class="rounded-2xl px-3 py-1 shadow-sm bg-blue-300 transition-all duration-300 hover:bg-blue-500">Tweeter</button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import EmojiPicker from "vue3-emoji-picker";
import TweetTypeSelector from "@/components/Layout/Bars/Tweet/TweetTypeSelector.vue";
import 'vue3-emoji-picker/css';

export default {
    name: 'TweetBottomBar',
    data() {
        return {
            emojiMenuOpen: false,
            emojiList: ["fa-face-tired", "fa-face-surprise", "fa-face-smile-wink", "fa-face-smile-beam", "fa-face-sad-tear", "fa-face-sad-cry", "fa-face-rolling-eyes", "fa-face-meh-blank", "fa-face-meh", "fa-face-laugh-wink", "fa-face-laugh-squint", "fa-face-laugh-beam", "fa-face-laugh", "fa-face-kiss-wink-heart", "fa-face-kiss-beam", "fa-face-kiss", "fa-face-grin-wink", "fa-face-grin-wide", "fa-face-grin-tongue-wink", "fa-face-grin-tongue-squint", "fa-face-grin-tongue", "fa-face-grin-stars", "fa-face-grin-squint", "fa-face-grin-hearts", "fa-face-grin-beam-sweat", "fa-face-grin-beam", "fa-face-grin", "fa-face-grimace", "fa-face-frown-open", "fa-face-frown", "fa-face-flushed", "fa-face-dizzy", "fa-face-angry"],
            emojiNumber: Math.floor(Math.random() * 33),
            epTheme: localStorage.getItem("theme") == 'dark' ? 'dark' : 'light'
        }
    },
    props: {
        postTweet: Function,
        appendEmoji: Function,
        toggleCommentOnly: Function
    },
    components: {
        EmojiPicker: EmojiPicker,
        TweetTypeSelector
    },
    methods: {
        changeEmoji() {
            // remove last emoji
            document.getElementById("emojiElement").classList.remove(this.emojiList[this.emojiNumber])
            this.emojiNumber = Math.floor(Math.random() * 33)
            document.getElementById("emojiElement").classList.add(this.emojiList[this.emojiNumber])
        },
        toggleEmojiPicker() {
            if (this.emojiMenuOpen) {
                document.getElementById("emojiPickerDiv").classList.add("hidden")
                this.emojiMenuOpen = false
            } else {
                document.getElementById("emojiPickerDiv").classList.remove("hidden")
                this.emojiMenuOpen = true
            }
        }
    },
    mounted() {
        document.getElementById("emojiElement").classList.add(this.emojiList[this.emojiNumber])
    }
}
</script>