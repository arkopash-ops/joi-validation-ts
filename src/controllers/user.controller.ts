import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const createUser = async (req: Request, res: Response) => {
    try {
        const { password, ...rest } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            ...rest,
            password: hashedPassword,
        });
        await user.save();

        const { password: _, ...userResponse } = user.toObject();

        return res.status(201).json({
            success: true,
            data: userResponse,
        });
    } catch (error: any) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                msg: "Email already exists",
            });
        }

        return res.status(500).json({
            success: false,
            msg: error.message || "Server Error",
        });
    }
};

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const users = await User.find().select("-password");

        return res.status(200).json({
            success: true,
            data: users,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            msg: error.message || "Server Error",
        });
    }
};
