<template>
  <div class="container">
    <p class="error" v-if="error">{{ error }}</p>
    <div class="chaistands-container">
      <div
        class="chaistand"
        v-for="(chaistand, index) in chaistands"
        v-bind:item="chaistand"
        v-bind:index="index"
        v-bind:key="chaistand._id"
        v-on:click="gotoChaistand(chaistand._id)"
      >
        <h1>{{ chaistand.name }}</h1>
        <p>{{ chaistand.summary }}</p>
        <p>{{ chaistand.recipe }}</p>
      </div>
      <button type="button" v-on:click="createChaiStand()">
        New Chaistand
      </button>
    </div>
  </div>
</template>

<script>
import chaistandApi from '../api/chaistandApi';

export default {
  name: 'Chaistand',
  data() {
    return { error: '', chaistands: [] };
  },
  async created() {
    try {
      this.chaistands = await chaistandApi.getChaistands();
    } catch (e) {
      this.error = e.message;
    }
  },
  methods: {
    async createChaiStand() {
      this.$router.push('create');
    },
    async gotoChaistand(id) {
      this.$router.push(`chaistand/${id}`);
    },
  },
};
</script>
