<template>
  <div class="container">
    <p class="error" v-if="error">{{ error }}</p>
    <p>{{ chaistand.name }}</p>
    <div class="orders-container">
      <div
        class="order"
        v-for="(order, index) in orders"
        v-bind:item="order"
        v-bind:index="index"
        v-bind:key="order._id"
      >
        <p class="name">{{ order.name }}</p>
        <p class="cups">{{ order.cups }} cup{{ orders.cups > 1 ? 's' : '' }}</p>
        <div
          class="mixins"
          v-for="(mixin, midx) in order.mixins"
          v-bind:item="mixin"
          v-bind:index="midx"
          v-bind:key="mixin._id"
        >
          <p class="mixin-name">{{ mixin.name }}</p>
          <p class="mixin-amount">x{{ mixin.amount }}</p>
        </div>
        <p class="status">{{ order.status }}</p>
      </div>
    </div>
    <input
      type="button"
      class="btn btn-primary"
      value="Add Order"
      v-on:click="gotoCreateOrder(chaistand._id)"
    />
  </div>
</template>

<script>
import chaistandApi from '../api/chaistandApi';

export default {
  name: 'Chaistand',
  data() {
    return {
      error: '',
      chaistand: {},
      orders: [],
    };
  },
  async created() {
    const { id } = this.$route.params;

    try {
      const chaistand = await chaistandApi.getChaistand(id);
      const orders = await chaistandApi.getOrders(id);
      this.chaistand = chaistand[0];
      this.orders = orders;
    } catch (e) {
      this.error = e.message;
    }
  },
  methods: {
    gotoCreateOrder(id) {
      this.$router.push(`/chaistand/${id}/order/create`);
    },
  },
};
</script>
