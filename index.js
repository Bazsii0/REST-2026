const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"}
]


app.get('/apihello', (req, res) => {
    res.json("Hello itt az Express webszerver!")
})

app.get('/api/courses', (leg, res) => {
    res.json(courses);
})


app.listen(port, () => {
    console.log(`A webszerver figyel a ${port} webcímen`);
})