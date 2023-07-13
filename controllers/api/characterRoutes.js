// const router = require('express').Router();
// const { Character } = require('../../models');

// router.post('/', async (req, res) => {
//   try {
//     const dbUserData = await Character.create({
//       class: req.body.class,
//       race: req.body.race,
//       background: req.body.background,
//       name: req.body.name
//     });

//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res.status(200).json(dbUserData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });