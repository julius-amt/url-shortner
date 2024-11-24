import { Request, Response } from "express";
import { validationResult, matchedData } from "express-validator";
import { urlMappings } from "../models/URLMappingModel";

export const handleHomeRoute = (req: Request, res: Response) => {
    res.render("index", { urlMappings, error: "" });
};

export const handleShortenUrl = (req: Request, res: Response) => {
    // Get the result after middleware validation
    const errors = validationResult(req);
    console.log(`Result from validation error: ${errors}`);

    if (!errors.isEmpty()) {
        res.status(400).render("index", {
            error: errors?.array()[0]?.msg, // send the error message to the index template, I included urlmapping to cause reference error
            urlMappings,
        });
        return;
    }
    console.log(errors.array());

    // Access the successful validated data (longURl)
    const { longURL } = matchedData(req);
    const randomHashString = Math.random().toString(36).substring(2, 8);

    // use the analogy of stack DS
    urlMappings.unshift({ shortURL: randomHashString, longURL });
    res.redirect("/");
};

export const handleRedirect = (req: Request, res: Response) => {
    // Get the result after middleware validation
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
        res.status(400).render("404", {
            error: errors.array()[0].msg,
            isShortcodeError: true,
        });
        return;
    }

    const { shortURL } = matchedData(req);
    console.log(shortURL);

    // Get the URLPair associated w/ the shortCode userprovided
    const requestedURL = urlMappings.find(
        (urlPair) => urlPair.shortURL === shortURL
    );

    // send custom error message if not found
    if (!requestedURL) {
        res.status(400).render("404", {
            error: "Shortcode not found!",
            isShortcodeError: true,
        });
        return;
    }

    // if found, redirect user to the original url (site)
    res.redirect(requestedURL.longURL);
};
