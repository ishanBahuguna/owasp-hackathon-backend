import express from "express";
import { Nest } from "owasp-nest";
import dotenv from "dotenv";

dotenv.config();

console.log(
    "Loaded key:",
    process.env.NEST_API_KEY ? "✅ Found" : "❌ Missing"
);

const app = express();
const port = process.env.PORT || 4000;

const nest = new Nest({
    apiKey: process.env.NEST_API_KEY || "",
});

app.get("/check", async (req, res) => {
    try {
  const result = await nest.milestones.listMilestones({
    organization: "OWASP",
    repository: "Nest",
  });

        res.json({ message: "Successs", result });
    } catch (err) {
        console.error(err);
        res.status(500).send({message:"Failure" , err});
    
    }
});

app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
);
