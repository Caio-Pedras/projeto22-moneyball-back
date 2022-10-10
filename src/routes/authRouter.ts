import { Router } from "express";
import { postSignin, postSignup } from "../controllers/authController";
import { schemaValidator } from "../middlewares/schemaValidator";
import authSchema from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/signup", schemaValidator(authSchema), postSignup);
authRouter.post("/signin", schemaValidator(authSchema), postSignin);

export default authRouter;
