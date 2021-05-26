const express = require("express");
const router = express.Router();
// Archivo para centralizar el exportaje de las rutas
const { getBusinessState, postSalesReport } = require("../controllers/index");

router.get("/secretaria", getBusinessState);

router.post("/ministerio", postSalesReport);

module.exports = router;
