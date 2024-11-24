import { body, param } from "express-validator";

// validate body (longURL) with custom validation rules
export const urlValidator = [
    body("longURL")
        .isURL()
        .withMessage("Invalid URL, please provide a valid URL"),
];

// validate request parameter
export const shortCodeValidator = [
    param("shortURL")
        .isLength({ min: 6, max: 6 })
        .withMessage("shortURL must be of length 6 characters!"),
];
