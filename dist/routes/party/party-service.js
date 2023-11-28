"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartyService = void 0;
exports.PartyService = {
    createParty: (db, data) => {
        return db
            .insert(data)
            .into("party")
            .returning("*")
            .then(rows => {
            return rows[0];
        });
    },
    getAllParties: (db) => {
        return db.from("party").select("*");
    },
    getAllGuestsInParty: (db, party_id) => {
        return db.from("guest").select("*").where("party_id", party_id);
        // return db.from("guest").select("*").where("party_id", party_id);
    }
};
//# sourceMappingURL=party-service.js.map