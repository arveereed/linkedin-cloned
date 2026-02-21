import { connectDB } from "../lib/db.js";

export const ensureDB = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (e) {
    next(e);
  }
};
