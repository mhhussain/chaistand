<template>
  <div class="container">
    <p>Event</p>
    <p class="error" v-if="error">{{ error }}</p>
    <div>
      <label for="chaistand-name">Name</label>
      <input
        type="text"
        class="form-control"
        v-model="name"
        name="chaistand-name"
        id="chaistand-name"
        placeholder="enter name for chaistand"
      />
    </div>
    <div>
      <label for="chaistand-summary">Summary</label>
      <input
        type="text"
        class="form-control"
        v-model="summary"
        name="chaistand-summary"
        id="chaistand-summary"
        placeholder="enter summary for chaistand"
      />
    </div>
    <input
      type="button"
      class="btn btn-primary"
      value="Order Up!"
      v-on:click="createChaistand(name, summary)"
    />
  </div>
</template>

<script>
import ChaistandApi from '../api/chaistandApi';

export default {
  name: 'CreateChaistand',
  data() {
    return {
      error: '',
      name: '',
      summary: '',
    };
  },
  methods: {
    async createChaistand(name, summary) {
      ChaistandApi.createChaistand(name, summary)
        .then(() => this.$router.push('/'))
        .catch((e) => (this.error = e));
    },
  },
};
</script>
