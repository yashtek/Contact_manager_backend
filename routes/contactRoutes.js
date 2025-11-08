const express = require('express');
const router = express.Router();
const {getContact, getcontactbyid, updatecontact} = require("../controllers/contactController");
const {createcontact} = require("../controllers/contactController");
const {deletecontact} = require("../controllers/contactController");


router.route("/").get(getContact).post(createcontact);

router.route("/:id").get(getcontactbyid).put(updatecontact).delete(deletecontact);








module.exports = router