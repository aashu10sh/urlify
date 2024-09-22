import { Hono } from "hono";
import { getCurrentUser } from "../../auth/middlewares/getCurrentUser";
import LinkRepository from "../domain/repositories/linkRepository";
import LinkController from "../presentation/controllers/linkController";
import linkCreationValidator from "../domain/entities/requests/createLinkRequest";
import { UserModel } from "../../core/domain/entities/user.model";
import { HTTPException } from "hono/http-exception";

const linkRouter = new Hono();
const linkRepository = new LinkRepository();
const linkController = new LinkController(linkRepository);

linkRouter.post("/", getCurrentUser, linkCreationValidator, async (c) => {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const user: UserModel = c.get("user");

  const validated = c.req.valid("json");

  const creationResult = await linkController.createLink(
    validated.name,
    validated.slug,
    validated.originalUrl,
    validated.newUrl,
    user.id!,
  );
//   console.log(creationResult)


  if (creationResult.err) {
    throw new HTTPException(creationResult.val.statusCode, {
      message: creationResult.val.message,
      cause: creationResult.val.fields,
    });
  }
  return c.json({created:true, data:creationResult.val})
});

// linkRouter.get('/', getCurrentUser,)

export default linkRouter
