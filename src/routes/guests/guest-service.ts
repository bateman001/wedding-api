import { CreateGuestReq, Guest, UpdateGuest } from "../../types/guest-type";

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
    },
    updateGuest: (db: any, id: number, data: UpdateGuest): Guest => {
        return db
            .from("guest")
            .where("id", id)
            .update(data)
            .returning("*")
            .then((rows: Guest[]) => {
                return rows[0];
            });
    }
};
