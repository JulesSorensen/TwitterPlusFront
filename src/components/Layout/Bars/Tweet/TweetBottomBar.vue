<template>
    <div class="flex flex-row items-center justify-between mb-1 w-full h-fit">
        <div class="flex flex-row h-fit py-2 px-5 space-x-5 ml-10">
            <div class="py-1 relative">
                <i id="emojiElement" class="dark:text-gray-400 fa-lg fa-regular" @mouseover="changeEmoji"
                    v-on:click="toggleEmojiPicker" />
                <div id="emojiPickerDiv" class="absolute select-none top-7 hidden">
                    <EmojiPicker :theme="epTheme" :native="true" @select="appendEmoji" />
                </div>
            </div>
            <div class="py-1">
                <i class="dark:text-gray-400 fa-lg fa-regular fa-image" />
            </div>
        </div>
        <div class="flex flex-row items-center space-x-3 mr-5">
            <TweetTypeSelector :toggleCommentOnly="toggleCommentOnly" />
            <button
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