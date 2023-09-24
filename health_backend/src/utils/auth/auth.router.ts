import { Router } from "express";

import { login, logout } from "./auth.controller";
import { respond } from "../../middleware/respond";

const authRouter = Router();

authRouter.post("/login", login, respond);
authRouter.post("/logout", logout, respond);
export default authRouter;