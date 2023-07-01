/**
 * Event routes
 * host + /api/events
 */

const { Router } = require("express");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events.controller");
const { jwtValidate } = require("../middlewares/jwt-validate.middleware");
const { check } = require("express-validator");
const { fieldValidation } = require("../middlewares/field-validator.middleware");
const { isDate } = require("../helpers/isDate.helper");

const router = Router();
router.use(jwtValidate); // Apply to all rutes of this router

router.get("/", getEvents);

router.post(
  "/", 
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    fieldValidation,
  ],
  createEvent
);

router.put(
  "/:id", 
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    fieldValidation,
  ],
  updateEvent
);

router.delete("/:id", deleteEvent);

module.exports = router;
