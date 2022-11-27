<template>
    <div class="flex flex-col w-full h-fit pt-3 rounded-t-2xl border border-solid border-gray-600 dark:border-gray-800">
        <div class="flex flex-row">
            <div class="h-10 w-10 ml-2 rounded-full bg-red-100" />
            <textarea id="ta"
                class="flex-1 ml-1 bg-transparent w-full min-h-10 h-auto focus:outline-0 resize-none dark:text-gray-100"
                placeholder="Quoi d'neuf docteur ?" />
        </div>
        <TweetBottomBar :appendEmoji="appendToTextArea" :toggleCommentOnly="toggleCommentOnly" />
    </div>
</template>
  
<script>
import TweetBottomBar from '@/components/Layout/Bars/Tweet/TweetBottomBar.vue'

export default {
    name: 'TweetCreation',
    props: {

    },
    data() {
        let self = this;
        return {
            commentOnly: false,
            toggleCommentOnly() {
                self.tCO();
            }
        }
    },
    components: {
        TweetBottomBar
    },
    methods: {
        appendToTextArea(text) {
            document.getElementById("ta").value += ` ${text.i} `;
        },
        resizeTextArea() {
            const elements = document.getElementsByTagName('textarea');
            elements[0].style.height = 'auto';
            elements[0].style.height = (elements[0].scrollHeight - 16) + 'px';
        },
        tCO() {
            this.commentOnly = !this.commentOnly;
        }
    },
    mounted() {
        document.getElementById("ta").addEventListener("input", function () {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
        });
    }
}
</script>
  