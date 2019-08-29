const express = require("express");
const router = express.Router();

const BookingService = require("../services/booking-service");
const bookingService = new BookingService();

router.get("/", (req, res) => {
  bookingService
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
  bookingService
    .getById(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  bookingService
    .getByUserId(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/listing/:id", (req, res) => {
  const id = parseInt(req.params.id);
  bookingService
    .getByListingId(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/", (req, res) => {
  const booking = req.body;
  bookingService
    .create(booking)
    .then(result => {
      res.send({ res: result });
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.post("/update", (req, res) => {
  const booking = req.body;
  bookingService
    .update(booking)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

router.get("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  bookingService
    .removeByID(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});

module.exports = router;
