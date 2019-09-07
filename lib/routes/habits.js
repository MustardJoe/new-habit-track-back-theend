const { Router } = require('express');
const Habit = require('../models/Habit');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    console.log(req.user);
    const {
      habit,
      description,
    } = req.body;

    Habit
      .create({ habit, description, user: req.user.sub })
      .then(habit => res.send(habit))
      .catch(next);
  });
