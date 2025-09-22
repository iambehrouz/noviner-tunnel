"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class default_1 {
    static md5Hash(value) {
        return crypto_1.default.createHash("md5").update(value).digest("hex");
    }
    static randomInt(min, max) {
        return crypto_1.default.randomInt(min, max);
    }
}
exports.default = default_1;
