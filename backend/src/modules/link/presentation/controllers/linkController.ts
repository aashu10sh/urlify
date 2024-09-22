import { Err, Ok, Result } from "ts-results";
import LinkRepository from "../../domain/repositories/linkRepository";
import { LinkModel } from "../../../core/domain/entities/link.model";
import { ErrorResponse } from "../../../core/domain/entities/error.response";
import { getLinkBySlug } from "../../domain/usecases/getLink";
import { createLink } from "../../domain/usecases/createLink";

class LinkController {
  constructor(readonly linkRepository: LinkRepository) {}

  async createLink(
    name: string,
    slug: string,
    originalUrl: string,
    newUrl: string,
    userId: string,
  ): Promise<Result<LinkModel, ErrorResponse>> {
    const already = await getLinkBySlug(this.linkRepository, slug);
    if (already) {
      return Err({
        statusCode: 409,
        message: "Link with that slug already exists!",
        fields: ["slug"],
      } satisfies ErrorResponse);
    }
    const created = await createLink(
      this.linkRepository,
      new LinkModel({ name, slug, originalUrl, newUrl, userId }),
    );

    return Ok(created);
  }
}

export default LinkController;
