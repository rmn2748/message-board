const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('new', {title: 'new message'});
});
router.post('/', (req, res) => {
    
})

module.exports = router;