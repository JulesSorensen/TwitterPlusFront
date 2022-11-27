<template>
    <div
        class="flex flex-col h-full lg:w-[350px] justify-center bg-blue-500/50 shadow-lg shadow-inner px-10 lg:rounded-r-3xl lg:transition-all lg:duration-500 hover:lg:rounded-l-xl hover:lg:bg-blue-500/90 hover:lg:w-[400px]">
        <h1 class="text-lg font-bold underline mb-3">Espace d'inscription</h1>
        <div class="flex flex-col">
            <div class="flex flex-row" v-if="error">
                <p class="error font-semibold text-red-700 border-solid">{{ error }}</p>
            </div>

            <div class="flex flex-col justify-center">
                <div class="flex flex-col py-2 space-y-1">
                    <label for="email">Adresse mail</label>
                    <input id="email" v-model="email" type="email" class="pl-2 rounded-lg shadow-md w-full">
                </div>
                <div class="flex flex-col py-2 space-y-1">
                    <label for="name">Nom d'utilisateur</label>
                    <input id="name" v-model="name" type="text" class="pl-2 rounded-lg shadow-md w-full">
                </div>
                <div class="flex flex-col py-2 space-y-1">
                    <label for="password">Mot de passe</label>
                    <input id="password" v-model="password" type="password" class="pl-2 rounded-lg shadow-md w-full">
                </div>
                <div class="flex flex-col py-2 space-y-1">
                    <label for="passwordconfirmation">Confirmation du mot de passe</label>
                    <input id="passwordconfirmation" v-model="passwordconfirmation" type="password"
                        class="pl-2 rounded-lg shadow-md w-full">
                </div>
            </div>

            <input v-on:click="checkForm" type="submit" value="S'inscrire"
                class="bg-white hover:bg-blue-100 mt-2 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">

            <router-link to="/login" class="mt-1 text-blue-200 underline italic">
                J'ai déjà un compte !
            </router-link>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SignupForm',
    data() {
        return {
            error: null,
            email: null,
            name: null,
            password: null,
            passwordconfirmation: null
        }
    },
    methods: {
        async checkForm(e) {
            if (this.name && this.email && this.isEmail(this.email) && this.password && this.passwordconfirmation && this.password === this.passwordconfirmation) {
                return this.$router.push({
                    name: 'login',
                    state: {
                        message: "Veuillez désormais vous connecter"
                    }
                });
            }

            if (!this.email) {
                this.error = 'Vous devez rentrer une adresse mail';
            } else if (!this.name) {
                this.error = 'Vous devez rentrer un nom d\'utilisateur';
            } else if (!this.isEmail(this.email)) {
                this.error = 'Vous devez rentrer une adresse mail valide';
            } else if (!this.password) {
                this.error = 'Vous devez rentrer un mot de passe';
            } else if (!this.passwordconfirmation) {
                this.error = 'Vous devez confirmer votre mot de passe';
            } else if (this.password !== this.passwordconfirmation) {
                this.error = 'Les mots de passe ne correspondent pas';
            }

            e.preventDefault();
        },
        isEmail(mail) { // eslint-disable-next-line
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(mail);
        }
    }
}
</script>
    

<style>
.error {
    color: rgb(144, 28, 28);
    text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
}
</style>