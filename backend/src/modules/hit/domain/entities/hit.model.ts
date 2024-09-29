export class HitModel {
  id?: number;
  linkId?: number;
  userIp?: string;
  userAgent?: string;
  accessedAt?: Date;
  constructor({
    id,
    linkId,
    userIp,
    userAgent,
    accessedAt,
  }: {
    id?: number;
    linkId?: number;
    userIp?: string;
    userAgent?: string;
    accessedAt?: Date;
  }) {
    this.id = id;
    this.linkId = linkId;
    this.userIp = userIp;
    this.userAgent = userAgent;
    this.accessedAt = accessedAt;
  }
}
