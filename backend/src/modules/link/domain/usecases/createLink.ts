import { LinkModel } from "../../../core/domain/entities/link.model";
import LinkRepository from "../repositories/linkRepository";

export async function createLink(
  repository: LinkRepository,
  entity: LinkModel,
): Promise<LinkModel> {
  return await repository.create(entity);
}
