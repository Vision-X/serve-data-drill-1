const express = require('express');
const cohorts = require('./data/cohorts');
const cors = require('cors');
const app = express();


function findById(data, id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i];
        }
    }
    return null;
}

app.use(cors());

app.get("/", function(req, res) {
    res.json({data: cohorts});
})


app.get("/:id", function(req, res) {
    var currentCohort = findById(cohorts, req.params.id);
    if (!currentCohort) {
        res.status(404);
        res.json({
            error: {
                message: "No record found!"
            }
        });
    } else {
    res.json({data: currentCohort})};
})


app.listen(process.env.PORT || 8080);
