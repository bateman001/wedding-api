const createParty = async () => {
    const url = "https://wedding-api-fb2ef5931f63.herokuapp.com";
    const api_key = "f2242f7a312e337a";
    const guests = [
        {
            "party_name": "Amos Chapman",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Amos",
                    "lastname": "Chapman",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Amr Jan & Denae Rosato",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Amr",
                    "lastname": "Jan",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Denae",
                    "lastname": "Rosato",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Brady Britten & Claire Carlson",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Brady",
                    "lastname": "Britten",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Claire",
                    "lastname": "Carlson",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "The Calhouns",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Caytlyn",
                    "lastname": "Phillips",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Travis",
                    "lastname": "Calhoun",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Grant Bloom",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Grant",
                    "lastname": "Bloom",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Jake Schofield",
            "allowed_party_number": 2,
            "guests": [
                {
                    "id": 9,
                    "firstname": "Jake",
                    "lastname": "Schofield",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": 'James "Ravver"',
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "James",
                    "lastname": "Ravver",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Kay VanNess",
            "allowed_party_number": 1,
            "guests": [
                {
                    "firstname": "Kay",
                    "lastname": "VanNess",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Kenny & Amanda Handel",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Kenny",
                    "lastname": "Handel",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Amanda",
                    "lastname": "Handel",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Lena & Joe Poorman",
            "allowed_party_number": 4,
            "guests": [
                {
                    "firstname": "Lena",
                    "lastname": "Poorman",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Joe",
                    "lastname": "Poorman",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Megan Burch & Kristof Gage Thompson",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Megan",
                    "lastname": "Burch",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Kristof Gage",
                    "lastname": "Thompson",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Philip & Joshua Bateman",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Philip",
                    "lastname": "Bateman",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Joshua",
                    "lastname": "Bateman",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Ryan & Meredith VanNess",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Ryan",
                    "lastname": "VanNess",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Meredith",
                    "lastname": "VanNess",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Sam Rojas",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Sam",
                    "lastname": "Rojas",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Taylor Grey & John Butler",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Taylor",
                    "lastname": "Grey",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "John",
                    "lastname": "Butler",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "The Bateman Family",
            "allowed_party_number": 3,
            "guests": [
                {
                    "firstname": "Janet",
                    "lastname": "Bateman",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Chris",
                    "lastname": "Bateman",
                    "attending": false,
                    "meal": null
                },
                {
                    "id": 27,
                    "firstname": "Beverly",
                    "lastname": "Cheshire",
                    "attending": false,
                    "meal": null,
                    "party_id": 16
                }
            ]
        },
        {
            "party_name": "The Evans Family",
            "allowed_party_number": 3,
            "guests": [
                {
                    "firstname": "Robyn",
                    "lastname": "Evans",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Avery",
                    "lastname": "Evans",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Rosalie",
                    "lastname": "Evans",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "The Olenec Family",
            "allowed_party_number": 4,
            "guests": [
                {
                    "firstname": "Nick",
                    "lastname": "Olenec",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Susie",
                    "lastname": "Siller",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Stella",
                    "lastname": "Olenec",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Nathan",
                    "lastname": "Olenec",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "The Pinero Family",
            "allowed_party_number": 4,
            "guests": [
                {
                    "firstname": "Anthony",
                    "lastname": "Pinero",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Sarah",
                    "lastname": "Pinero",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Marc",
                    "lastname": "Pinero",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "The Tabak Family",
            "allowed_party_number": 4,
            "guests": [
                {
                    "firstname": "Ben",
                    "lastname": "Tabak",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Naomi",
                    "lastname": "Tabak",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Dylan",
                    "lastname": "Tabak",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Olivia",
                    "lastname": "Tabak",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Tom Kistler",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Tom",
                    "lastname": "Kistler",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Logan Thompson",
            "allowed_party_number": 1,
            "guests": [
                {
                    "firstname": "Logan",
                    "lastname": "Thompson",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "The Beach Family",
            "allowed_party_number": 2,
            "guests": [
                {
                    "firstname": "Lisa",
                    "lastname": "Beach",
                    "attending": false,
                    "meal": null
                },
                {
                    "firstname": "Seth",
                    "lastname": "Beach",
                    "attending": false,
                    "meal": null
                }
            ]
        },
        {
            "party_name": "Ashley Price",
            "allowed_party_number": 1,
            "guests": [
                {
                    "firstname": "Ashley",
                    "lastname": "Price",
                    "attending": false,
                    "meal": null
                }
            ]
        }
    ];

    for (const guest of guests) {
        console.log("guest", guest);
        const party = {
            "party_name": guest.party_name,
            "allowed_party_number": guest.allowed_party_number
        };
        console.log("party", party);
        const res = await fetch(`${url}/party/createParty`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-api-key": api_key
            },
            body: JSON.stringify(party)
        });

        const body = await res.json();
        console.log("body", body);
        for (const people of guest.guests) {
            const person = {
                party_id: body.id,
                firstname: people.firstname,
                lastname: people.lastname
            };
            const res = await fetch(`${url}/guest/createGuest`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "x-api-key": api_key
                },

                body: JSON.stringify(person)
            });
        }
    }
};

createParty();
