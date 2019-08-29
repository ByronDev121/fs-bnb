const express = require("express");
const router = express.Router();

const ListingService = require("../services/listing-service ");
const listingService = new ListingService();

const UploadService = require("../services/upload-service");
const uploadService = new UploadService();

router.get("/", (req, res) => {
  listingService
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
  listingService
    .getById(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/provider/:providerId", (req, res) => {
  const providerId = parseInt(req.params.providerId);
  listingService
    .getByProviderId(providerId)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/", (req, res) => {
  const listing = req.body;
  listingService
    .create(listing)
    .then(result => {
      res.send({ id: result });
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/update", (req, res) => {
  const listing = req.body;
  listingService
    .update(listing)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  listingService
    .removeByID(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/image/:listingId", (req, res) => {
  const listingId = req.params.listingId;
  uploadService
    .upload(req)
    .then(imgUrl => {
      listingService
        .setImageUrl(listingId, imgUrl)
        .then(user => {
          res.json({ user });
        })
        .catch(err => {
          res.status(400).json({ msg: err });
        });
    })
    .catch(err => {
      res.status(400).json({ msg: err });
    });
});

module.exports = router;
