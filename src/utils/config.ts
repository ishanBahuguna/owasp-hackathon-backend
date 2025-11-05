import { Nest } from "owasp-nest";
import dotenv from "dotenv";

dotenv.config();

class OWASPNestClient {
    private static instance:Nest;

    // prevent direct construction
    private constructor() {}

    static getInstance() : Nest {
        if(!OWASPNestClient.instance) {
            OWASPNestClient.instance = new Nest({
                apiKey:process.env.NEST_API_KEY
            })
        }

        return OWASPNestClient.instance;
    }
}

export default OWASPNestClient;