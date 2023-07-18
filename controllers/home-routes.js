const router = require('express').Router();
const withAuth = require('../utils/auth');


//Renders Homepage
router.get('/', async (req, res) => {
  try {
console.log(req.session.logged_in);
    res.render('homepage', {logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

//Renders Login Page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

//Renders Signup Page
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/blog', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('blog');
});

router.get('/posts', withAuth, async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('posts');
});


module.exports = router;
