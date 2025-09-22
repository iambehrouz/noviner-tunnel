"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = __importDefault(require("./config.json"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const controllers_1 = __importDefault(require("./controllers"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json({ limit: "200mb" }));
app.use(body_parser_1.default.urlencoded({
    parameterLimit: 100000,
    limit: "200mb",
    extended: true,
}));
app.use((0, morgan_1.default)("dev"));
app.use("/telegram", controllers_1.default.telegram);
app.listen(Number(process.env.PORT) || config_json_1.default.application.port, "0.0.0.0", () => console.log(`Server Running here 👉 http://localhost:${process.env.PORT || config_json_1.default.application.port}`));
