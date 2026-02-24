const AiController = require('../controllers/ai.controller');

const aiRouter = require('express').Router();

aiRouter.post('/completions', AiController.askAi);

module.exports = aiRouter