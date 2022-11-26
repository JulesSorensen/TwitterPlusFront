<template>
    <div class="flex flex-row items-center justify-between mb-1 w-full h-fit">
        <div class="mt-2 relative mx-auto text-gray-600">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Recherche utilisateur">
            <button type="submit" class="absolute right-0 top-0 mt-2 mr-4">
                <i class="text-gray-600 h-4 w-4 fill-current fa-solid fa-magnifying-glass" />
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