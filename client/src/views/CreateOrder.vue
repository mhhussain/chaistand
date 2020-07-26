<template>
  <div class="container">
    <p>Make my chai</p>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import chaistandApi from '../api/chaistandApi';

export default {
  name: 'CreateOrder',
  data() {
    return {
      error: '',
      mixins: [],
    };
  },
  async created() {
    chaistandApi
      .getMixins()
      .then((m) => (this.mixins = m))
      .catch((e) => (this.error = e));
  },
};
</script>
