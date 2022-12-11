<template>
    <title>Connexion</title>
    <div id="loginView" class="flex flex-col justify-start lg:justify-end lg:flex-row w-screen h-screen">
        <div class="flex justify-center mx-2 lg:mx-auto">
            <img src="../assets/logo/banner.png" alt="TwitterPlusIcon" class="w-[300px] my-auto">
        </div>
        <div class="sm:my-auto md:my-auto h-full">
            <LoginForm :message="message" />
        </div>
    </div>
</template>
  
<script>
import LoginForm from '@/components/Forms/LoginForm.vue'

export default {
    name: 'LoginView',
    props: {
        type: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            message: this.type
        }
    },
    components: {
        LoginForm
    },
    methods: {
        changeMessage() {
            if(this.type && this.type == "justsu") this.message = "Merci de votre inscription, vous pouvez maintenant vous connecter !"
        }
    },
    mounted() {
        this.changeMessage()
    }
}
</script>

<style>
#loginView {
    background-image: url('../assets/img/bg-blue.jpg');
}
</style>
