const express = require("express");
const router = express.Router();

const ProviderService = require("../services/provider-service");
const providerService = new ProviderService();

router.get("/", (req, res) => {
  providerService
    .get()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  providerService
    .getById(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/", (req, res) => {
  const provider = req.body;
  providerService
    .create(provider)
    .then(result => {
      res.send({ res: result });
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/update", (req, res) => {
  const provider = req.body;
  providerService
    .update(provider)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  providerService
    .removeByID(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

module.exports = router;
