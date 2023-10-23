export interface Party {
    id: number;
    party_name: string;
    allowed_party_number: number;
}

/**
 * /createParty
 */
export interface CreatePartyReq {
    party_name: string;
    allowed_party_number: number;
}
export interface CreateGuestRes extends Party {}
