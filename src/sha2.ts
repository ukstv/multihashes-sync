import { createHash } from "crypto";
import { SyncHasher } from "./sync-hasher.js";

export const sha256 = new SyncHasher<"sha2-256", 0x12>("sha2-256", 0x12, (bytes) => {
  return createHash("sha256").update(bytes).digest();
});
export const sha512 = new SyncHasher<"sha2-512", 0x13>("sha2-512", 0x13, (bytes) => {
  return createHash("sha512").update(bytes).digest();
});
