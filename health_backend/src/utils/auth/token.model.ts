import mongoose from "mongoose";

export interface ITokenInterface {
  token: string;
}

export const TokenSchema: mongoose.Schema<ITokenInterface> =
  new mongoose.Schema({
    token: {
      type: String,
      required: true,
    },
  });

export const Token = mongoose.model<ITokenInterface>(
  "Token",
  TokenSchema
);