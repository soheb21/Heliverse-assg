const express = require("express");
const { createTeam, getTeam, AllTeam } = require("../controller/teamCtrl");

const router = express.Router();

router.post("/", createTeam)
    .get("/:id", getTeam)
    .get("/", AllTeam)

module.exports = router;