const express = require("express");
const app = express();
const ApiModel = require("./Models/APIs");
const db = require("./Config/db");
const port = 4000;
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    ApiModel.find({ approved: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log("error: ", error);
        });
});

app.get("/getall", (req, res) => {
    ApiModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log("error: ", error);
        });
})

app.put("/approve", async (req, res) => {
    const id = req.body.id;
    let update = await ApiModel.findByIdAndUpdate(id, { approved: true })
    res.json({ message: "Updated" })
})

app.post("/insert", async (req, res) => {
    const data = req.body;

    if (data.name == "" || data.description == "" || data.url == "" || data.method == "" || data.code == "" || data.tags == "" || data.type == "" || data.user.name == "" || data.user.email == "" || data.language.lang == "" || data.language.database == "") {
        res.json({
            msg: "Please fill all the fields"
        })
        return;
    }
    const newApi = new ApiModel(data);
    await newApi.save();
    res.json({
        message: "API added successfully"
    });
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("Connected to DB!");
    })
});