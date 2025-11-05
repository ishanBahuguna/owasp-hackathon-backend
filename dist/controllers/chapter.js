"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChapters = void 0;
const config_1 = __importDefault(require("../utils/config"));
const getChapters = async (req, res) => {
    try {
        const client = config_1.default.getInstance();
        const result = await client.chapters.listChapters({
            country: "India"
        });
        res.status(200).json({ success: true, data: result });
    }
    catch (err) {
        res.status(500).json({ success: false, Error: err });
    }
};
exports.getChapters = getChapters;
