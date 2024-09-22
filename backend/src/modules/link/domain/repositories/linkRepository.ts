import prisma from "../../../core/db/db";
import { LinkModel } from "../../../core/domain/entities/link.model";

class LinkRepository implements Repository<LinkModel> {
  async create(instance: LinkModel): Promise<LinkModel> {
    const createdLink = await prisma.links.create({
      data: {
        name: instance.name!,
        newUrl: instance.newUrl!,
        originalUrl: instance.originalUrl!,
        slug: instance.slug!,
        userId: instance.userId!,
      },
    });
    return new LinkModel(createdLink);
  }

  async delete(instance: LinkModel): Promise<LinkModel> {
    const deletedLink = await prisma.links.update({
      where: { id: instance.id },
      data: { deleted: true },
    });

    return new LinkModel(deletedLink);
  }

  async findOne(conditions: Partial<LinkModel>): Promise<LinkModel | null> {
    const link = await prisma.links.findFirst({
      where: {
        id: conditions.id,
        name: conditions.name,
        newUrl: conditions.newUrl,
        originalUrl: conditions.originalUrl,
        slug: conditions.slug,
        userId: conditions.userId,
        deleted: conditions.deleted ?? false,
      },
    });
    return link ? new LinkModel(link) : null;
  }

  async findMany(
    conditions: Partial<LinkModel>,
    offset: number,
    limit: number,
  ): Promise<LinkModel[]> {
    const links = await prisma.links.findMany({
      skip: offset,
      take: limit,
      where: {
        id: conditions.id,
        name: conditions.name,
        newUrl: conditions.newUrl,
        originalUrl: conditions.originalUrl,
        slug: conditions.slug,
        userId: conditions.userId,
        deleted: conditions.deleted ?? false,
      },
    });

    return links.map((link) => new LinkModel(link));
  }

  async update(instance: LinkModel): Promise<LinkModel> {
    const updatedLink = await prisma.links.update({
      where: { id: instance.id },
      data: {
        name: instance.name,
        newUrl: instance.newUrl,
        originalUrl: instance.originalUrl,
        slug: instance.slug,
        userId: instance.userId,
        deleted: instance.deleted ?? false,
      },
    });

    return new LinkModel(updatedLink);
  }
}

export default LinkRepository;
