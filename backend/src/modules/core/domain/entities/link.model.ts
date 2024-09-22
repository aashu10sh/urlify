export class LinkModel {
  id?: number;
  name?: string;
  userId?: string;
  originalUrl?: string;
  slug?: string;
  newUrl?: string;
  deleted?: boolean;
  constructor({
    id,
    name,
    userId,
    originalUrl,
    slug,
    newUrl,
    deleted,
  }: {
    id?: number;
    name?: string;
    userId?: string;
    originalUrl?: string;
    slug?: string;
    newUrl?: string;
    deleted?: boolean;
  }) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.originalUrl = originalUrl;
    this.slug = slug;
    this.newUrl = newUrl;
    this.deleted = deleted;
  }
}
