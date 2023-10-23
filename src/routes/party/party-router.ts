import express from "express";
import Joi from "joi";
import { CreatePartyReq, Party } from "../../types/party-type";
import { PartyService } from "./party-service";

const partyRouter = express.Router();
const jsonParser = express.json();

const createPartySchema = Joi.object<CreatePartyReq>({
    party_name: Joi.string().required(),
    allowed_party_number: Joi.number().required()
});

/**
 * Get all shopify orders
 * @request CreatePartyReq
 * @returns CreatePartyRes
 */
partyRouter.route("/createParty").post(jsonParser, async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const data = req.body as CreatePartyReq;
        const validData = await createPartySchema.validateAsync(data);
        const party: Party = await PartyService.createParty(db, validData);
        res.json(party);
    } catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});

partyRouter.route("/getAllParties").get(async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const parties: Party[] = await PartyService.getAllParties(db);
        res.json(parties);
    } catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});

export default partyRouter;
