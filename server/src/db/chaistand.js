const factory = require('./factory');
const yup = require('yup');

const schema = yup.object().shape({
  _id: yup.string().trim().required(),
  name: yup.string().trim().required(),
  summary: yup.string().required(),
  recipe: yup.string().required(),
  createdDate: yup.date().required(),
});

module.exports = factory.make('chaistand', schema);
