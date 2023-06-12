const Data = [
    {
        "DataProvider": {
            "signer": "blah",
            "registeredAgent": {
                "user": {
                    "name": "Paul Roberts",
                    "email": "paul@dasifhaewf.com"
                },
                "address": "5 Street Lane",
                "identityId": "50f98f3jdidedeuwii0bcc1"
            },
            "effectiveDate": "2023-05-23T17:17:40.180Z",
            "withImmediateEffect": false,
            "coyIds": [
                "abc",
                "def",
                "ghi",
                "klm"
            ],
            "global": {
                "positions": [
                    {
                        "_id": "12345",
                        "type": "DIRECTOR",
                        "profile": {
                            "name": "John Doe",
                            "email": "johndoe@gmail.com"
                        }
                    },
                    {
                        "_id": "23456",
                        "type": "DIRECTOR",
                        "profile": {
                            "name": "James Smith",
                            "email": "jimmy@smith.com"
                        }
                    },
                    {
                        "_id": "34567",
                        "type": "DIRECTOR",
                        "profile": {
                            "name": "Robert Johnson",
                            "email": "robert@johnson.com"
                        }
                    },
                    {
                        "_id": "45678",
                        "type": "DIRECTOR",
                        "profile": {
                            "name": "Emily Brown",
                            "email": "emily@brown.com"
                        }
                    },
                    {
                        "_id": "56789",
                        "type": "SHAREHOLDER",
                        "profile": {
                            "name": "Sarah Davis",
                            "email": "sarah.davis@example.com"
                        }
                    },
                    {
                        "_id": "67890",
                        "type": "SHAREHOLDER",
                        "profile": {
                            "name": "Michael Wilson",
                            "email": "michael.wilson@example.com"
                        }
                    },
                    {
                        "_id": "78901",
                        "type": "SHAREHOLDER",
                        "profile": {
                            "name": "Emma Thompson",
                            "email": "emma@thompson.com"
                        }
                    },
                    {
                        "_id": "89012",
                        "type": "DIRECTOR",
                        "profile": {
                            "name": "Daniel Johnson",
                            "email": "daniel@johnson.com"
                        }
                    },
                    {
                        "_id": "90123",
                        "type": "SHAREHOLDER",
                        "profile": {
                            "name": "Oliver Taylor",
                            "email": "oliver@taylor.com"
                        }
                    },
                    {
                        "_id": "01234",
                        "type": "SHAREHOLDER",
                        "profile": {
                            "name": "Sophia Martinez",
                            "email": "sophia@example.com"
                        }
                    },
                    {
                        "_id": "12340",
                        "type": "SHAREHOLDER",
                        "profile": {
                            "name": "Benjamin Williams",
                            "email": "ben@williams.com"
                        }
                    },
                    {
                        "_id": "23401",
                        "type": "SHAREHOLDER",
                        "profile": {
                            "name": "Lucas Brown",
                            "email": "lucas@brown.com"
                        }
                    },
                    {
                        "_id": "34012",
                        "type": "SHAREHOLDER",
                        "profile": {
                            "name": "Mia Davis",
                            "email": "mia@example.com"
                        }
                    }
                ],
                "departments": [
                    {
                        "_id": "001",
                        "name": "Marketing",
                        "head": {
                            "name": "Alice Thompson",
                            "email": "alice@example.com"
                        },
                        "employees": 30
                    },
                    {
                        "_id": "002",
                        "name": "Human Resources",
                        "head": {
                            "name": "Bob Johnson",
                            "email": "bob@johnson.com"
                        },
                        "employees": 20
                    },
                    {
                        "_id": "003",
                        "name": "Finance",
                        "head": {
                            "name": "Charlie Brown",
                            "email": "charlie@brown.com"
                        },
                        "employees": 25
                    }
                ]
            },
            "shareholdings": [
                1000,
                500,
                800,
                1200,
                750,
                950,
                1100,
                650
            ],
            "companyDetails": {
                "name": "Fictitious Company",
                "address": "123 Fictitious Lane",
                "industry": "Information Technology",
                "established": "2000-01-01T00:00:00.000Z",
                "employees": 200,
                "revenue": 1000000
            },
            "products": [
                {
                    "name": "Product A",
                    "category": "Software",
                    "launchDate": "2005-06-01T00:00:00.000Z",
                    "price": 100
                },
                {
                    "name": "Product B",
                    "category": "Hardware",
                    "launchDate": "2010-06-01T00:00:00.000Z",
                    "price": 200
                }
            ],
            "businessOperations": {
                "locations": [
                    "New York",
                    "San Francisco",
                    "London",
                    "Berlin",
                    "Sydney"
                ],
                "partners": [
                    {
                        "name": "Partner Company A",
                        "address": "456 Partner Street",
                        "industry": "Finance",
                        "contact": {
                            "name": "David Williams",
                            "email": "david@partnerA.com"
                        }
                    },
                    {
                        "name": "Partner Company B",
                        "address": "789 Partner Avenue",
                        "industry": "Manufacturing",
                        "contact": {
                            "name": "Evelyn Davis",
                            "email": "evelyn@partnerB.com"
                        }
                    }
                ],
                "competitors": [
                    "Competitor Company A",
                    "Competitor Company B"
                ]
            }
        }
    }
]
export default function handler(req, res) {
    res.status(200).json(Data)
}
