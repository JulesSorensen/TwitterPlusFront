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
                    <input id="name" v-model="name" v-on:keyup="checkName" type="text"
                        class="pl-2 rounded-lg shadow-md w-full">
                    <p class="text-red-300" v-if="!nameAvailable">Ce nom n'est pas disponible</p>
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

            <div v-if="loarders.signup" class="flex justify-center items-center w-full my-2">
                <svg class="animate-spin fill-gray-800 dark:fill-gray-200" width="30px" height="30px"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z" />
                </svg>
            </div>
            <input v-else v-on:click="checkForm" type="submit" value="S'inscrire"
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
            nameAvailable: false,
            password: null,
            passwordconfirmation: null,
            loarders: {
                signup: false
            }
        }
    },
    methods: {
        async checkForm(e) {
            this.loarders.signup = true;
            if (this.name && this.email && this.isEmail(this.email) && this.password && this.passwordconfirmation && this.password === this.passwordconfirmation) {
                const res = await (await fetch('/accounts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.email,
                        name: this.name,
                        password: this.password
                    })
                })).json();

                if (res.error) {
                    if (res.message === "Account already exists") {
                        this.error = "Un compte avec ces identifiants existe déjà";
                    } else {
                        this.error = "Une erreur est survenue";
                    }
                } else {
                    return this.$router.push({
                        name: 'login',
                        state: {
                            type: "justsu"
                        }
                    });
                }
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

            this.loarders.signup = false;
            e.preventDefault();
        },
        isEmail(mail) { // eslint-disable-next-line
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(mail);
        },
        async checkName() {
            if (!this.name) {
                return this.nameAvailable = false;
            }
            try {
                const r = await (await fetch("/nameAvailability?name=" + this.name)).json();
                if (r.error) {
                    return this.nameAvailable = true;
                } else {
                    return this.nameAvailable = false;
                }
            } catch {
                return this.nameAvailable = false;
            }
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