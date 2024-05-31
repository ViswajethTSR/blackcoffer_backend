"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blackcoffer_controller_1 = require("../controllers/blackcoffer_controller");
const router = (0, express_1.Router)();
router.get('/fetch_blackcoffer', blackcoffer_controller_1.getAllBlackcofferPaged);
exports.default = router;
