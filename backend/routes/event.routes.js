const router = require("express").Router();
const eventController = require("../controllers/event.controller");

const auth = require("../middleware/auth");
const multer = require("multer");
const upload = multer();
// bb
router.post("/", auth, upload.single("file"), eventController.createEvent);
router.get("/", eventController.readEvent);
router.get("/:id", eventController.readOneEvent);
router.put("/:id", auth, upload.single("file"), eventController.updateEvent);
router.delete("/:id", auth, eventController.deleteEvent);

module.exports = router;
