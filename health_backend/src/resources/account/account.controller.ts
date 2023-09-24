import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";

import { sendEmail, generatePassword } from "../../utils"
import { Account } from "./account.model";
import cloudinary from "../../config/cloudinary";



export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cloudinaryImage = await cloudinary.uploader.upload(req.file.path, {
      folder: "photo",
      use_filename: true,
    });
    
    const hashedpass = await bcrypt.hash(`${req.body.password}`, 10);
    if (!req.body.authKey){
        res.locals.json = {
            statusCode: 401,
            message: "User not verified!"
        }
    }
    let user = await new Account({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      role: req.body.role,
      password: hashedpass,
      profilePhoto: cloudinaryImage.secure_url,
      woreda: req.body.woreda,
      city: req.body.city,
      houeseNo: req.body.houeseNo ,
      kebele: req.body.kebele,
      authKey: req.body.authKey
    });
    await user.save();

    res.locals.json = {
      statusCode: 200,
      data: user,
    };
    return next();
  } catch (error) {
    console.log(error);
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const getAccountById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = res.locals._id;

  Account.findById({ _id: userId })
    .then((user) => {
      if (user) {
        res.locals.json = {
          statusCode: 200,
          data: user,
        };
        return next();
      } else {
        res.locals.json = {
          statusCode: 404,
          message: "user not found",
        };
        return next();
      }
    })
    .catch((error) => {
      res.locals.json = {
        statusCode: 500,
        message: "error occured",
      };
      return next();
    });
};
export const getallaccounts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Account.find({})
    .then((users) => {
      if (users) {
        res.locals.json = {
          statusCode: 200,
          data: users,
        };
        return next();
      } else {
        res.locals.json = {
          statusCode: 404,
          message: "user not found",
        };
        return next();
      }
    })
    .catch((error) => {
      res.locals.json = {
        statusCode: 500,
        message: "error occured",
      };
      return next();
    });
};
export const updateAccountById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, email, phoneNumber } = req.body;
  const userId = req.params.id;
  await Account.findByIdAndUpdate(
    { _id: userId },
    { firstName, lastName, email, phoneNumber }
  )
    .then((user) => {
      if (user) {
        res.locals.json = {
          statusCode: 200,
          data: user,
        };
        return next();
      } else {
        res.locals.json = {
          statusCode: 404,
          message: "user not found",
        };
        return next();
      }
    })
    .catch((error) => {
      res.locals.json = {
        statusCode: 500,
        message: "error occured",
      };
      return next();
    });
};

export const deleteAccountById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;

  Account.deleteOne({ _id: userId })
    .then((result) => {
      if (result.deletedCount && result.deletedCount === 1) {
        res.locals.json = {
          statusCode: 200,
          data: "User deleted successfully",
        };
        return next();
      } else {
        res.locals.json = {
          statusCode: 404,
          message: "user not found",
        };
        return next();
      }
    })
    .catch((error) => {
      res.locals.json = {
        statusCode: 500,
        message: "error occured",
      };
      return next();
    });
};
export const forgetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.body.email
    const newPassword = generatePassword(6);
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(newPassword, salt);
    
    const user = await Account.findOneAndUpdate({email:email}, { password: password });
    if (!user) {
        res.locals.json = {
            statusCode: 404,
            message: "User not found"
        }
        return next()
    }
    const forgotPasswordMessage: any = {
        from: process.env.APP_FORWARD_EMAIL_ADDRESS,
        to: user.email,
        subject: `Successfull password reset`,
        text: `Dear User,\n\n
                  Your password is reset to ${newPassword} login to your account and change the password\n\n
                  `,
      };
      await sendEmail(forgotPasswordMessage);
      res.locals.json = {
        statusCode: 200,
        message: "Password Reset Successfully.",
      };
      return next();
    }
    catch (error) {
    console.log(error);
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const getAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accounts = await Account.find();
    res.locals.json = {
      statusCode: 200,
      data: accounts,
    };
    return next();
  } catch (error) {
    res["locals"].json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newPassword = req.body.password

    const user = res.locals._id;
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(newPassword, salt);
    const result = await Account.findByIdAndUpdate({id_:user}, {password: password})

    if (!result) {
      res.locals.json = {
        statusCode: 404,
        message: "User Not Found!",
      };
      return next();
    }
   
    const changePasswordMessage: any = {
        from: process.env.APP_FORWARD_EMAIL_ADDRESS,
        to: user.email,
        subject: `Successfull password reset`,
        text: `Dear User,\n\n
                  Your password changed successfully\n\n
                  `,
      };
      await sendEmail(changePasswordMessage);
    res.locals.json = {
      statusCode: 200,
      message: "Password changed Successfully.",
    };
    return next();
  } catch (err) {
    console.log(err);
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const search = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const keyword = req.params.keyword || "";

    const users = await Account.find({
      firstName: { $regex: `${keyword}`, $options: "i" },
    });

    res.locals.json = {
      statusCode: 200,
      data: users,
    };
    return next();
  } catch (err) {
    console.log(err);
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};