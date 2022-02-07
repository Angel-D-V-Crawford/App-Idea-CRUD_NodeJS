const express = require('express');
const path = require('path');
const router = express.Router();
const AppIdea = require('../models/app_idea');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../form_app_idea.html'));
});

router.get('/:id', (req, res) => {
    
    AppIdea.find({_id: req.params.id}, (err, idea) => {
        res.render('update_app_idea', { ideaInfo: idea });
    });
    
});

router.get('/show/:id', (req, res) => {

    AppIdea.find({_id: req.params.id}, (err, idea) => {
        res.render('show_app_idea', { ideaInfo: idea });
    });

});

router.get('/delete/:id', (req, res) => {

    AppIdea.findByIdAndDelete(req.params.id, (err, doc) => {
        res.redirect('../../');
    });

});

module.exports = router;