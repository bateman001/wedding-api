import { CreateGuestReq, Guest } from "../../types/guest-type";

export const GuestService = {
    createGuest: (db: any, data: CreateGuestReq): Guest => {
        return db
            .insert(data)
            .into("guest")
            .returning("*")
            .then(rows => {
                return rows[0];
            });
    },
    getAllGuests: (db: any): Guest[] => {
        return db.from("guest").select("*");
    },
    getAllAttendingGuests: (db: any): Guest[] => {
        return db.from("guest").select("*").where("attending", true);
    }
};
