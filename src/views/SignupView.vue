<template>
    <title>Inscription</title>
    <div id="loginView" class="flex flex-col-reverse lg:flex-row lg:justify-start lg:flex-row w-screen h-screen">
        <div class="sm:my-auto md:my-auto h-full">
            <SignupForm />
        </div>
        <div class="flex justify-center mx-2 lg:mx-auto">
            <img src="../assets/logo/banner.png" alt="TwitterPlusIcon" class="w-[300px] my-auto">
        </div>
    </div>
</template>
  
<script>
import SignupForm from '@/components/Forms/SignupForm.vue'

export default {
    name: 'SignupView',
    components: {
        SignupForm
    }
}
</script>

<style>
#loginView {
    background-image: url('../assets/img/bg-blue.jpg');
}
</style>
