const express = require('express');
const cohorts = require('./data/cohorts');
const cors = require('cors');
const app = express();


function findById(data, id){
    for (let i = 0; i < data.length; i++){
        if (data[i].ID == id){
            return data[i];
        }
    }
    return null;
}

app.use(cors());

app.get("/", function(req, res) {
  res.json({Data: cohorts});
})


app.get("/:id", function(req, res) {
    var idNum = findById(cohorts, req.params.id);
    if (!idNum){
        res.status(404);
        res.json({
            error: {
                message: "No record found!"
            }
        });
    } else {
    res.json({Data: idNum})};
});


app.listen(8080);
