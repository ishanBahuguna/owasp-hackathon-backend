"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const owasp_nest_1 = require("owasp-nest");
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
