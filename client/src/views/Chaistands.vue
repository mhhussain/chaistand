<template>
  <div class="container">
    <p class="error" v-if="error">{{ error }}</p>
    <div class="chaistands-container">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" class="text-primary">Event</th>
            <th scope="col" class="text-primary">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            id="chaistand"
            class="table-active"
            v-for="(chaistand, index) in chaistands"
            v-bind:item="chaistand"
            v-bind:index="index"
            v-bind:key="chaistand._id"
            v-on:click="gotoChaistand(chaistand._id)"
          >
            <td scope="col" class="text-primary">{{ index + 1 }}</td>
            <td>
              <p class="text-primary">{{ chaistand.name }}</p>
              <p class="font-weight-lighter text-secondary">
                {{ chaistand.recipe }}
              </p>
            </td>
            <td><div class="col text-success">brewing</div></td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        class="btn btn-success btn-block"
        v-on:click="createChaiStand()"
      >
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
