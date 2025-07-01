const express = require("express");
const router = express.Router();

const posts = require("../data/array")

//Index
router.get("/", (req, res) => {
  res.json(posts);
});
//Show
router.get("/:id", (req, res) => {
  res.json(posts);
});

/* //store
router.post("/", (req, res) => {
  res.send("Creazione nuovo Blog");
}); */

/* //update
router.put("/:id", (req, res) => {
  res.send("Modifica integrale del blog" + req.params.id);
}); */

/* router.patch("/:id", (req, res) => {
  res.send("Modifica parziale del blog" + req.params.id);
}); */

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((blog) => blog.id === id);
});

module.exports = router;
