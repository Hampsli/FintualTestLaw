"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Construct a simple Portfolio class that has a collection of Stocks and a "Profit" method that
receives 2 dates and returns the profit of the Portfolio between those dates.
Note: in this point, if the result of the process is a loss is considerer a profit? in a negative way?
Assume each Stock has a "Price" method that receives a date and returns its price.
Bonus Track: make the Profit method return the "annualized return" of the portfolio
between the given dates. */
var mockDataStockHistory_1 = require("./mockDataStockHistory");
var stock = /** @class */ (function () {
    function stock(companyName) {
        this.companyName = companyName;
        this.actualPrice = 0.5;
        this.actualDate = new Date().toLocaleString();
    }
    stock.prototype.pricebyDate = function (actualDate) {
        var dateObject = (0, mockDataStockHistory_1.mockData)().find(function (stockArchiveElement) { return new Date(actualDate).toString() === new Date(stockArchiveElement.actualDate).toString(); });
        if (dateObject === undefined) {
            throw new TypeError('data Stock unable to find');
        }
        return dateObject.actualPrice;
    };
    return stock;
}());
var portfolio = /** @class */ (function () {
    function portfolio() {
        this.stocks = [];
    }
    portfolio.prototype.profit = function (initialDate, endDate) {
        var initialStockPrice = new stock("Netflix").pricebyDate(initialDate);
        var endStockPrice = new stock("Netflix").pricebyDate(endDate);
        var percentageGain = (endStockPrice - initialStockPrice) / initialStockPrice;
        var rangeProfit = initialStockPrice * percentageGain;
        return rangeProfit;
    };
    return portfolio;
}());
console.log(new portfolio().profit("01/04/2024", "04/04/2024"));
