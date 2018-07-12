const express = require("express");
const router  = express.Router();
const bodyParser    = require("body-parser");
const cors          = require("cors");
const mongoose      = require("mongoose");





const app = express();
// app.set("views", "./views");
app.use(cors());
app.use(bodyParser.json());


app.set("view engine", "html");

app.engine("html", require("ejs").renderFile);
//app.use(sslRedirect());

//PUT ALL THE USES AND SETS BEFORE THIS DIST THING !!!/??///????!?!?!?!?! $)
app.use(express.static(__dirname + "/dist"));
app.listen(process.env.PORT || 8080);



var db = mongoose.connection.db;
mongoose.connect("mongodb://admin:admin1@ds129811.mlab.com:29811/liftingboyz");
let conn = mongoose.connection;

console.log("api running");

app.get("/", function(req, res) {
    console.log("f namecheap");
    res.send("f namecheap");
});


app.post('/dailypost', function(req,res){
    console.log(req.body);
    var dt                  = new Date();
    var date            = dt.toUTCString();


    var run={value:req.body[0], date:date};
    var situp={value: req.body[1], date:date};
    var pushup={value:req.body[2], date:date};




    conn.collection("runs").insertOne(run, function(err, res) {
        if (err) {
            //  conn.close();
            return console.log("error with run", err);
        }
    });
    

    conn.collection("situps").insertOne(situp, function(err, res) {
        if (err) {
            //  conn.close();
            return console.log("error with situp", err);
        }
    });


    conn.collection("pushups").insertOne(pushup, function(err, res) {
        if (err) {
            //  conn.close();
            return console.log("error with pushup", err);
        }
    });

        });
