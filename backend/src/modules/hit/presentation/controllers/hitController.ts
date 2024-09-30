import HitRepository from "../../domain/repositories/hitRepository";
import { createHit } from "../../domain/usecases/createHit";

export default class HitController {
  constructor(readonly hitRepository: HitRepository) {}

  async createHit(userIp: string, userAgent: string, linkId: number) {
    return await createHit({
      hitRepository: this.hitRepository,
      userIp,
      userAgent,
      linkId,
    });
  }
}
