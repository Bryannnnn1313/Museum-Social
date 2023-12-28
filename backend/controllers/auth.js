import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/*REGISTER USER */
export const register = async (req, res) => {
    try {
        const {
            firstname,
            lastname, 
            email,
            password,
            picturePath,
            friends,
            location, 
            occupations
        }
        = req.body;
        const salt = await bcrypt.genSalt();
        const paswordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstname,
            lastname, 
            email,
            passwor: passwordHash,
            picturePath,
            friends,
            location, 
            occupations
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



