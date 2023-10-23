import express from "express";
import Joi from "joi";
import { CreateGuestReq, Guest } from "../../types/guest-type";
import { GuestService } from "./guest-service";

const guestRouter = express.Router();
const jsonParser = express.json();

// const updateBankSchema = Joi.object<UpdateBank>({
//     nickname: Joi.string().allow(null),
//     accountnumber: Joi.string().allow(null),
//     routingnumber: Joi.string().allow(null),
//     accounttype: Joi.string().allow("checkings", "savings", null),
//     defaultaccount: Joi.boolean().allow(null)
// });

const createGuestSchema = Joi.object<CreateGuestReq>({
    party_id: Joi.number().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required()
});

/**
 * Get all shopify orders
 * @requdst CreateGuestReq
 * @returns Guest
 */
guestRouter.route("/createGuest").post(jsonParser, async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const data = req.body as CreateGuestReq;
        const validData = await createGuestSchema.validateAsync(data);
        const guest: Guest = await GuestService.createGuest(db, validData);
        res.json(guest);
    } catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});

guestRouter.route("/getAllGuests").get(async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const guests: Guest[] = await GuestService.getAllGuests(db);
        res.json(guests);
    } catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});

guestRouter.route("/getAllAttendingGuests").get(async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const guests: Guest[] = await GuestService.getAllAttendingGuests(db);
        res.json(guests);
    } catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});

export default guestRouter;
