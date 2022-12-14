<template>
    <div id="divComment">
        <div class="flex flex-row">
            <div class="h-[40px] w-[40px] ml-2 relative overflow-hidden inline-block rounded-full">
                <img v-if="!user || !user.picture" class="bg-center block absolute w-full h-full"
                    src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg" alt="bgImg">
                <img v-else class="bg-center block absolute w-full" v-bind:src="user.picture" alt="bgImg">
            </div >
            <textarea id="ta"
                class="flex-1 ml-1 bg-transparent w-full min-h-10 h-auto focus:outline-0 resize-none dark:text-gray-100" />
        </div>
        <TweetBottomBar :postTweet="sendTweet" :appendEmoji="appendToTextArea" :toggleCommentOnly="toggleCommentOnly" />
    </div>
</template>
  
<script>
import TweetBottomBar from '@/components/Layout/Bars/Tweet/TweetBottomBar.vue'

export default {
    name: 'TweetCreation',
    props: {
        isComment: {
            type: Boolean,
            default: false
        },
        postTweet: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            withComments: true
        }
    },
    components: {
        TweetBottomBar
    },
    methods: {
        toggleCommentOnly() {
            this.withComments = !this.withComments;
        },
        getTweetContent() {
            return document.getElementById("ta").value;
        },
        async sendTweet() {
            const text = this.getTweetContent();
            if (await this.postTweet(text, this.withComments) === false) return;
            document.getElementById("ta").value = "";
        },
        appendToTextArea(text) {
            document.getElementById("ta").value += ` ${text.i}`;
        },
        resizeTextArea() {
            const elements = document.getElementsByTagName('textarea');
            elements[0].style.height = 'auto';
            elements[0].style.height = (elements[0].scrollHeight - 16) + 'px';
        },
        getGlobalClass() {
            if (this.isComment) {
                document.querySelector("#divComment").classList.add("flex", "flex-col", "w-full", "h-fit", "pt-3", "border", "border-solid", "border-gray-600", "dark:border-gray-800");
                document.getElementById("ta").setAttribute("placeholder", "Répondre au tweet");
            } else {
                document.querySelector("#divComment").classList.add("flex", "flex-col", "w-full", "h-fit", "pt-3", "rounded-t-2xl", "border", "border-solid", "border-gray-600", "dark:border-gray-800");
                document.getElementById("ta").setAttribute("placeholder", "Quoi de neuf ?");
            }
        }
    },
    mounted() {
        document.getElementById("ta").addEventListener("input", function () {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
        });
        this.getGlobalClass();
    }
}
</script>
  