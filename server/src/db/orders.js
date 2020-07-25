const factory = require('./factory');
const yup = require('yup');

const schema = yup.object().shape({
  _id: yup.string().trim().required(),
  name: yup.string().trim().required(),
  chaistandId: yup.string().required(),
  cups: yup.number().required(),
  status: yup.string().required(),
  mixins: yup.array().of(
    yup.object().shape({
      _id: yup.string().required(),
      name: yup.string().required(),
      amount: yup.number().required(),
    }),
  ),
  createdDate: yup.date().required(),
  updatedDate: yup.date().required(),
});

module.exports = factory.make('orders', schema);
