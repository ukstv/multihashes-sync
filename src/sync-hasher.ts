import type { MultihashDigest, SyncMultihashHasher } from "multiformats/hashes/interface";
import { create } from "multiformats/hashes/digest";

export class SyncHasher<Name extends string, Code extends number> implements SyncMultihashHasher<Code> {
  constructor(readonly name: string, readonly code: Code, private readonly encode: (bytes: Uint8Array) => Uint8Array) {}

  digest(input: Uint8Array): MultihashDigest<Code> {
    const result = this.encode(input);
    return create(this.code, result);
  }
}
