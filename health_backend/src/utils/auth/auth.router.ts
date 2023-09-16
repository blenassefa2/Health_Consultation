import { Router } from "express";

import { login } from "./auth.controller";
import { respond } from "../../middleware/respond";

const authRouter = Router();

authRouter.post("/login", login, respond);
export default authRouter;