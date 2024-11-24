import { Router } from "express";
import {
    handleHomeRoute,
    handleShortenUrl,
    handleRedirect,
} from "../controllers/urlController";
import { urlValidator, shortCodeValidator } from "../validators";

const router = Router();

router.get("/", handleHomeRoute);

router.post("/shorten", urlValidator, handleShortenUrl);

router.get("/:shortURL", shortCodeValidator, handleRedirect);

export { router as URLShortingRouter };
