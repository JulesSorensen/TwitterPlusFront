<template>
    <div id="allTweets" class="flex flex-col w-full h-screen lg:h-full">
        <div v-for="curTweet in tweets" :key="curTweet.id" class="w-full h-fit">
            <TweetTemplate :tweet="curTweet" />
        </div>
    </div>
</template>
  
<script>
import TweetTemplate from '@/components/TweetTemplate.vue';

export default {
    name: 'TweetList',
    data() {
        return {
            tweets: [
                {
                    id: 1,
                    authorId: 1,
                    authorName: "JeanJeanJeanJeanJeanJeanJeanJeanJeanJeanJeanJeanJean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !Bonjour à tous !Bonjour à tous !Bonjour à tous !Bonjour à tous !Bonjour à tous !Bonjour à tous !Bonjour à tous !Bonjour à tous !Bonjour à tous !Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 2,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 3,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
                {
                    id: 4,
                    authorId: 1,
                    authorName: "Jean",
                    authorPicture: "https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
                    content: "Bonjour à tous !",
                    readOnly: false,
                    createdAt: "1669552528",
                    updatedAt: "1669552528"
                },
            ]
        }
    },
    props: {

    },
    components: {
        TweetTemplate
    }
}
</script>
  
<style>
#allTweets {
    overflow: overlay;
}

::-webkit-scrollbar {
    width: 20px;
}

::-webkit-scrollbar-track {
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: #3a9dd326;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
    overflow: overlay;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #1e859cb0;
}

@media (max-width: 768px) {
    body {
        overflow-y: hidden;
    }
}
</style>