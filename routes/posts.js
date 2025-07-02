const express = require("express");
const router = express.Router();
const posts = require("../data/posts");

//Index
router.get("/", (req, res) => {
  let filteredMenu = posts;
  if (req.query.tags) {
    filteredMenu = posts.filter((post) => post.tags.includes(req.query.tags));
  }
  /*  res.sendStatus(204); */
  res.json(filteredMenu);
  console.log(filteredMenu);
});
//Show
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  res.json(post);
});

//store
router.post("/", (req, res) => {
  //Creiamo un nuovo id incrementando l'ultimo id presente
  const newPostId = posts[posts.length - 1].id + 1;
  //creiamo un nuovo oggetto post
  const newPostObj = {
    id: newPostId,
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags,
  };
  //aggiungiamo il nuovo post 
  posts.push(newPostObj)
  //restituiamo lo status corretto e il post creato
  res.status(201).json(newPostObj);
  console.log(newPostObj)
  
});

/* //update
router.put("/:id", (req, res) => {
  res.send("Modifica integrale del blog" + req.params.id);
}); */

/* router.patch("/:id", (req, res) => {
  res.send("Modifica parziale del blog" + req.params.id);
}); */

//Delete
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404);

    return res.json({
      status: 404,
      error: "Not found",
      message: "Post non trovato",
    });
  }
  posts.splice(posts.indexOf(post), 1);
  res.sendStatus(204);
  console.log(posts);
});

module.exports = router;
