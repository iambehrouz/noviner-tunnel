"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const router = express_1.default.Router();
router.post("/send-message/:botToken", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const botToken = req.params.botToken;
        const chatId = req.body.chatId;
        const text = req.body.text;
        yield (0, axios_1.default)({
            method: "POST",
            url: `https://api.telegram.org/${botToken}/sendMessage`,
            headers: {
                ACCEPT: "application/json",
                "Content-Type": "application/json",
            },
            data: {
                chat_id: chatId,
                text,
            },
        });
        return res.json({ botToken, chatId, text });
        return res.json({ status: true, message: "Your request has been done." });
    }
    catch (err) {
        res.json({
            status: false,
            message: "An error has occurred..",
            detail: err,
        });
    }
}));
exports.default = router;
