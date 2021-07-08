const express = require("express");
const items = require("./items");
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("dist"));

app.get("/api/items", (req, res) => res.send({ items }));

app.get("/api/itemSearch", (req, res) => {
  const searchTerm = req.query.searchTerm;
  const itemsToReturn = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send({ items: itemsToReturn });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
