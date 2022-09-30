import { hash as stableSHA256 } from "@stablelib/sha256";
import { hash as stableSHA512 } from "@stablelib/sha512";
import { SyncHasher } from "./sync-hasher.js";

export const sha256 = new SyncHasher<"sha2-256", 0x12>("sha2-256", 0x12, (bytes) => stableSHA256(bytes));
export const sha512 = new SyncHasher<"sha2-512", 0x13>("sha2-512", 0x13, (bytes) => stableSHA512(bytes));
