const e = require('express');
const recipesModel = require('../../db/recipes');
const mixinsModel = require('../../db/mixins');
const chaistandModel = require('../../db/chaistand');

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

  chaistandModel.validate(newChaistand).then(async (val) => {
    const createdChaistand = await chaistandModel.create(val);
    res.json(createdChaistand);
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
router.get('/:id', (req, res) => {
  res.json({ message: 'not_implemented' });
});

/// ORDERS
// GET
// Get all orders
router.get('/:id/order', (req, res) => {
  res.json({ message: 'not_implemented' });
});

// POST
// Create new order
router.post('/:id/order', (req, res) => {
  res.json({ message: 'not_implemented' });
});

// GET
// Get order by ID
router.get('/:id/order/:orderId', (req, res) => {
  res.json({ message: 'not_implemented' });
});

// PATCH
// Update order by ID
router.patch('/:id/order/:orderId', (req, res) => {
  res.json({ message: 'not_implemented' });
});

module.exports = router;
