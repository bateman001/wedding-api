import express from "express";
import Joi from "joi";
import { CreateGuestReq, Guest, UpdateGuest, UpdateGuestReq } from "../../types/guest-type";
import { GuestService } from "./guest-service";

const guestRouter = express.Router();
const jsonParser = express.json();

const updateGuestSchema = Joi.object<UpdateGuest>({
    firstname: Joi.string().allow(null),
    lastname: Joi.string().allow(null),
    meal: Joi.string().allow(null),
    attending: Joi.boolean().allow(null)
});

const createGuestSchema = Joi.object<CreateGuestReq>({
    party_id: Joi.number().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    attending: Joi.boolean().allow(null),
    meal: Joi.string().allow(null)
});

/**
 * Create guest
 * @request CreateGuestReq
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

/**
 * Get all guests
 * @returns Guest[]
 */
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

/**
 * Get all guests where attending is true
 * @returns Guest[]
 */
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

/**
 * Update Guest
 * @request UpdateGuestReq
 * @returns Guest
 */
guestRouter.route("/updateGuest").post(jsonParser, async (req, res, next) => {
    const db = req.app.get("db");
    try {
        const { data, id } = req.body as UpdateGuestReq;
        const validData = await updateGuestSchema.validateAsync(data);
        const guest: Guest = await GuestService.updateGuest(db, id, validData);
        res.json(guest);
    } catch (e) {
        console.log("e", e);
        res.status(500);
        next();
    }
});

export default guestRouter;
