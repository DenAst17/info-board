export type Newable<T> = { new (...args: any[]): T };

export abstract class BaseEntity {
  public abstract toJson(): Record<string, unknown>;
}
