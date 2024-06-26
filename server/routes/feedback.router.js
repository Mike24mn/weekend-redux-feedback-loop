const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

const feedbackList = [];

// will need to grab feedback list eventually to make a post

// TODO: This route adds a new feedback entry
router.post("/", (req, res) => {
  console.log(`In POST with`, req.body);

  let feedback = req.body;

// NEVER FORGET HOW MUCH PARSE INT SAVED YOU HERE!!!
// PARSE INT IS A BEAUTIFUL CREATION HANDED DOWN FROM 
// THE HEAVENS ABOVE!!!

  const feeling = parseInt(req.body.feelings, 10);
  const understanding = parseInt(req.body.understanding, 10);
  const support = parseInt(req.body.support, 10);

  let feedbackArray = [
    feeling,
    understanding,
    support,
    feedback.comments,
  ];

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`;

  pool
    .query(queryText, feedbackArray)
    .then((result) => {
      console.log("query successful");
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("error making query...", `${queryText}`, err);
      res.sendStatus(500);
    });
});

// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get("/", (req, res) => {
  console.log("testing");
  const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
