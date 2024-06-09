const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { useSelector } = require('react-redux');

/*
const feedbackList = THIS WILL BE INFO FROM THE STORE,
 ALL INFO ON FEEDBACK SUBMISSIONS

*/
const feedbackList = []

// will need to grab feedback list eventually to make a post

// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    console.log(`In POST with`, req.body);

    feedbackList.push(req.body);

    let feedback = req.body

    let feedbackArray = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments, feedback.flagged, feedback.date]


    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date")
    VALUES ($1, $2, $3, $4, $5, $6);
    `

    pool.query(queryText, feedbackArray)
    .then((result) => {
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
