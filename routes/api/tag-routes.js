const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  try {
    const dataByTag = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(dataByTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  try {
    const dataByTagID = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!dataByTagID) {
      res.status(400).json({ message: "No tag found with that id." });
    }

    res.status(200).json(dataByTagID);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
