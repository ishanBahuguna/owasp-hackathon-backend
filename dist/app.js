"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const owasp_nest_1 = require("owasp-nest");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log("Loaded key:", process.env.NEST_API_KEY ? "✅ Found" : "❌ Missing");
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
const nest = new owasp_nest_1.Nest({
    apiKey: process.env.NEST_API_KEY || "",
});
app.get("/check", async (req, res) => {
    try {
        const result = await nest.milestones.listMilestones({
            organization: "OWASP",
            repository: "Nest",
        });
        res.json({ message: "Successs", result });
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ message: "Failure", err });
    }
});
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
