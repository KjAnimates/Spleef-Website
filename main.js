const express = require("express")
const app = express()
const PORT = 5000;

app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
    console.log("yay!")
});

app.get("/", (req, res) => {

});

app.get("/blogs", (req, res) => {
    res.sendFile(__dirname + "/public/blogs.html");
})