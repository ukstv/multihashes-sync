import { sha256 as nobleSHA256 } from "@noble/hashes/sha256";
import { sha512 as nobleSHA512 } from "@noble/hashes/sha512";
import { SyncHasher } from "./sync-hasher.js";

export const sha256 = new SyncHasher<"sha2-256", 0x12>("sha2-256", 0x12, (bytes) => nobleSHA256(bytes));
export const sha512 = new SyncHasher<"sha2-512", 0x13>("sha2-512", 0x13, (bytes) => nobleSHA512(bytes));
