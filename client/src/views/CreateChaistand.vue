<template>
  <div class="container">
    <p>Event</p>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="row">
      <label for="chaistand-name" class="text-primary col-2 text-right"
        >Name</label
      >
      <input
        type="text"
        class="form-control col-8"
        v-model="name"
        name="chaistand-name"
        id="chaistand-name"
        placeholder="enter name for chaistand"
      />
    </div>
    <div class="row">
      <label for="chaistand-summary" class="text-primary col-2 text-right"
        >Summary</label
      >
      <input
        type="text"
        class="form-control col-8"
        v-model="summary"
        name="chaistand-summary"
        id="chaistand-summary"
        placeholder="enter summary for chaistand"
      />
    </div>
    <hr />
    <input
      type="button"
      class="btn btn-success btn-block"
      value="Order Up!"
      v-on:click="createChaistand(name, summary)"
    />
  </div>
</template>

<script>
import chaistandApi from '../api/chaistandApi';

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
      chaistandApi
        .createChaistand(name, summary)
        .then(() => this.$router.push('/'))
        .catch((e) => (this.error = e));
    },
  },
};
</script>
