"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const owasp_nest_1 = require("owasp-nest");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class OWASPNestClient {
    // prevent direct construction
    constructor() { }
    static getInstance() {
        if (!OWASPNestClient.instance) {
            OWASPNestClient.instance = new owasp_nest_1.Nest({
                apiKey: process.env.NEST_API_KEY
            });
        }
        return OWASPNestClient.instance;
    }
}
exports.default = OWASPNestClient;
