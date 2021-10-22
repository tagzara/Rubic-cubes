const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    console.log(req.body);

    res.redirect('/login');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('register', (req, res) => {
    console.log(req.body);

    res.redirect('/register');
});

module.exports = router;