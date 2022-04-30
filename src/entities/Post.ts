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

  get docObject(){
    return {
      deleted_at: this.deleted_at,
      description: this.description,
      title: this.title,
      reg_date: this.reg_date,
      user_id: this.user_id
    }
  }

  get authoredTitle() {
    return `Author: Vas`;
  }

  deleted_at: number | undefined
  description: string | undefined;
  title: string | undefined;
  reg_date: string | number | Date | undefined;
  user_id: string | undefined;
}
