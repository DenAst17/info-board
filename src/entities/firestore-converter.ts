import type { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import type { BaseEntity } from "./BaseEntity";
import type { Newable } from "./BaseEntity";

export interface Converter<T> {
  toFirestore(entity: unknown): Record<string, unknown>;
  fromFirestore(snapshot: DocumentSnapshot, options: SnapshotOptions): T;
}

export function converterFactory<Type extends BaseEntity>(
  classType: Newable<Type>
): Converter<Type> {
  class BaseConverter {
    toFirestore(entity: Type) {
      return entity.toJson();
    }
    fromFirestore(snapshot: DocumentSnapshot, options: SnapshotOptions) {
      const data = snapshot.data(options);
      return new classType(data);
    }
  }

  return new BaseConverter();
}
