const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



const feedbackList = []

// will need to grab feedback list eventually to make a post

// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    console.log(`In POST with`, req.body);

   

    let feedback = req.body

    let feedbackArray = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]


    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`;
   
    pool.query(queryText, feedbackArray)
    .then((result) => {
        console.log("query successful");
        res.sendStatus(201)

    })
    .catch((err) => {
        console.log("error making query...", `${queryText}`, err);
        res.sendStatus(500)

    })

});


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
