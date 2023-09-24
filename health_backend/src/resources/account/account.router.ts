import { Router } from "express";
import { respond } from "../../middleware/respond";
import {
  getAccountById,
  updateAccountById,
  register,
  deleteAccountById,
  getallaccounts,
  
  forgetPassword,
  getAccount,
  
  changePassword,
  search,
 
} from "./account.controller";
import { authorize } from "../../middleware/authorization";
import { upload } from "../../middleware/multer";

const accountRouter = Router();

accountRouter.post("/register", upload.single("photo"), register, respond);

accountRouter.post("/forgotPassword", forgetPassword, respond);
accountRouter.post("/changePassword",authorize, changePassword, respond);
accountRouter.get("/getById", authorize, getAccountById, respond);
accountRouter.get("/getAllAccounts", authorize, getallaccounts, respond);
accountRouter.get("/searchByFilter", search, respond);
accountRouter.get("/searchAnAccount", getAccount, respond);
accountRouter.put("/updateById/:id", authorize, updateAccountById, respond);
accountRouter.delete("/deleteById/:id", deleteAccountById, respond);
export default accountRouter;