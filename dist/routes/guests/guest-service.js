"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestService = void 0;
exports.GuestService = {
    createGuest: (db, data) => {
        return db
            .insert(data)
            .into("guest")
            .returning("*")
            .then(rows => {
            return rows[0];
        });
    },
    getAllGuests: (db) => {
        return db.from("guest").select("*");
    },
    getAllAttendingGuests: (db) => {
        return db.from("guest").select("*").where("attending", true);
    },
    updateGuest: (db, id, data) => {
        return db
            .from("guest")
            .where("id", id)
            .update(data)
            .returning("*")
            .then((rows) => {
            return rows[0];
        });
    }
};
//# sourceMappingURL=guest-service.js.map