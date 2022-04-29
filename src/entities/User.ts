import { BaseEntity } from "./BaseEntity";

export class User extends BaseEntity {
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

  get docObject(){
    return {
      email: this.email,
      password: this.password,
      photo_url: this.photo_url,
      reg_date: this.reg_date,
      user_name: this.user_name
    }
  }

  email: string | undefined;
  password: string | undefined;
  photo_url: string | undefined;
  reg_date: string | Date | undefined;
  user_name: string | undefined;
}
