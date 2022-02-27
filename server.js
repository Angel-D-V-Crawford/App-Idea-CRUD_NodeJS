require('./models/db');

const express = require('express');
const path = require('path');
const appIdeasRouter = require('./routes/app_ideas');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const AppIdea = require('./models/app_idea');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

app.use(express.static('public'));

//app.use('/', router);
app.get('/', (req, res) => {
    
    AppIdea.find({}, (err, ideas) => {
        res.render('index', { ideaRows: ideas });
    });

});

app.post('/', (req, res) => {

    const newIdea = new AppIdea({
        idea: req.body.idea,
        description: req.body.description,
        requirements: req.body.requirements,
        languages: req.body.languages,
        frameworks: req.body.frameworks,
        difficulty: req.body.difficulty
    });

    newIdea.save();
    res.redirect('/');

});

app.post('/:id', (req, res) => {

    AppIdea.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, doc) => {
        res.redirect('/');
    });

});

app.use('/app_idea', appIdeasRouter);

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
    console.log('Server started at port 3000');
});