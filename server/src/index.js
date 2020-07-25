const e = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const _ = require('lodash');

const configs = require('./configs');

let app = e();
app.use(cors());
app.use(helmet());
app.use(morgan(configs.MORGAN_FORMAT));
app.use(e.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// handle static front-end client app for PROD
if (process.env.NODE_ENV === 'prod') {
  app.static(e.static(`{__dirname}/public/`));
  app.get(/.*/, (req, res) => res.sendFile(`{__dirname}/public/index.html`));
}

app.listen(configs.PORT, () => {
  console.log(`Listening at http://localhost:${configs.PORT}`);
});
