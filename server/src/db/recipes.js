const factory = require('./factory');
const yup = require('yup');

const schema = yup.object().shape({
  _id: yup.string().trim().required(),
  name: yup.string().trim().required(),
  type: yup.string().required(),
  materials: yup.object().required(),
});

module.exports = factory.make('recipes', schema);
