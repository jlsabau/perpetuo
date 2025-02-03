const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let articles = [
    { title: "Primer Artículo", content: "Este es el primer artículo de Perpetuo." },
    { title: "Segundo Artículo", content: "Este es otro artículo interesante." }
];

app.get("/articles", (req, res) => {
    res.json(articles);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
