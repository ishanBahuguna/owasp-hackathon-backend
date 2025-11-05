import OWASPNestClient from "../utils/config";
import { Request , Response } from "express";

export const getChapters = async (req :Request , res:Response) => {
    try {
        const client = OWASPNestClient.getInstance();
        const result = await client.chapters.listChapters({
            country:"India"
        });
        res.status(200).json({success:true , data:result})

    } catch(err:any) {
        res.status(500).json({success:false , Error:err});
    }


}