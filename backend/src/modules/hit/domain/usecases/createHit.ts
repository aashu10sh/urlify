import { HitModel } from "../entities/hit.model";
import HitRepository from "../repositories/hitRepository";

export async function createHit({
  hitRepository,
  userIp,
  userAgent,
  linkId,
}: {
  hitRepository: HitRepository;
  userIp: string;
  userAgent: string;
  linkId: number;
}) {
  return await hitRepository.create(
    new HitModel({ userIp, userAgent, linkId }),
  );
}
