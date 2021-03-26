var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/adminblank', function(req, res, next) {
    res.render('admin/blank');
});

router.get('/blank', function(req, res, next) {
    res.render('blank');
});

router.get('/shop', function(req, res, next) {
    res.render('shop');
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.get('/cart', function(req, res, next) {
    res.render('cart');
});

router.get('/checkout', function(req, res, next) {
    res.render('checkout');
});

router.get('/contact', function(req, res, next) {
    res.render('contact');
});

router.get('/dashboard', function(req, res, next) {
    res.render('admin/dashboard');
});

module.exports = router;