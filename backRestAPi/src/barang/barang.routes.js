const express = require("express");
const router = express.Router();

const barangController = require("./barang.controller");

router.get("/", barangController.getAllProduct);
router.get("/:id", barangController.getBarangID);
router.post("/", barangController.addBarangData);
router.put("/:id", barangController.editBarangData);
router.delete("/:id", barangController.deleteBarangData);

module.exports = router;