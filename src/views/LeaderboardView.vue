<template>
  <title>Paramètres</title>
  <div class="flex flex-col lg:flex-row lg:justify-around w-screen h-screen lg:px-10 dark:bg-gray-900">
    <div class="flex flex-col w-full lg:w-fit lg:px-16 fixed lg:static">
      <img src="../assets/logo/icon.png" alt="TwitterPlus" class="w-[50px] mx-3 mt-1 hidden lg:block">
      <LeftMenu />
    </div>
    <div v-if="loaders.accounts" class="flex justify-center items-center w-full my-2">
      <svg class="animate-spin fill-gray-800 dark:fill-gray-200" width="30px" height="30px"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z" />
      </svg>
    </div>
    <div v-else class="flex flex-col w-full ml-5  mt-16 lg:mt-5">
      <h1 class="my-5 font-bold text-2xl dark:text-gray-300">Classement par nombre d'abonnées</h1>
      <div class="space-y-10">
        <div v-for="curAcc in accounts" :key="curAcc.id">
          <div v-on:click="openUser(curAcc.name)" class="flex flex-row items-center ml-2">
            <div class="h-10 w-10">
              <img v-if="!!curAcc.picture" class="rounded-full h-10 w-10" v-bind:src="curAcc.picture"
                v-bind:alt="curAcc.name">
              <img v-else class="rounded-full h-10 w-10"
                src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1670177693~exp=1670178293~hmac=c9f02ed9f9fa0a02fd6803ab76c27e81c5d9da73dda5b61fb0833a554b1cf1d4"
                v-bind:alt="curAcc.name">
            </div>
            <p class="truncate max-w-[10rem] ml-3 font-bold dark:text-gray-200">{{ curAcc.name }}</p>
            <p class="mx-1 dark:text-gray-200">·</p>
            <p class="text-sm w-[100px] min-w-[100px] dark:text-gray-200">{{ getTS(curAcc.createdAt) }}</p>
            <div v-if="curAcc.certification" class="w-5 h-5 ml-1">
              <img src="../assets/img/certif.png" alt="CERTIFIE">
            </div>
            <p class="mx-1 dark:text-gray-200">·</p>
            <p class="mx-1 dark:text-gray-200">{{curAcc.subscribersNb}} abonnées</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftMenu from '@/components/Layout/Bars/Nav/LeftMenu.vue';
import moment from 'moment';

export default {
  name: 'LeaderboardView',
  components: {
    LeftMenu
  },
  data() {
    return {
      accounts: [],
      loaders: {
        accounts: true
      }
    }
  },
  methods: {
    async getAccounts() {
      const data = await (await fetch('/leaderboard', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })).json();

      this.accounts = data;
      this.loaders.accounts = false;
    },
    getTS(sec) {
      return moment(sec).format("DD/MM/YY HH[h]mm")
    },
    openUser(name) {
      this.$router.push({
        name: 'profile',
        params: {
          userName: name
        }
      });
    },
  },
  mounted() {
    this.getAccounts();
  }
}
</script>
