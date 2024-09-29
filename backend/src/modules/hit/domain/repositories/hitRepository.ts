import prisma from "../../../core/db/db";
import { HitModel } from "../entities/hit.model";

class HitRepository implements Repository<HitModel> {
  async create(instance: HitModel): Promise<HitModel> {
    const created = await prisma.hits.create({
      data: {
        linkId: instance.linkId!,
        userIp: instance.userIp!,
        userAgent: instance.userAgent!,
      },
    });

    return created as HitModel;
  }

  async delete(instance: HitModel): Promise<HitModel> {
    return new HitModel({});
  }

  async findOne(conditions: HitModel): Promise<HitModel | null> {
    return (await prisma.hits.findFirst({
      where: {
        id: conditions.id,
      },
    })) as HitModel;
  }

  async findMany(
    conditions: HitModel,
    offset: number,
    limit: number,
  ): Promise<HitModel[]> {
    const hits = await prisma.hits.findMany({
      skip: offset,
      take: limit,
      where: {
        id: conditions.id,
        accessedAt: conditions.accessedAt,
        userIp: conditions.userIp,
        userAgent: conditions.userAgent,
      },
    });

    return hits.map((hit) => new HitModel(hit));
  }
}

export default HitRepository