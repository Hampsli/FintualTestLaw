"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockData = void 0;
var dataonlyStock = [
    { actualPrice: 0.2,
        actualDate: "01/04/2024" },
    { actualPrice: 0.1,
        actualDate: "02/04/2024" },
    { actualPrice: 0.3,
        actualDate: "03/04/2024" },
    { actualPrice: 0.5,
        actualDate: "04/04/2024" }
];
var mockData = function () {
    var getActualPriceAndDate = function () {
        dataonlyStock.push({ actualPrice: 0.1, actualDate: new Date().toISOString()
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("/")
        });
    };
    getActualPriceAndDate();
    return dataonlyStock;
};
exports.mockData = mockData;
