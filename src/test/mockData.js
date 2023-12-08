import { vi } from "vitest";

export const mockCatalogContext = {
    pages: {
        "pageCount": 1,
        "previous": false,
        "next": false
    },
    properties: [{
        "_id": "1111",
        "name": "house1",
        "location": "location1",
        "area": 51,
        "description": "Стаята има много боклуци и до леглата има хлебарки. Банята няма тоалетна чиния. Топла вода има рядко.",
        "price": 100,
        "rating": 4,
        "reviews": [],
    },
    {
        "_id": "1112",
        "name": "house2",
        "location": "location2",
        "area": 1000,
        "description": "Imam tuka edna vila, mnogo e hubava, ima kuhnq i mechka s durva.",
        "price": 200,
        "rating": 1,
        "reviews": ["656e0a39db796958a32b4197"],
        "_ownerId": "656e0821db796958a32b408f",
        "currentBidder": "6542a2c6fe9fc48730278423"
    },
    {
        "_id": "1113",
        "name": "house3",
        "location": "location3",
        "area": 620,
        "description": "A charming house in the heart of Austria, boasting warm interiors, stunning Alpine views, and a peaceful atmosphere, perfect for a relaxing retreat",
        "price": 300,
        "createdAt": "2023-11-08T19:52:58.694Z",
        "updatedAt": "2023-12-04T17:12:28.891Z",
        "rating": 5,
        "reviews": ["656e087cdb796958a32b40e1"]
    }],
    onParamsChange: vi.fn()
};

