<template>
    <div
        class="flex flex-col h-full lg:w-[350px] justify-center bg-blue-500/50 shadow-lg shadow-inner px-10 lg:rounded-l-3xl lg:transition-all lg:duration-500 hover:lg:rounded-l-xl hover:lg:bg-blue-500/90 hover:lg:w-[400px]">
        <h1 class="text-lg font-bold underline mb-3">Espace de connexion</h1>
        <div class="flex flex-col">
            <div class="flex flex-row" v-if="message">
                <p class="message font-semibold text-green-700 border-solid">{{ message }}</p>
            </div>

            <div class="flex flex-row" v-if="error">
                <p class="error font-semibold text-red-700 border-solid">{{ error }}</p>
            </div>

            <div class="flex flex-col justify-center">
                <div class="flex flex-col py-2 space-y-1">
                    <label for="name">Nom ou adresse mail</label>
                    <input id="name" v-model="name" type="text" class="pl-2 rounded-lg shadow-md w-full">
                </div>

                <div class="flex flex-col py-2 space-y-1">
                    <label for="password">Mot de passe</label>
                    <input id="password" v-model="password" type="password" class="pl-2 rounded-lg shadow-md w-full">
                </div>
            </div>

            <input v-on:click="checkForm" type="submit" value="Se connecter"
                class="bg-white hover:bg-blue-100 mt-2 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">

            <router-link to="/signup" class="mt-1 text-blue-200 underline italic">
                Je n'ai pas de compte !
            </router-link>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            // message: null,
            error: null,
            name: null,
            password: null
        }
    },
    props: {
        message: {
            type: String,
            required: false
        }
    },
    methods: {
        async checkForm(e) {
            if (this.props?.message) this.props.message = null;

            if (this.name && this.password) {
                const res = await (await fetch('/authenticate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.name,
                        password: this.password
                    })
                })).json()
                if (res.error) {
                    if (res.message === 'Incorrect login or password') {
                        this.error = "Nom ou mot de passe incorrect";
                    } else {
                        this.error = "Une erreur est survenue";
                    }
                } else {
                    localStorage.setItem('token', res.token);
                    return this.$router.push('/');
                }
            }

            if (!this.name) {
                this.error = 'Vous devez rentrer un nom ou email';
            } else if (!this.password) {
                this.error = 'Vous devez rentrer un mot de passe';
            }

            e.preventDefault();
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

.message {
    color: rgb(33, 116, 90);
    text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
}
</style>