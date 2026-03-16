import Joi from "joi";

export const userSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(6)
        .max(20)
        .required(),

    confirmPassword: Joi.any()
        .valid(Joi.ref("password"))
        .required()
        .messages({ "any.only": "Passwords must match" }),

    age: Joi.number()
        .integer()
        .min(18)
        .max(80)
        .required(),

    role: Joi.string()
        .valid("admin", "user", "visitor")
        .default("visitor"),

    phone: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required(),

    isActive: Joi.boolean()
        .default(true),

    skills: Joi.array()
        .items(Joi.string())
        .min(1),

    address: Joi.object({
        street: Joi.string().required(),
        city: Joi.string().required(),
        zipCode: Joi.string().required()
    }),
});