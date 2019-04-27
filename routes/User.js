const express = require('express');
const router = express.Router();
const passport = require("passport");


// @router  GET api/user/test

// @desk Test usres routes
// @acess public

const UserControllers= require("../controlers/users");
router.route("/test").get(UserControllers.test);

module.exports=router;