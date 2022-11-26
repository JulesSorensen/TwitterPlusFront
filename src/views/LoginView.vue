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
        message: {
            type: String,
            required: false
        }
    },
    components: {
        LoginForm
    }
}
</script>

<style>
#loginView {
    background-image: url('../assets/img/bg-blue.jpg');
}
</style>
