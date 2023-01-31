const express = require("express");
const filesController = require("./../controllers/filesController");

const router = express.Router();

router
  .route("/")
  .get(filesController.getAllFiles)
  .post(filesController.createFile);

router
  .route("/:id")
  .get(filesController.getFile)
  .patch(filesController.updateFile)
  .delete(filesController.deleteFile);

module.exports = router;
