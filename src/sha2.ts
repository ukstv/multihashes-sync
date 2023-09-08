import { createHash } from "node:crypto";
import { SyncHasher } from "./sync-hasher.js";
import { coerce } from "multiformats/bytes";

export const sha256 = new SyncHasher<"sha2-256", 0x12>("sha2-256", 0x12, (input) => {
  return coerce(createHash("sha256").update(input).digest());
});
export const sha512 = new SyncHasher<"sha2-512", 0x13>("sha2-512", 0x13, (input) => {
  return coerce(createHash("sha512").update(input).digest());
});
