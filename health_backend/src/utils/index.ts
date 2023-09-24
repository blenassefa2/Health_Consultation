import { Request } from 'express';
import { Aggregate, ObjectId } from 'mongoose';
import nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const paginate = async (req: Request, query: Aggregate<any[]>) => {
  const limit = parseInt(req.query.limit as string) || 20;
  const page = parseInt(req.query.page as string) || 0;
  const result = await query.skip(page * limit).limit(limit);
  return { meta: { page: page, limit: limit }, data: result };
};

export const sendEmail = async (userMessage: Options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.APP_FORWARD_EMAIL_ADDRESS,
        pass: process.env.APP_FORWARD_EMAIL_PASS,
      },
    });

    transporter.sendMail(userMessage, (error, info) => {
      if (error) {
        console.log(error);
      }
    });
    return 'Message successfully forward.';
  } catch (error) {
    return 'Unable to forward your message.' + error;
  }
};
export const generatePassword = (length: number) => {
    const character = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!$^%*';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += character.charAt(Math.floor(Math.random() * character.length));
    }
    return result;
  };