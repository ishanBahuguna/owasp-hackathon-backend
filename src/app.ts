import express from "express";
import { Nest } from "owasp-nest";
import dotenv from "dotenv";
import {router} from "./routes";

dotenv.config();

console.log(
    "Loaded key:",
    process.env.NEST_API_KEY ? "✅ Found" : "❌ Missing"
);

const app = express();
app.use(express.json())
const port = process.env.PORT || 4000;

// const nest = new Nest({
//     apiKey: process.env.NEST_API_KEY || "",
// });

// app.get("/check", async (req, res) => {
//     try {
//   const result = await nest.milestones.listMilestones({
//     organization: "OWASP",
//     repository: "Nest",
//   });

//         res.json({ message: "Successs", result });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send({message:"Failure" , err});
    
//     }
// });

app.use("/api/v1/getDetails" , router);

app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
);
