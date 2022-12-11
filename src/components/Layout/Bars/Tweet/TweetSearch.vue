<template>
    <div class="flex flex-row items-center justify-between mb-1 w-full h-fit">
        <div class="mt-2 relative mx-auto text-gray-600">
            <input class="border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Recherche utilisateur">
            <button type="submit" class="absolute h-5 right-0 top-0 mt-2 mr-4">
                <svg class="fill-gray-600 h-4 w-4" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
            </button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'TweetSearch',
    data() {
        return {
        }
    },
    props: {
    },
    components: {

    },
    methods: {

    }
}
</script>