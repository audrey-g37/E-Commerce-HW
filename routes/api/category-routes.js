const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const dataByCategory = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(dataByCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value

  try {
    const dataByCategoryID = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!dataByCategoryID) {
      res
        .status(404)
        .json({ message: `No category found with the id ${req.params.id}` });
    }

    res.status(200).json(dataByCategoryID);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedCategory[0]) {
      res.status(404).json({
        message: `No category found with the id ${req.params.id} or the update does not contain a change.`,
      });
    }

    res.status(200).json({
      message: `Category with id ${req.params.id} updated.`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });

    if (!deletedCategory) {
      res.status(404).json({
        message: `No category found with the id ${req.params.id}.`,
      });
    }

    res.status(200).json({
      message: `Category with id ${req.params.id} deleted.`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
