import { CreatePartyReq } from "../../types/party-type";

export const PartyService = {
    createParty: (db: any, data: CreatePartyReq) => {
        return db
            .insert(data)
            .into("party")
            .returning("*")
            .then(rows => {
                return rows[0];
            });
    },
    getAllParties: (db: any) => {
        return db.from("party").select("*");
    },
    getAllGuestsInParty: (db: any, party_id) => {
        return db.from("guest").select("*").where("party_id", party_id);

        // return db.from("guest").select("*").where("party_id", party_id);
    }
};
