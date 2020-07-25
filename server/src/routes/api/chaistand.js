const e = require('express');
const recipesModel = require('../../db/recipes');
const mixinsModel = require('../../db/mixins');
const chaistandModel = require('../../db/chaistand');
const ordersModel = require('../../db/orders');

const router = e.Router();

/// CHAISTAND
// GET
// All chaistands
router.get('/', async (req, res) => {
  const allChaistands = await chaistandModel.find({});
  res.json(allChaistands);
});

// POST
// Create new chaistand
router.post('/', async (req, res) => {
  const { name, summary, recipeId } = req.body;

  const newChaistand = {
    name,
    summary,
    recipe: recipeId,
    createdDate: new Date(),
  };

  chaistandModel
    .validate(newChaistand)
    .then(async (val) => {
      const createdChaistand = await chaistandModel.create(val);
      res.json(createdChaistand);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

/// RECIPES
// GET
// Get all recipes
router.get('/recipes', async (req, res) => {
  const allRecipes = await recipesModel.find({});
  res.json(allRecipes);
});

/// MIXINS
// GET
// Get all mixins
router.get('/mixins', async (req, res) => {
  const allMixins = await mixinsModel.find({});
  res.json(allMixins);
});

// GET
// Get chaistand by ID
router.get('/:id', async (req, res) => {
  const { id: _id } = req.params;

  const chaistand = await chaistandModel.find({ _id });
  res.json(chaistand);
});

/// ORDERS
// GET
// Get all orders
router.get('/:id/orders', async (req, res) => {
  const { id: chaistandId } = req.params;
  const allOrders = await ordersModel.find({ chaistandId });
  res.json(allOrders);
});

// POST
// Create new order
router.post('/:id/orders', async (req, res) => {
  const { id: chaistandId } = req.params;
  const { name, cups, mixins } = req.body;

  const newOrder = {
    name,
    chaistandId,
    cups,
    status: 'brewing',
    mixins,
    createdDate: new Date(),
    updatedDate: new Date(),
  };

  ordersModel
    .validate(newOrder)
    .then(async (val) => {
      const createdOrder = await ordersModel.create(newOrder);
      res.json(createdOrder);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

// GET
// Get order by name
router.get('/:id/orders/:name', (req, res) => {
  res.json({ message: 'not_implemented' });
});

// PATCH
// Update order by name
router.patch('/:id/orders/:name', (req, res) => {
  res.json({ message: 'not_implemented' });
});

module.exports = router;
