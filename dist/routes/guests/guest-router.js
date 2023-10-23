"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const joi_1 = __importDefault(require("joi"));
const guest_service_1 = require("./guest-service");
const guestRouter = express_1.default.Router();
const jsonParser = express_1.default.json();
// const updateBankSchema = Joi.object<UpdateBank>({
//     nickname: Joi.string().allow(null),
//     accountnumber: Joi.string().allow(null),
//     routingnumber: Joi.string().allow(null),
//     accounttype: Joi.string().allow("checkings", "savings", null),
//     defaultaccount: Joi.boolean().allow(null)
// });
const createGuestSchema = joi_1.default.object({
    party_id: joi_1.default.number().required(),
    firstname: joi_1.default.string().required(),
    lastname: joi_1.default.string().required()
});
/**
 * Get all shopify orders
 * @requdst CreateGuestReq
 * @returns Guest
 */
guestRouter.route("/createGuest").post(jsonParser, async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const data = req.body;
        const validData = await createGuestSchema.validateAsync(data);
        const guest = await guest_service_1.GuestService.createGuest(db, validData);
        res.json(guest);
    }
    catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});
guestRouter.route("/getAllGuests").get(async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const guests = await guest_service_1.GuestService.getAllGuests(db);
        res.json(guests);
    }
    catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});
guestRouter.route("/getAllAttendingGuests").get(async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const guests = await guest_service_1.GuestService.getAllAttendingGuests(db);
        res.json(guests);
    }
    catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});
exports.default = guestRouter;
//# sourceMappingURL=guest-router.js.map