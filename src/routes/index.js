const express = require('express');
const router = express.Router(); // se encarga de crear las rutas

// pariodiaseo.com/index.html
router.get('/', (req, res) =>{
    // res.render(path.join(__dirname, 'views/index.ejs'));
    res.render('index.html', { title: 'Parodia Seo' });

});

// pariodiaseo.com/seoprincipiantes.html
router.get('/seo', (req, res) =>{
    // res.render(path.join(__dirname, 'views/seoprincipiantes.ejs'));
    res.render('seo.html', { title: 'Seo para principiantes' });

});


module.exports = router;