<template>
    <div class="flex flex-col relative select-none">
        <i v-if="!commentOnly" v-on:click="toggleSelector" class="dark:text-gray-400 fa-lg fa-solid fa-earth-europe" />
        <i v-else v-on:click="toggleSelector" class="dark:text-gray-400 fa-lg fa-solid fa-comment-slash" />
        <div id="dropdown-states"
            class="hidden w-[16rem] absolute top-3 left-[-50px] bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-800">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
                <li @click="setCommentAll">
                    <button type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <div class="inline-flex items-center">
                            <i class="dark:text-gray-400 fa-xl fa-solid fa-earth-europe"></i>
                            <p class="ml-3">Tout le monde peut répondre</p>
                        </div>
                    </button>
                </li>
                <li @click="setCommentOnly">
                    <button type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <div class="inline-flex items-center">
                            <i class="dark:text-gray-400 fa-xl fa-solid fa-comment-slash"></i>
                            <p class="ml-3">Seul vous pouvez répondre</p>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TweetTypeSelector',
    props: {
        toggleCommentOnly: Function
    },
    data() {
        return {
            commentOnly: false
        }
    },
    methods: {
        toggleSelector() {
            const elements = document.getElementById('dropdown-states');
            elements.classList.toggle('hidden');
        },
        setCommentOnly() {
            if (!this.commentOnly) {
                this.commentOnly = true;
                this.toggleCommentOnly();
            }
            this.toggleSelector();
        },
        setCommentAll() {
            if (this.commentOnly) {
                this.commentOnly = false;
                this.toggleCommentOnly();
            }
            this.toggleSelector();
        }
    }
}
</script>