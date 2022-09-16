var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const { LongTitleError, LongBodyError } = require('../controllers/error/error');

router.get('/', (req, res, next) => {
    axios('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            for (post of response.data) {
                if (post.title.length > 100) throw new LongTitleError(post.id, post.body);
                if (post.body.length > 220) throw new LongBodyError(post.id, post.body);
            }
            console.log(posts);
            res.header('Content-Type', 'application/json');
            res.send(JSON.stringify(response.data, null, 4)); // pretty print
        })
        .catch((err) => next(err));
});

module.exports = router;
