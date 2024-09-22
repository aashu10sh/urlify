import { LinkModel } from "../../../core/domain/entities/link.model";
import LinkRepository from "../repositories/linkRepository";

export async function getLinkById(
  repository: LinkRepository,
  linkId: number,
): Promise<LinkModel | null> {
  return await repository.findOne(new LinkModel({ id: linkId }));
}

export async function getLinkBySlug(
  repository: LinkRepository,
  slug: string,
): Promise<LinkModel | null> {
  return (await repository.findOne(new LinkModel({ slug: slug }))) as LinkModel;
}

export async function getLinksByUser(
  repository: LinkRepository,
  userId: string,
  offset: number,
  limit: number,
): Promise<Array<LinkModel>> {
  return await repository.findMany(
    new LinkModel({ userId: userId }),
    offset,
    limit,
  );
}
