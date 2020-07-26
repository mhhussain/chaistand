import axios from 'axios';
const url = '/api';

class ChaistandApi {
  static getChaistands() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => resolve(res.data))
        .catch((e) => reject(e));
    });
  }

  static createChaistand(name, summary) {
    const newChaistand = {
      name,
      summary,
      recipeId: 'Classic Chai',
    };

    return new Promise((resolve, reject) => {
      axios
        .post(url, newChaistand)
        .then((res) => resolve(res.data))
        .catch((e) => reject(e));
    });
  }

  static getChaistand(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/${id}`)
        .then((res) => resolve(res.data))
        .catch((e) => reject(e));
    });
  }

  static getOrders(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/${id}/orders`)
        .then((res) => resolve(res.data))
        .catch((e) => reject(e));
    });
  }

  static createOrder(chaistandId, name, cups, mixins) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/${chaistandId}/orders`, {
          name,
          cups,
          mixins,
        })
        .then((res) => resolve(res.data))
        .catch((e) => reject(e));
    });
  }

  static getMixins() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/mixins`)
        .then((res) => resolve(res.data))
        .catch((e) => reject(e));
    });
  }

  static getRecipes() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/recipes`)
        .then((res) => resolve(res.data))
        .catch((e) => reject(e));
    });
  }
}

export default ChaistandApi;
