"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Port = 4000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json());
app.get("/", (_, res) => {
    res.json({ message: "Server is alive" });
});
if (process.env.VERCEL !== "1") {
    app.listen(Port, () => {
        console.log(`Local Server Running on ${Port}`);
    });
}
exports.default = app;
