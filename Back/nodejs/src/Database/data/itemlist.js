const constant = require('../../assets/constant');

const itemListData = [
    {
        "id": "1dae7aa4-25e8-4bb0-b498-f96c5027d6df",
        "name": "Nike Air Force 1",
        "tagsEnum": [1, 4],
        "imgCount": 6,
        "price": 123,
        "soleCount": 10,
        "discount": ["N/A"],
        "bundleDeal": ["N/A"],
        "delivery": ["N/A"],
        "color": ["N/A"],
        "amount": 0,
        "star": 4.5,
        "rate": 1234,
        "previewList": [
            "http://localhost:8080/static/item/1dae7aa4-25e8-4bb0-b498-f96c5027d6df/1.jpg",
            "http://localhost:8080/static/item/1dae7aa4-25e8-4bb0-b498-f96c5027d6df/2.png",
            "http://localhost:8080/static/item/1dae7aa4-25e8-4bb0-b498-f96c5027d6df/3.png",
            "http://localhost:8080/static/item/1dae7aa4-25e8-4bb0-b498-f96c5027d6df/4.png",
            "http://localhost:8080/static/item/1dae7aa4-25e8-4bb0-b498-f96c5027d6df/5.png",
            "http://localhost:8080/static/item/1dae7aa4-25e8-4bb0-b498-f96c5027d6df/6.png"
        ]
    },
    {
        "id": "6b40a0b6-91bb-46d7-970b-d4ad0657ec52",
        "name": "Adidas 4D Run",
        "tagsEnum": [1, 4],
        "imgCount": 1,
        "price": 3335,
        "soleCount": 1,
        "discount": ["N/A"],
        "bundleDeal": ["N/A"],
        "delivery": ["N/A"],
        "color": ["N/A"],
        "amount": 0,
        "star": 4.5,
        "rate": 1234,
        "previewList": [
            "http://localhost:8080/static/item/6b40a0b6-91bb-46d7-970b-d4ad0657ec52/1.jpg"
        ]
    },
    {
        "id": "7d54df22-f78b-488b-ad8c-b9ca774ecdcb",
        "name": "New Balance",
        "tagsEnum": [1, 4],
        "imgCount": 1,
        "price": 3800,
        "soleCount": 0,
        "discount": ["N/A"],
        "bundleDeal": ["N/A"],
        "delivery": ["N/A"],
        "color": ["N/A"],
        "amount": 0,
        "star": 4.5,
        "rate": 1234,
        "previewList": [
            "http://localhost:8080/static/item/7d54df22-f78b-488b-ad8c-b9ca774ecdcb/1.jpg"
        ]
    },
    {
        "id": "8bfcfab8-be9b-4a1d-b62a-ed511ef4fc1c",
        "name": "Key chron K2",
        "tagsEnum": [1, 4],
        "imgCount": 1,
        "price": 1500,
        "soleCount": 5,
        "discount": ["N/A"],
        "bundleDeal": ["N/A"],
        "delivery": ["N/A"],
        "color": ["N/A"],
        "amount": 0,
        "star": 4.5,
        "rate": 1234,
        "previewList": [
            "http://localhost:8080/static/item/8bfcfab8-be9b-4a1d-b62a-ed511ef4fc1c/1.jpg"
        ]
    },
    {
        "id": "8ded9f1c-511c-4a87-ac30-246b4e331839",
        "name": "Logitech Mouse",
        "tagsEnum": [1, 4],
        "imgCount": 1,
        "price": 3000,
        "soleCount": 9,
        "discount": ["N/A"],
        "bundleDeal": ["N/A"],
        "delivery": ["N/A"],
        "color": ["N/A"],
        "amount": 0,
        "star": 4.5,
        "rate": 1234,
        "previewList": [
            "http://localhost:8080/static/item/8ded9f1c-511c-4a87-ac30-246b4e331839/1.jpg"
        ]
    },
    {
        "id": "9bc71868-3b4a-4a9b-8d9a-4ed1288cbb64",
        "name": "Razer Mouse",
        "tagsEnum": [1, 4],
        "imgCount": 1,
        "price": 45000,
        "soleCount": 100,
        "discount": ["N/A"],
        "bundleDeal": ["N/A"],
        "delivery": ["N/A"],
        "color": ["N/A"],
        "amount": 0,
        "star": 4.5,
        "rate": 1234,
        "previewList": [
            "http://localhost:8080/static/item/9bc71868-3b4a-4a9b-8d9a-4ed1288cbb64/1.jpg"
        ]
    },
    {
        "id": "45fea2b1-620c-46db-84d5-ed2349ba964e",
        "name": "Macbook",
        "tagsEnum": [1, 4],
        "imgCount": 1,
        "price": 10000,
        "soleCount": 50,
        "discount": ["N/A"],
        "bundleDeal": ["N/A"],
        "delivery": ["N/A"],
        "color": ["N/A"],
        "amount": 0,
        "star": 4.5,
        "rate": 1234,
        "previewList": [
            "http://localhost:8080/static/item/45fea2b1-620c-46db-84d5-ed2349ba964e/1.jpg"
        ]
    },
    {
        "id": "85c6cce4-ad6d-4e82-8482-53613890dded",
        "name": "Air pod pro",
        "tagsEnum": [1, 4],
        "imgCount": 1,
        "price": 30000,
        "soleCount": 0,
        "discount": ["N/A"],
        "bundleDeal": ["N/A"],
        "delivery": ["N/A"],
        "color": ["N/A"],
        "amount": 0,
        "star": 4.5,
        "rate": 1234,
        "previewList": [
            "http://localhost:8080/static/item/85c6cce4-ad6d-4e82-8482-53613890dded/1.jpg"
        ]
    },
    {
        "id": "726a3c40-9968-4ab3-9080-5fd355f1a5b4",
        "name": "Iphone 12 max",
        "tagsEnum": [1, 4],
        "imgCount": 6,
        "price": 26000,
        "soleCount": 5,
        "discount": ["N/A"],
        "bundleDeal": ["N/A"],
        "delivery": ["N/A"],
        "color": ["N/A"],
        "amount": 0,
        "star": 4.5,
        "rate": 1234,
        "previewList": [
            "http://localhost:8080/static/item/726a3c40-9968-4ab3-9080-5fd355f1a5b4/1.jpg"
        ]
    },
    {
        "id": "b0d69d59-66e6-45d5-b9ab-6cb2cb3be491",
        "name": "IPAD Pro",
        "tagsEnum": [1, 4],
        "imgCount": 6,
        "price": 38000,
        "soleCount": 0,
        "discount": ["N/A"],
        "bundleDeal": ["N/A"],
        "delivery": ["N/A"],
        "color": ["N/A"],
        "amount": 0,
        "star": 4.5,
        "rate": 1234,
        "previewList": [
            "http://localhost:8080/static/item/b0d69d59-66e6-45d5-b9ab-6cb2cb3be491/1.jpg"
        ]
    },
    {
        "id": "b8e1e459-ed16-4a55-bdaf-d1e9423bada9",
        "name": "Galaxy Note 20 Ultra",
        "tagsEnum": [1, 4],
        "imgCount": 6,
        "price": 123,
        "soleCount": 10,
        "discount": ["N/A"],
        "bundleDeal": ["N/A"],
        "delivery": ["N/A"],
        "color": ["N/A"],
        "amount": 0,
        "star": 4.5,
        "rate": 1234,
        "previewList": [
            "http://localhost:8080/static/item/b8e1e459-ed16-4a55-bdaf-d1e9423bada9/1.jpg"
        ]
    },
    {
        "id": "ff11fb8c-2aed-4d9e-a633-005f21fb49de",
        "name": "Nokia 3310",
        "tagsEnum": [1, 4],
        "imgCount": 6,
        "price": 123,
        "soleCount": 10,
        "discount": ["N/A"],
        "bundleDeal": ["N/A"],
        "delivery": ["N/A"],
        "color": ["N/A"],
        "amount": 0,
        "star": 4.5,
        "rate": 1234,
        "previewList": [
            "http://localhost:8080/static/item/ff11fb8c-2aed-4d9e-a633-005f21fb49de/1.jpg"
        ]
    }
]

module.exports = {
    itemListData
}