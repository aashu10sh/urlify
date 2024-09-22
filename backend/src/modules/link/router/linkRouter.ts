import { Hono } from "hono";
import { getCurrentUser } from "../../auth/middlewares/getCurrentUser";
import LinkRepository from "../domain/repositories/linkRepository";
import LinkController from "../presentation/controllers/linkController";

const linkRouter = new Hono();
const linkRepository = new LinkRepository();
const linkController = new LinkController(linkRepository);



linkRouter.post("/", getCurrentUser, (c) => {
    return c.json("");
});