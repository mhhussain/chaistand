<template>
  <div class="container">
    <p>Make my chai</p>
    <p class="error" v-if="error">{{ error }}</p>
    <div id="create-order-container">
      <input
        type="text"
        class="form-control"
        v-model="name"
        name="name"
        id="name"
        placeholder="enter name"
      />
      <label for="cups">Cups</label>
      <input
        type="number"
        class="form-control"
        v-model="cups"
        name="cups"
        id="cups"
        placeholder="#"
      />
      <div id="selected-mixins">
        <div
          v-for="(mixin, index) in selectedMixins"
          v-bind:item="mixin"
          v-bind:index="index"
          v-bind:key="index"
        >
          <p>{{ mixin.name }}</p>
          <p>x{{ mixin.amount }}</p>
          <input type="button" v-on:click="removeMixin(index)" value="remove" />
        </div>
      </div>
      <hr />
      <div id="mixins-select">
        <select name="mixins" id="mixins" v-model="dropdownMixin">
          <option
            v-for="(mixin, index) in mixins"
            v-bind:value="mixin"
            v-bind:item="mixin"
            v-bind:index="index"
            v-bind:key="mixin._id"
            >{{ mixin.name }}</option
          >
        </select>
        <input type="number" class="form-control" v-model="mixinAmount" />
        <input
          type="button"
          v-on:click="addMixin(dropdownMixin, mixinAmount)"
          value="add"
        />
      </div>
      <input
        type="button"
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
