export class LinkModel {
  id?: number;
  name? : string;
  userId?: string;
  originalUrl?: string;
  slug?: string;
  newUrl?: string;
  deleted?: boolean;
  constructor({
    id,
    userId,
    originalUrl,
    slug,
    newUrl,
  }: {
    id?: number;
    userId?: string;
    originalUrl?: string;
    slug?: string;
    newUrl?: string;
  }) {
    this.id = id;
    this.userId = userId;
    this.originalUrl = originalUrl;
    this.slug = slug;
    this.newUrl = newUrl;
    this.deleted = this.deleted;
  }
}


