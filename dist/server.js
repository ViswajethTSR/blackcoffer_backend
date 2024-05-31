"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
require("./models/mongo_connect");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const blackcoffer_routes_1 = __importDefault(require("./routes/blackcoffer_routes"));
exports.app = (0, express_1.default)();
const PORT = 5000;
exports.app.use(body_parser_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use('/api', blackcoffer_routes_1.default);
exports.app.get('/', (req, res) => {
    res.send("<body> Hi !! This is Viswajeth, Welcome to Blackcoffer Server !! Server is live now</body>");
});
exports.app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
});
