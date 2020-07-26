<template>
  <div class="container">
    <p class="error" v-if="error">{{ error }}</p>
    <p class="text-secondary">{{ chaistand.name }}</p>
    <div class="orders-container d-sm-flex">
      <div
        id="order"
        class="card border-secondary mb-3"
        style="width: 10rem; max-width: 12rem; margin: 0 1em 0 0"
        v-for="(order, index) in orders"
        v-bind:item="order"
        v-bind:index="index"
        v-bind:key="order._id"
      >
        <div id="name" class="card-header">{{ order.name }}</div>
        <div class="card-body text-secondary">
          <div class="row">
            <div class="col">
              <svg
                class="bi bi-cup"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 4H4v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4zM3 3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3H3z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 5.5h-2v-1h2A1.5 1.5 0 0 1 16 6v4a1.5 1.5 0 0 1-1.5 1.5h-2v-1h2a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5z"
                />
              </svg>
            </div>
            <div class="col">
              {{ order.cups }} cup{{ orders.cups > 1 ? 's' : '' }}
            </div>
          </div>
          <hr />
          <div>
            <div
              class="text-left text-primary text-weight-lighter"
              style="margin: 1em 0 0 0"
            >
              Mixins
            </div>
            <div
              id="mixins"
              class="row row-cols-2"
              v-for="(mixin, midx) in order.mixins"
              v-bind:item="mixin"
              v-bind:index="midx"
              v-bind:key="mixin._id"
            >
              <div id="mixin-name" class="col text-right">{{ mixin.name }}</div>
              <div id="mixin-amount" class="col text-right">
                x{{ mixin.amount }}
              </div>
            </div>
          </div>
          <div
            id="status"
            class="badge badge-success"
            style="margin: 1em 0 0 0;"
          >
            {{ order.status }}
          </div>
        </div>
      </div>
    </div>
    <input
      type="button"
      class="btn btn-success btn-block"
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
