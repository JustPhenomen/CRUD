"use strict";
exports.__esModule = true;
exports.UserRouter = void 0;
var express_1 = require("express");
var user_controller_1 = require("../controller/user.controller");
var is_auth_1 = require("../../middlewares/is-auth");
var attach_current_user_1 = require("../../middlewares/attach-current-user");
var UserRouter = express_1.Router();
exports.UserRouter = UserRouter;
UserRouter.get('/:id', user_controller_1.getUser);
UserRouter.get('/', is_auth_1.isAuth, attach_current_user_1.attachCurrentUser, user_controller_1.getUsers);
UserRouter.post('/', user_controller_1.createUser);
UserRouter["delete"]('/:id', user_controller_1.deleteUser);
