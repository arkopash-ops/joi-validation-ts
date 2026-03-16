import { Router } from "express";
import { validate } from "../middlewares/validate.middleware.js";
import { userSchema } from "../validations/user.validation.js";
import * as userController from "../controllers/user.controller.js";

const router = Router();

router.post(
    "/create",
    validate(userSchema),
    userController.createUser
);

router.get(
    "/getUsers",
    userController.getAllUser
);

export default router;
