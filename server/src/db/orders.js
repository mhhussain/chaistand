const factory = require('./factory');
const yup = require('yup');

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  chaistandId: yup.string().required(),
  cups: yup.number().required(),
  status: yup.string().required(),
  mixins: yup
    .array()
    .of(
      yup.object().shape({
        _id: yup.string().required(),
        name: yup.string().required(),
        amount: yup.number().required(),
      }),
    )
    .required(),
  createdDate: yup.date().required(),
  updatedDate: yup.date().required(),
});

module.exports = factory.make('orders', schema);
