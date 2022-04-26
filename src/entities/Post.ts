import { BaseEntity } from "./BaseEntity";

export class Post extends BaseEntity {
  constructor(data: Record<string, unknown>) {
    super();
    Object.assign(this, data);
  }

  public toJson(): Record<string, unknown> {
    const { ...data } = this;
    return data;
  }

  get authoredTitle() {
    return `Author: Vas`;
  }

  description: string | undefined;
  title: string | undefined;
  reg_date: string | Date | undefined;
  user_id: string | undefined;
}
