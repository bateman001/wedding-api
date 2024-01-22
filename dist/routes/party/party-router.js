"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const joi_1 = __importDefault(require("joi"));
const party_service_1 = require("./party-service");
const partyRouter = express_1.default.Router();
const jsonParser = express_1.default.json();
const createPartySchema = joi_1.default.object({
    party_name: joi_1.default.string().required(),
    allowed_party_number: joi_1.default.number().required()
});
/**
 * Creates new party
 * @request CreatePartyReq
 * @returns CreatePartyRes
 */
partyRouter.route("/createParty").post(jsonParser, async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const data = req.body;
        const validData = await createPartySchema.validateAsync(data);
        const party = await party_service_1.PartyService.createParty(db, validData);
        res.json(party);
    }
    catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});
/**
 * Gets all parties
 * @request CreatePartyReq
 * @returns Party[]
 */
partyRouter.route("/getAllParties").get(async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const parties = await party_service_1.PartyService.getAllParties(db);
        res.json(parties);
    }
    catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});
partyRouter.route("/getAllGuestsInAllParties").get(async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const parties = await party_service_1.PartyService.getAllParties(db);
        const allParties = [];
        for (const party of parties) {
            const guests = await party_service_1.PartyService.getAllGuestsInParty(db, party.id);
            const x = {
                party_name: party.party_name,
                guests: guests
            };
            allParties.push(x);
        }
        res.json(allParties);
    }
    catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});
/**
 * Get's all Guests in a Party
 * @params party_id
 * @returns CreatePartyRes
 */
partyRouter.route("/getGuestsByParty/:party_id").get(async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const parties = await party_service_1.PartyService.getAllGuestsInParty(db, req.params.party_id);
        res.json(parties);
    }
    catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});
exports.default = partyRouter;
//# sourceMappingURL=party-router.js.map