<template>
  <div class="container">
    <p class="text-secondary">Make my chai</p>
    <p class="error" v-if="error">{{ error }}</p>
    <div id="create-order-container">
      <input
        type="text"
        class="form-control"
        style="margin: 0 0 1em 0"
        v-model="name"
        name="name"
        id="name"
        placeholder="enter name"
      />
      <div class="row">
        <div class="col-auto">
          <label for="cups" class="col-2 text-primary text-right">Cups</label>
        </div>
        <div class="col-5">
          <input
            type="number"
            min="1"
            max="5"
            class="form-control"
            v-model="cups"
            name="cups"
            id="cups"
            placeholder="#"
          />
        </div>
      </div>
      <hr />
      <div id="selected-mixins text-primary">
        <h5 class="text-left text-primary">Mixins</h5>
        <div
          class="row rol-cols-2"
          v-for="(mixin, index) in selectedMixins"
          v-bind:item="mixin"
          v-bind:index="index"
          v-bind:key="index"
        >
          <div class="col text-right text-primary">{{ mixin.name }}</div>
          <div class="col text-right text-primary">x{{ mixin.amount }}</div>
          <div>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-x-circle-fill"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
              v-on:click="removeMixin(index)"
            >
              <path
                fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"
              />
            </svg>
          </div>
        </div>
      </div>
      <hr />
      <div id="mixins-select">
        <h5 class="text-left text-primary">Add Mixins</h5>
        <div class="form-inline">
          <select
            name="mixins"
            id="mixins"
            class="form-control-sm mb-2 mr-sm-2"
            v-model="dropdownMixin"
          >
            <option
              v-for="(mixin, index) in mixins"
              v-bind:value="mixin"
              v-bind:item="mixin"
              v-bind:index="index"
              v-bind:key="mixin._id"
              >{{ mixin.name }}</option
            >
          </select>
          <input
            type="number"
            min="1"
            max="10"
            class="form-control-sm mb-2 mr-sm-2"
            v-model="mixinAmount"
          />
          <input
            type="button"
            class="form-control-sm mb-2 mr-sm-2"
            v-on:click="addMixin(dropdownMixin, mixinAmount)"
            value="add"
          />
        </div>
      </div>
      <hr />
      <input
        type="button"
        class="btn btn-success btn-block"
        v-on:click="createOrder(chaistandId, name, cups, selectedMixins)"
        value="Place Order"
      />
    </div>
  </div>
</template>

<script>
import chaistandApi from '../api/chaistandApi';

export default {
  name: 'CreateOrder',
  data() {
    return {
      error: '',
      chaistandId: '',
      mixins: [],
      dropdownMixin: {},
      mixinAmount: 0,
      name: '',
      cups: 0,
      selectedMixins: [],
    };
  },
  async created() {
    this.chaistandId = this.$route.params.id;
    chaistandApi
      .getMixins()
      .then((m) => (this.mixins = m))
      .catch((e) => (this.error = e));
  },
  methods: {
    createOrder(id, name, cups, selectedMixins) {
      if (!name || !cups) {
        this.error = 'need name and cups';
        return;
      }
      chaistandApi
        .createOrder(id, name, cups, selectedMixins)
        .then(() => this.$router.push(`/chaistand/${id}`))
        .catch((e) => (this.error = e));
    },
    addMixin(mixin, amount) {
      this.selectedMixins = this.selectedMixins.concat({
        _id: mixin._id,
        name: mixin.name,
        amount,
      });
      this.mixinAmount = 0;
    },
    removeMixin(i) {
      this.selectedMixins.splice(i, 1);
    },
  },
};
</script>
