const express = require("express");
const { createUser, AllUsers, SingleUser, updateUser, deleteUser } = require("../controller/userCtrl");

const router = express.Router();

router.post("/", createUser)
    .get("/", AllUsers)
    .get("/:id", SingleUser)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser)

module.exports = router;