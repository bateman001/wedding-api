export interface Guest {
    id: string;
    firstname: string;
    lastname: string;
    attending: boolean;
    meal: string;
    party_id: number;
}

/**
 * /createGuest
 */
export interface CreateGuestReq {
    firstname: string;
    lastname: string;
    attending: boolean;
    meal: string;
    party_id: number;
}
export interface CreateGuestRes extends Guest {}
