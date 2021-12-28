const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    // res.render(path.join(__dirname, 'views/index.ejs'));
    res.render('index.html', { title: 'Parodia Seo' });

});

router.get('/contact', (req,res) =>{
    // res.render(path.join(__dirname, 'views/index.ejs'));
    res.render('contact.html', { title: 'Página de contacto' });

});


module.exports = router;