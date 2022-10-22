const path = require('path');
const router = require('express').Router();

//TO-DO: Connect server with HTML
    //Connect Index
router.get('/login', (req, res) => {
   res.render('login')
});
    //Connect to recipes
router.get('/', (req, res) => {
   res.render('homepage')
});
    //redirect undefined to Index
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//Export router function
module.exports = router;