const express = require('express');
const router = express.Router(); // se encarga de crear las rutas

// pariodiaseo.com/index.html
router.get('/', (req, res) =>{
    // res.render(path.join(__dirname, 'views/index.ejs'));
    res.render('index.html', { title: 'Parodia Seo' });

});

// pariodiaseo.com/seo.html
router.get('/seo', (req, res) =>{
    // res.render(path.join(__dirname, 'views/seo.ejs'));
    res.render('seo.html', { title: 'Qué es el Seo' });

});

// pariodiaseo.com/seo-principiantes.html
router.get('/seo-principiantes', (req, res) =>{
    // res.render(path.join(__dirname, 'views/seo-principiantes.ejs'));
    res.render('seo-principiantes.html', { title: 'Seo para principiantes' });

});

// pariodiaseo.com/facilita-navegacion.html
router.get('/facilita-navegacion', (req, res) =>{
    res.render('facilita-navegacion.html', { title: 'Facilita la navegacion' });

});



module.exports = router;